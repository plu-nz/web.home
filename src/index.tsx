import { render } from 'solid-js/web';
import './style.css';

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

const products = [
  { no: '01', name: 'PLUNZ Photo', category: 'Photography', description: 'A quiet home for your photos. Share a portfolio, organize albums, and let the images speak for themselves.', note: 'Portfolio & albums', class: 'photos', symbol: '◰' },
  { no: '02', name: 'PLUNZ Meal', category: 'Everyday planning', description: 'Make meal planning feel manageable. Keep your ideas, prep, and routine in one simple place.', note: 'Meals & prep', class: 'meals', symbol: '▦' },
  { no: '03', name: 'PLUNZ Practice', category: 'Practice management', description: 'A calmer way for psychologists to coordinate appointments, confirmations, and payments.', note: 'Scheduling', class: 'practice', symbol: '◷' },
];

function App() {
  return <>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header shell">
      <a class="brand" href="/" aria-label="PLUNZ home"><Mark class="brand-mark" /><span>PLUNZ<span class="brand-period">.</span></span></a>
      <nav aria-label="Main navigation"><a href="#apps">Explore apps</a><a href="#about">About</a><a class="nav-github" href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">GitHub <Arrow direction="up" /></a></nav>
    </header>

    <main id="main">
      <section class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line" /> ONE IDEA, MANY POSSIBILITIES</div>
          <h1 id="hero-title">Small apps.<br /><em>Big possibilities.</em></h1>
          <p>A growing collection of focused tools for the little things that make a big difference. Simple on their own. Better together.</p>
          <a class="primary-link" href="#apps">Explore the apps <Arrow /></a>
        </div>
        <div class="hero-art" aria-label="Four colorful arrows coming together as the PLUNZ symbol" role="img">
          <div class="art-grid" aria-hidden="true" />
          <div class="orbit orbit-one" aria-hidden="true" /><div class="orbit orbit-two" aria-hidden="true" />
          <Mark class="hero-mark" />
          <span class="art-caption top">INDEPENDENT TOOLS</span><span class="art-caption bottom">CONNECTED BY POSSIBILITY</span>
          <span class="art-coordinate">+ 00.01</span>
        </div>
      </section>

      <section class="intro shell" id="about" aria-labelledby="intro-title">
        <div class="section-index"><span>THE IDEA</span><span>01 / 02</span></div>
        <div class="intro-body"><h2 id="intro-title">One toolbox.<br /><span>Room for everything.</span></h2><p>PLUNZ is a home for small, independent apps. Each one is built around a specific need, without the noise that gets in the way. The plus sign is our reminder that useful things add up.</p></div>
        <div class="principles" aria-label="Our approach"><span><b>01</b> Focused by design</span><span><b>02</b> Made for real life</span><span><b>03</b> Better together</span></div>
      </section>

      <section class="apps-section" id="apps" aria-labelledby="apps-title"><div class="shell">
        <div class="section-index"><span>THE TOOLBOX</span><span>02 / 02</span></div>
        <div class="apps-heading"><div><div class="eyebrow">WHAT WE'RE BUILDING</div><h2 id="apps-title">Meet the apps<span class="accent-dot">.</span></h2></div><p>Three starting points. Each with its own purpose, all part of the same family.</p></div>
        <div class="app-grid">{products.map(product => <article class={`app-card ${product.class}`} aria-labelledby={`title-${product.no}`}>
          <div class="card-top"><span class="card-number">{product.no} / 03</span><span class="status"><span class="status-dot" /> In development</span></div>
          <div class="app-visual" aria-hidden="true"><div class="visual-surface"><span class="visual-symbol">{product.symbol}</span><span class="visual-plus">+</span></div></div>
          <div class="card-content"><p class="card-category">{product.category}</p><h3 id={`title-${product.no}`}>{product.name}</h3><p>{product.description}</p></div>
          <div class="card-foot"><span>{product.note}</span></div>
        </article>)}</div>
        <p class="availability-note">These apps are in development. Names and availability may change as they take shape.</p>
      </div></section>

      <section class="closing shell" aria-labelledby="closing-title"><Mark class="closing-mark" /><div><p class="eyebrow">THIS IS JUST THE START</p><h2 id="closing-title">A little more possible,<br /><em>one app at a time.</em></h2></div><a href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">Follow along on GitHub <Arrow direction="up" /></a></section>
    </main>

    <footer class="site-footer shell"><a class="brand" href="/" aria-label="PLUNZ home"><Mark class="brand-mark" /><span>PLUNZ<span class="brand-period">.</span></span></a><p>Small apps. Big possibilities.</p><a href="https://github.com/plu-nz" target="_blank" rel="noopener noreferrer">GitHub <Arrow direction="up" /></a><span>© {new Date().getFullYear()} PLUNZ</span></footer>
  </>;
}

render(() => <App />, document.getElementById('root')!);
