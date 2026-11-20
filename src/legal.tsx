import type { Locale } from './locale';

type Section = { title: string; paragraphs: string[] };
type Document = { title: string; updated: string; intro: string; sections: Section[] };

const documents: Record<Locale, Record<'privacy' | 'terms', Document>> = {
  en: {
    privacy: {
      title: 'Privacy policy', updated: 'Last updated: November 20, 2026',
      intro: 'This policy covers the PLUNZ website and the current Capture, Split, Lounge, and Nexus apps. Each app has a different purpose and handles data differently.',
      sections: [
        { title: 'PLUNZ website', paragraphs: ['The website presents our apps. It does not require an account or run analytics. A language preference may be saved in your browser and shared across plu.nz apps. Basic request data may be processed by our hosting provider to deliver and protect the site.'] },
        { title: 'Capture: Google account and Drive', paragraphs: ['Capture uses Google Sign-In to identify the owner of a profile. It receives your Google account identifier and verified email address. When you choose to connect your Drive, Capture separately asks for the drive.file permission. This gives Capture access to files it creates or that you explicitly share with it, not your entire Drive.', 'Capture stores account and profile records, a session, the Drive folder reference, and an encrypted Google refresh token in its Cloudflare database. The token is used by the server to access the connected files while your connection remains active. Public profile information and media you publish can be viewed by anyone with the profile link. Media files are stored in your Google Drive; published files must be link accessible so visitors can view them.', 'You can disconnect Google access in your Google Account permissions. To ask about removal of a Capture account or its associated records, use the contact route below. Revoking access stops future authorized Drive requests but does not automatically remove public links or files already shared in Drive.'] },
        { title: 'Split', paragraphs: ['Split does not require an account. Bill drafts stay on your device. If you use receipt scanning, the photo is sent to the Split API and Cloudflare Workers AI to suggest items for your review.'] },
        { title: 'Lounge and Nexus', paragraphs: ['Lounge and Nexus are desktop apps that run on your computer and send nothing to PLUNZ. Lounge contacts the addons you install directly and, if you sign in, the Stremio service; it keeps only the sign-in key, settings, and watch progress on your computer. When you play a BitTorrent stream, other peers in that swarm can see your IP address. Nexus controls your computer locally. Their pages at lounge.plu.nz and nexus.plu.nz work like this website, and the downloads are served by GitHub.'] },
        { title: 'Sharing, retention, and your choices', paragraphs: ['We use service providers needed to operate these apps, including Cloudflare for hosting and Google for Capture sign-in and user-owned Drive storage. We do not sell your personal information. Browser data can be cleared in your browser. You can manage Capture access in your Google Account and control public sharing in your Drive.', 'For privacy requests or questions, contact PLUNZ through the contact link below. We may update this policy as the apps change; the date above identifies the current version.'] },
      ],
    },
    terms: {
      title: 'Terms of service', updated: 'Last updated: November 20, 2026',
      intro: 'These terms apply to the PLUNZ website and the current Capture, Split, Lounge, and Nexus apps. By using an app, you agree to use it lawfully and respect other people’s rights.',
      sections: [
        { title: 'Using the apps', paragraphs: ['PLUNZ provides small tools as available. Features may change, be interrupted, or be discontinued. You are responsible for checking information the apps produce before relying on it, including receipt scan suggestions and bill totals.'] },
        { title: 'Your content and accounts', paragraphs: ['You keep ownership of content you provide. In Capture, you authorize us to access the Google Drive files needed to operate your profile and to display content you choose to publish. Do not upload or publish content you lack permission to use, or content that violates applicable law or another person’s rights. You are responsible for managing your Google account, Drive sharing settings, and the accuracy of your public profile.'] },
        { title: 'Availability and responsibility', paragraphs: ['The apps are provided without a promise of uninterrupted service or fitness for a particular purpose, to the extent permitted by applicable law. Nothing here removes rights that cannot legally be excluded. We may restrict use that abuses the service or harms others.'] },
        { title: 'Changes and contact', paragraphs: ['We may update these terms as the apps change. The date above identifies the current version. For questions, contact PLUNZ through the link below.'] },
      ],
    },
  },
  pt: {
    privacy: {
      title: 'Política de privacidade', updated: 'Atualizada em 20 de novembro de 2026',
      intro: 'Esta política cobre o site PLUNZ e os apps atuais Capture, Split, Lounge e Nexus. Cada app tem uma finalidade e trata dados de forma diferente.',
      sections: [
        { title: 'Site PLUNZ', paragraphs: ['O site apresenta nossos apps. Ele não exige conta nem usa ferramentas de análise. Uma preferência de idioma pode ser salva no navegador e compartilhada entre apps em plu.nz. Nosso provedor de hospedagem pode processar dados básicos da requisição para entregar e proteger o site.'] },
        { title: 'Capture: conta Google e Drive', paragraphs: ['O Capture usa o Login do Google para identificar o dono de um perfil. Ele recebe o identificador da conta Google e o endereço de e-mail verificado. Quando você decide conectar o Drive, o Capture pede separadamente a permissão drive.file. Ela dá acesso aos arquivos criados pelo Capture ou compartilhados explicitamente com ele, não ao Drive inteiro.', 'O Capture guarda registros da conta e do perfil, uma sessão, a referência da pasta no Drive e um token de atualização do Google criptografado no banco de dados da Cloudflare. O servidor usa o token para acessar os arquivos conectados enquanto a conexão estiver ativa. Informações e mídias que você publica no perfil podem ser vistas por qualquer pessoa com o link. Os arquivos de mídia ficam no seu Google Drive; arquivos publicados precisam permitir acesso por link para que visitantes possam vê-los.', 'Você pode revogar o acesso nas permissões da sua Conta do Google. Para solicitar a remoção de uma conta Capture ou dos registros associados, use o contato abaixo. Revogar o acesso impede novas solicitações autorizadas ao Drive, mas não remove automaticamente links públicos ou arquivos já compartilhados no Drive.'] },
        { title: 'Split', paragraphs: ['O Split não exige conta. Rascunhos das contas ficam no seu dispositivo. Se você usar a leitura de recibo, a foto será enviada à API do Split e ao Cloudflare Workers AI para sugerir itens que você deve revisar.'] },
        { title: 'Lounge e Nexus', paragraphs: ['Lounge e Nexus são apps de desktop que rodam no seu computador e não enviam nada para a PLUNZ. O Lounge se conecta diretamente aos addons que você instala e, se você entrar na sua conta, ao serviço do Stremio; ele guarda só a chave de acesso, as configurações e o progresso no seu computador. Ao tocar um stream BitTorrent, outros participantes daquele swarm podem ver seu endereço IP. O Nexus controla o computador localmente. As páginas em lounge.plu.nz e nexus.plu.nz funcionam como este site, e os downloads são servidos pelo GitHub.'] },
        { title: 'Compartilhamento, conservação e escolhas', paragraphs: ['Usamos provedores necessários para operar os apps, incluindo Cloudflare para hospedagem e Google para login e armazenamento no Drive do próprio usuário no Capture. Não vendemos seus dados pessoais. Você pode apagar dados do navegador nas configurações dele. Pode gerenciar o acesso do Capture na Conta do Google e o compartilhamento público no Drive.', 'Para solicitações de privacidade ou dúvidas, entre em contato com a PLUNZ pelo link abaixo. Podemos atualizar esta política conforme os apps evoluem; a data acima identifica a versão atual.'] },
      ],
    },
    terms: {
      title: 'Termos de serviço', updated: 'Atualizados em 20 de novembro de 2026',
      intro: 'Estes termos se aplicam ao site PLUNZ e aos apps atuais Capture, Split, Lounge e Nexus. Ao usar um app, você concorda em utilizá-lo de forma lícita e respeitar os direitos de outras pessoas.',
      sections: [
        { title: 'Uso dos apps', paragraphs: ['A PLUNZ oferece pequenas ferramentas conforme sua disponibilidade. Funcionalidades podem mudar, ser interrompidas ou encerradas. Confira as informações produzidas pelos apps antes de confiar nelas, incluindo sugestões de leitura de recibo e totais de contas.'] },
        { title: 'Seu conteúdo e suas contas', paragraphs: ['Você continua sendo titular do conteúdo que fornece. No Capture, autoriza o acesso aos arquivos do Google Drive necessários para operar seu perfil e a exibição do conteúdo que decidir publicar. Não envie nem publique conteúdo que você não tenha autorização para usar ou que viole a lei ou direitos de terceiros. Você é responsável por gerenciar sua Conta do Google, as configurações de compartilhamento do Drive e a exatidão do perfil público.'] },
        { title: 'Disponibilidade e responsabilidade', paragraphs: ['Os apps são fornecidos sem promessa de serviço ininterrupto ou adequação a uma finalidade específica, nos limites permitidos pela lei. Nada aqui exclui direitos que não podem ser afastados legalmente. Podemos restringir usos que abusem do serviço ou prejudiquem outras pessoas.'] },
        { title: 'Alterações e contato', paragraphs: ['Podemos atualizar estes termos conforme os apps evoluem. A data acima identifica a versão atual. Para dúvidas, entre em contato com a PLUNZ pelo link abaixo.'] },
      ],
    },
  },
  es: {
    privacy: {
      title: 'Política de privacidad', updated: 'Actualizada el 20 de noviembre de 2026',
      intro: 'Esta política cubre el sitio PLUNZ y las aplicaciones actuales Capture, Split, Lounge y Nexus. Cada aplicación tiene un propósito y trata los datos de manera diferente.',
      sections: [
        { title: 'Sitio PLUNZ', paragraphs: ['El sitio presenta nuestras aplicaciones. No requiere una cuenta ni usa herramientas de análisis. Una preferencia de idioma puede guardarse en el navegador y compartirse entre aplicaciones de plu.nz. Nuestro proveedor de alojamiento puede procesar datos básicos de las solicitudes para entregar y proteger el sitio.'] },
        { title: 'Capture: cuenta de Google y Drive', paragraphs: ['Capture usa el inicio de sesión de Google para identificar al propietario de un perfil. Recibe el identificador de la cuenta de Google y la dirección de correo verificada. Cuando decides conectar Drive, Capture solicita por separado el permiso drive.file. Este permite acceder a los archivos que Capture crea o que compartes explícitamente con él, no a todo tu Drive.', 'Capture guarda registros de cuenta y perfil, una sesión, la referencia de la carpeta de Drive y un token de actualización de Google cifrado en la base de datos de Cloudflare. El servidor usa el token para acceder a los archivos conectados mientras la conexión siga activa. La información y los medios que publiques en tu perfil pueden ser vistos por cualquiera que tenga el enlace. Los archivos se guardan en tu Google Drive; los archivos publicados deben poder abrirse mediante enlace para que los visitantes los vean.', 'Puedes revocar el acceso en los permisos de tu Cuenta de Google. Para solicitar la eliminación de una cuenta de Capture o sus registros, usa el enlace de contacto al final. Revocar el acceso impide nuevas solicitudes autorizadas a Drive, pero no elimina automáticamente enlaces públicos ni archivos ya compartidos en Drive.'] },
        { title: 'Split', paragraphs: ['Split no requiere una cuenta. Los borradores de las cuentas permanecen en tu dispositivo. Si usas el escaneo de recibos, la foto se envía a la API de Split y a Cloudflare Workers AI para sugerir elementos que debes revisar.'] },
        { title: 'Lounge y Nexus', paragraphs: ['Lounge y Nexus son aplicaciones de escritorio que se ejecutan en tu computadora y no envían nada a PLUNZ. Lounge se conecta directamente con los addons que instalas y, si inicias sesión, con el servicio de Stremio; solo guarda la clave de acceso, la configuración y el progreso en tu computadora. Al reproducir un stream BitTorrent, otros participantes de ese swarm pueden ver tu dirección IP. Nexus controla tu computadora localmente. Las páginas en lounge.plu.nz y nexus.plu.nz funcionan como este sitio, y las descargas las sirve GitHub.'] },
        { title: 'Compartir, conservación y tus opciones', paragraphs: ['Usamos proveedores necesarios para operar las aplicaciones, como Cloudflare para el alojamiento y Google para el inicio de sesión y el almacenamiento del propio usuario en Drive para Capture. No vendemos tus datos personales. Puedes borrar los datos del navegador desde su configuración. Puedes gestionar el acceso de Capture en tu Cuenta de Google y los permisos de uso compartido en Drive.', 'Para solicitudes de privacidad o preguntas, contacta con PLUNZ mediante el enlace siguiente. Podemos actualizar esta política cuando cambien las aplicaciones; la fecha anterior identifica la versión actual.'] },
      ],
    },
    terms: {
      title: 'Términos de servicio', updated: 'Actualizados el 20 de noviembre de 2026',
      intro: 'Estos términos se aplican al sitio PLUNZ y a las aplicaciones actuales Capture, Split, Lounge y Nexus. Al usar una aplicación, aceptas utilizarla legalmente y respetar los derechos de otras personas.',
      sections: [
        { title: 'Uso de las aplicaciones', paragraphs: ['PLUNZ ofrece pequeñas herramientas según su disponibilidad. Las funciones pueden cambiar, interrumpirse o dejar de ofrecerse. Revisa la información que producen las aplicaciones antes de confiar en ella, incluidas las sugerencias del escaneo de recibos y los totales de las cuentas.'] },
        { title: 'Tu contenido y tus cuentas', paragraphs: ['Conservas la titularidad del contenido que proporcionas. En Capture, autorizas el acceso a los archivos de Google Drive necesarios para operar tu perfil y la visualización del contenido que decidas publicar. No subas ni publiques contenido que no tengas derecho a usar o que infrinja la ley o los derechos de terceros. Eres responsable de gestionar tu Cuenta de Google, los permisos para compartir en Drive y la exactitud de tu perfil público.'] },
        { title: 'Disponibilidad y responsabilidad', paragraphs: ['Las aplicaciones se ofrecen sin promesa de servicio ininterrumpido ni de adecuación a un fin particular, en la medida permitida por la ley. Nada aquí elimina derechos que no puedan excluirse legalmente. Podemos restringir los usos que abusen del servicio o perjudiquen a otras personas.'] },
        { title: 'Cambios y contacto', paragraphs: ['Podemos actualizar estos términos cuando cambien las aplicaciones. La fecha anterior identifica la versión actual. Para preguntas, contacta con PLUNZ mediante el enlace siguiente.'] },
      ],
    },
  },
};

const contactLabel: Record<Locale, string> = { en: 'Contact PLUNZ', pt: 'Entre em contato com a PLUNZ', es: 'Contactar con PLUNZ' };

export function LegalPage(props: { kind: 'privacy' | 'terms'; locale: Locale }) {
  const document = () => documents[props.locale][props.kind];
  return <main id="main" class="legal-page shell">
    <p class="eyebrow">PLUNZ</p>
    <h1>{document().title}</h1>
    <p class="legal-updated">{document().updated}</p>
    <p class="legal-intro">{document().intro}</p>
    {document().sections.map(section => <section><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p>{paragraph}</p>)}</section>)}
    <p class="legal-contact"><a href="https://github.com/plu-nz">{contactLabel[props.locale]}</a></p>
  </main>;
}
