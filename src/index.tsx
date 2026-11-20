import { render } from '@solidjs/web';
import { createEffect, createSignal, onCleanup } from 'solid-js';
import { LinkButton, Theme } from '@plunz/storybook';
import { copy, detectLocale, readPreference, savePreference, type Locale, type Preference } from './locale';
import '@plunz/storybook/styles.css';
import './style.css';
import { LegalPage } from './legal';

function Mark(props: { class?: string }) {
  return <svg class={props.class} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" fill="#0f0f0f" />
    <path d="M32 6 21 23h8v9h6v-9h8Z" fill="#f6b6ab" />
    <path d="m32 58 11-17h-8v-9h-6v9h-8Z" fill="#89b4fa" />
    <path d="M6 32 23 21v8h9v6h-9v8Z" fill="#a6e3a1" />
    <path d="m58 32-17 11v-8h-9v-6h9v-8Z" fill="#f38ba8" />
  </svg>;
}

function Arrow(props: { direction?: 'right' | 'up' }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={props.direction === 'up' ? 'M7 17 17 7M8 7h9v9' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;
}



/** Capture's viewfinder mark, drawn in the card's current color. */
function CaptureMark() {
  return <svg class="capture-mark" viewBox="146 146 220 220" aria-hidden="true">
    <path d="M146 196V146H196M316 146H366V196M366 316V366H316M196 366H146V316" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="square" />
    <circle cx="256" cy="256" r="52" fill="currentColor" />
  </svg>;
}

/** A portfolio card. `preview` marks a read-only preview; `href` a live app. */
interface Product {
  no: string;
  name: string;
  category: string;
  description: string;
  note: string;
  class: string;
  symbol: string | ReturnType<typeof CaptureMark>;
  preview?: string;
  href?: string;
}

function App() {

  const [preference, setPreference] = createSignal<Preference>(readPreference());
  const [systemLocale, setSystemLocale] = createSignal<Locale>(detectLocale());
  const locale = (): Locale => preference() === 'system' ? systemLocale() : preference() as Locale;
  const t = (key: keyof typeof copy.en) => copy[locale()][key] || copy.en[key];
  const changeLanguage = (value: Preference) => { setPreference(value); savePreference(value); };
  const products = (): Product[] => [
  { no: '01', name: 'Capture', category: t('photography'), description: t('captureDescription'), note: t('portfolio'), class: 'photos', symbol: <CaptureMark />, href: 'https://capture.plu.nz/' },
  { no: '02', name: 'Split', category: t('everyday'), description: t('splitDescription'), note: t('billSplitting'), class: 'split', symbol: '÷', href: 'https://split.plu.nz/' },
];
  const refreshSystem = () => setSystemLocale(detectLocale());
  const refreshPreference = () => setPreference(readPreference());
  window.addEventListener('languagechange', refreshSystem);
  window.addEventListener('focus', refreshPreference);
  window.addEventListener('pageshow', refreshPreference);
  onCleanup(() => {
    window.removeEventListener('languagechange', refreshSystem);
    window.removeEventListener('focus', refreshPreference);
    window.removeEventListener('pageshow', refreshPreference);
  });
  createEffect(() => {
    const legal = location.pathname === '/privacy' || location.pathname === '/terms';
    return {
      locale: locale(),
      title: legal ? `${location.pathname === '/privacy' ? t('privacy') : t('terms')} — PLUNZ` : `PLUNZ — ${t('taglineStart')} ${t('taglineEnd')}`,
      description: legal ? t('legalDescription') : t('heroDescription'),
      canonical: `https://www.plu.nz${legal ? location.pathname : '/'}`,
    };
  }, ({ locale, title, description, canonical }) => {
    document.documentElement.lang = locale;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
  });
  return <Theme accent="green" shape="square">
    <a class="skip-link" href="#main">{t('skip')}</a>
    <header class="site-header shell">
      <a class="brand" href="/" aria-label={t('home')}><Mark class="brand-mark" /><span>PLUNZ<span class="brand-period">.</span></span></a>
      <nav aria-label={t('navigation')}><a href="/#apps">{t('explore')}</a><a href="/#about">{t('about')}</a><a class="nav-github" href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">GitHub <Arrow direction="up" /></a></nav>
      <label class="language-control"><span>{t('language')}</span><select aria-label={t('language')} value={preference()} onChange={event => changeLanguage(event.currentTarget.value as Preference)}><option value="system">{t('system')}</option><option value="en">English</option><option value="pt">Português</option><option value="es">Español</option></select></label>
    </header>

    {location.pathname === '/privacy' || location.pathname === '/terms' ? <LegalPage kind={location.pathname === '/privacy' ? 'privacy' : 'terms'} locale={locale()} /> : <main id="main">
      <section class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line" /> {t('eyebrow')}</div>
          <h1 id="hero-title">{t('taglineStart')}<br /><em>{t('taglineEnd')}</em></h1>
          <p>{t('heroDescription')}</p>
          <LinkButton class="primary-link" href="#apps">{t('exploreApps')} <Arrow /></LinkButton>
        </div>
        <div class="hero-art" aria-label={t('markDescription')} role="img">
          <div class="art-grid" aria-hidden="true" />
          <div class="orbit orbit-one" aria-hidden="true" /><div class="orbit orbit-two" aria-hidden="true" />
          <Mark class="hero-mark" />
          <span class="art-caption top">{t('independent')}</span><span class="art-caption bottom">{t('connected')}</span>
          <span class="art-coordinate">+ 00.01</span>
        </div>
      </section>

      <section class="intro shell" id="about" aria-labelledby="intro-title">
        <div class="section-index"><span>{t('idea')}</span><span>01 / 02</span></div>
        <div class="intro-body"><h2 id="intro-title">{t('toolbox')}<br /><span>{t('room')}</span></h2><p>{t('aboutDescription')}</p></div>
        <div class="principles" aria-label={t('approach')}><span><b>01</b> {t('focused')}</span><span><b>02</b> {t('realLife')}</span><span><b>03</b> {t('together')}</span></div>
      </section>

      <section class="apps-section" id="apps" aria-labelledby="apps-title"><div class="shell">
        <div class="section-index"><span>{t('theToolbox')}</span><span>02 / 02</span></div>
        <div class="apps-heading"><div><div class="eyebrow">{t('building')}</div><h2 id="apps-title">{t('meet')}<span class="accent-dot">.</span></h2></div><p>{t('appsDescription')}</p></div>
        <div class="app-grid">{products().map(product => <article class={`app-card ${product.class}${product.preview || product.href ? ' linked' : ''}`} aria-labelledby={`title-${product.no}`}>
          <div class="card-top"><span class="card-number">{product.no} / 02</span><span class="status"><span class="status-dot" /> {product.preview ? t('previewStatus') : t('available')}</span></div>
          <div class="app-visual" aria-hidden="true"><div class="visual-surface"><span class="visual-symbol">{product.symbol}</span><span class="visual-plus">+</span></div></div>
          <div class="card-content"><p class="card-category">{product.category}</p><h3 id={`title-${product.no}`}>{product.name}</h3><p>{product.description}</p></div>
          <div class="card-foot"><span>{product.note}</span>{(product.preview || product.href) && <a class="preview-link" href={product.preview || product.href} aria-label={`${product.preview ? t('openPreview') : t('openApp')} ${product.name}`}>{product.preview ? t('openPreview') : t('openApp')} <Arrow /></a>}</div>
        </article>)}</div>
        <p class="availability-note">{t('availability')}</p>
      </div></section>

      <section class="closing shell" aria-labelledby="closing-title"><Mark class="closing-mark" /><div><p class="eyebrow">{t('justStart')}</p><h2 id="closing-title">{t('littleMore')}<br /><em>{t('oneApp')}</em></h2></div><a href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">{t('follow')} <Arrow direction="up" /></a></section>
    </main>}

    <footer class="site-footer shell"><a class="brand" href="/" aria-label={t('home')}><Mark class="brand-mark" /><span>PLUNZ<span class="brand-period">.</span></span></a><p>{t('taglineStart')} {t('taglineEnd')}</p><a href="/privacy">{t('privacy')}</a><a href="/terms">{t('terms')}</a><a href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">GitHub <Arrow direction="up" /></a><span>© {new Date().getFullYear()} PLUNZ</span></footer>
  </Theme>;
}

render(() => <App />, document.getElementById('root')!);
