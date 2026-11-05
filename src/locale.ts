import { readSharedPreference, writeSharedPreference } from './locale-preference';

export type Locale = 'en' | 'pt' | 'es';
export type Preference = Locale | 'system';
const key = 'plunz.home.locale';

export function detectLocale(tags: readonly string[] = typeof navigator === 'undefined' ? [] : navigator.languages): Locale {
  const preferred = tags.length ? tags : typeof navigator === 'undefined' ? [] : [navigator.language];
  for (const tag of preferred) {
    const base = tag.trim().toLowerCase().split(/[-_]/)[0];
    if (base === 'en' || base === 'pt' || base === 'es') return base;
  }
  return 'en';
}

export function readPreference(): Preference {
  try {
    return readSharedPreference(localStorage, key);
  } catch { return 'system'; }
}

export function savePreference(value: Preference): void {
  try {
    writeSharedPreference(localStorage, key, value);
  } catch { /* Private browsing can disable storage. */ }
}

export const copy = {
  en: {
    skip: 'Skip to content', home: 'PLUNZ home', navigation: 'Main navigation', language: 'Language', system: 'System language', explore: 'Explore apps', about: 'About', eyebrow: 'ONE IDEA, MANY POSSIBILITIES', taglineStart: 'Small apps.', taglineEnd: 'Big possibilities.', heroDescription: 'A growing collection of focused tools for the little things that make a big difference. Simple on their own. Better together.', exploreApps: 'Explore the apps', markDescription: 'Four colorful arrows coming together as the PLUNZ symbol', independent: 'INDEPENDENT TOOLS', connected: 'CONNECTED BY POSSIBILITY', idea: 'THE IDEA', toolbox: 'One toolbox.', room: 'Room for everything.', aboutDescription: 'PLUNZ is a home for small, independent apps. Each one is built around a specific need, without the noise that gets in the way. The plus sign is our reminder that useful things add up.', approach: 'Our approach', focused: 'Focused by design', realLife: 'Made for real life', together: 'Better together', theToolbox: 'THE TOOLBOX', building: 'AVAILABLE TOOLS', meet: 'Meet the apps', appsDescription: 'Three focused tools, each with its own purpose.', previewStatus: 'Read-only preview', available: 'Available', openCapture: 'Open Capture preview', openSplit: 'Open Split', openPreview: 'Open preview', openApp: 'Open app', availability: 'Split and Pomodoro are available. Capture has a read-only preview.', justStart: 'THIS IS JUST THE START', littleMore: 'A little more possible,', oneApp: 'one app at a time.', follow: 'Follow along on GitHub', photography: 'Photography', captureDescription: 'A quiet home for your photos. Share a portfolio, organize albums, and let the images speak for themselves.', portfolio: 'Portfolio & albums', everyday: 'Everyday tools', splitDescription: 'Scan a receipt, check the items, and divide a bill fairly with friends. No account needed.', billSplitting: 'Bill splitting', pomodoroDescription: 'Focus for 25 minutes, then take a break. A simple timer that stays on your device.', focusTimer: 'Focus timer',
  },
  pt: {
    skip: 'Pular para o conteúdo', home: 'Página inicial da PLUNZ', navigation: 'Navegação principal', language: 'Idioma', system: 'Idioma do sistema', explore: 'Explorar apps', about: 'Sobre', eyebrow: 'UMA IDEIA, MUITAS POSSIBILIDADES', taglineStart: 'Pequenos apps.', taglineEnd: 'Grandes possibilidades.', heroDescription: 'Uma coleção crescente de ferramentas para pequenas coisas que fazem grande diferença. Simples por conta própria. Melhores juntas.', exploreApps: 'Explorar os apps', markDescription: 'Quatro setas coloridas formando o símbolo da PLUNZ', independent: 'FERRAMENTAS INDEPENDENTES', connected: 'CONECTADAS POR POSSIBILIDADES', idea: 'A IDEIA', toolbox: 'Uma caixa de ferramentas.', room: 'Espaço para tudo.', aboutDescription: 'A PLUNZ reúne apps pequenos e independentes. Cada um atende a uma necessidade específica, sem distrações. O sinal de mais lembra que coisas úteis se somam.', approach: 'Nossa abordagem', focused: 'Foco no essencial', realLife: 'Feito para a vida real', together: 'Melhores juntos', theToolbox: 'AS FERRAMENTAS', building: 'FERRAMENTAS DISPONÍVEIS', meet: 'Conheça os apps', appsDescription: 'Três ferramentas focadas, cada uma com seu propósito.', previewStatus: 'Prévia somente leitura', available: 'Disponível', openCapture: 'Abrir prévia do Capture', openSplit: 'Abrir Split', openPreview: 'Abrir prévia', openApp: 'Abrir app', availability: 'Split e Pomodoro estão disponíveis. Capture tem uma prévia somente leitura.', justStart: 'ESTE É SÓ O COMEÇO', littleMore: 'Um pouco mais possível,', oneApp: 'um app de cada vez.', follow: 'Acompanhe no GitHub', photography: 'Fotografia', captureDescription: 'Um lugar tranquilo para suas fotos. Compartilhe um portfólio, organize álbuns e deixe as imagens falarem por si.', portfolio: 'Portfólio e álbuns', everyday: 'Ferramentas do dia a dia', splitDescription: 'Fotografe uma conta, confira os itens e divida o valor com amigos. Sem precisar de conta.', billSplitting: 'Divisão de contas', pomodoroDescription: 'Foque por 25 minutos e depois faça uma pausa. Um timer simples que fica no seu dispositivo.', focusTimer: 'Timer de foco',
  },
  es: {
    skip: 'Ir al contenido', home: 'Inicio de PLUNZ', navigation: 'Navegación principal', language: 'Idioma', system: 'Idioma del sistema', explore: 'Explorar apps', about: 'Acerca de', eyebrow: 'UNA IDEA, MUCHAS POSIBILIDADES', taglineStart: 'Pequeñas apps.', taglineEnd: 'Grandes posibilidades.', heroDescription: 'Una colección creciente de herramientas para las pequeñas cosas que marcan una gran diferencia. Simples por separado. Mejores juntas.', exploreApps: 'Explorar las apps', markDescription: 'Cuatro flechas de colores que forman el símbolo de PLUNZ', independent: 'HERRAMIENTAS INDEPENDIENTES', connected: 'CONECTADAS POR POSIBILIDADES', idea: 'LA IDEA', toolbox: 'Una caja de herramientas.', room: 'Espacio para todo.', aboutDescription: 'PLUNZ reúne apps pequeñas e independientes. Cada una atiende una necesidad concreta, sin distracciones. El signo más nos recuerda que las cosas útiles se suman.', approach: 'Nuestro enfoque', focused: 'Enfocadas por diseño', realLife: 'Hechas para la vida real', together: 'Mejores juntas', theToolbox: 'LAS HERRAMIENTAS', building: 'HERRAMIENTAS DISPONIBLES', meet: 'Conoce las apps', appsDescription: 'Tres herramientas enfocadas, cada una con su propósito.', previewStatus: 'Vista previa de solo lectura', available: 'Disponible', openCapture: 'Abrir vista previa de Capture', openSplit: 'Abrir Split', openPreview: 'Abrir vista previa', openApp: 'Abrir app', availability: 'Split y Pomodoro están disponibles. Capture tiene una vista previa de solo lectura.', justStart: 'ESTO ES SOLO EL COMIENZO', littleMore: 'Un poco más posible,', oneApp: 'una app a la vez.', follow: 'Síguenos en GitHub', photography: 'Fotografía', captureDescription: 'Un lugar tranquilo para tus fotos. Comparte un portafolio, organiza álbumes y deja que las imágenes hablen por sí solas.', portfolio: 'Portafolio y álbumes', everyday: 'Herramientas cotidianas', splitDescription: 'Fotografía una cuenta, revisa los artículos y divide el importe con amigos. Sin cuenta de usuario.', billSplitting: 'División de cuentas', pomodoroDescription: 'Concéntrate durante 25 minutos y luego descansa. Un temporizador sencillo que permanece en tu dispositivo.', focusTimer: 'Temporizador de enfoque',
  }
} as const;
