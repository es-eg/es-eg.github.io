export default defineAppConfig({
  alpine: {
    title: 'Enter Science: Escape Game',
    description: 'Enter Science: Escape Game ist eine Projektwerkstatt an der Technischen Universität Berlin',
    image: {
      src: '/WordCloud.png',
      alt: 'Eine Wordcloud mit Begriffen zu Wissenschaftkommunikation, Escape Games und der Projektwerkstatt',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Logo für ES:EG' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',
      github: '',
      facebook: '',
      medium: '',
      youtube: '',
      linkedin: undefined
    },
    form: {
      successMessage: 'Nachricht mit dem standard Mailprogramm verfassen'
    },
    backToTop: {
      text: 'Zurück nach Oben',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
