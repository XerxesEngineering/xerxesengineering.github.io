import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Xerxes Engineering',
  description: 'Developer of Aux — Music app for your NAS',
  lang: 'en-US',
  appearance: 'dark',
  cleanUrls: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#5F55EC' }],
    ['meta', { name: 'google-site-verification', content: 'wqjL-pdFF3nscyFUi-_HlwuxBQMH2Q8wb6p4N-X9cls' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Xerxes Engineering' }],
    ['meta', { property: 'og:site_name', content: 'Xerxes Engineering' }],
    ['meta', { property: 'og:image', content: 'https://www.xerxesengineering.com/images/og-image-vertical.png' }],
    ['meta', { property: 'og:url', content: 'https://www.xerxesengineering.com' }],
    ['meta', { property: 'og:description', content: 'Developer of Aux — Music app for your NAS' }],
    ['meta', { name: 'keywords', content: 'Aux, Synology, NAS, DSaudio, DS audio, DSM, music player, audio player, mobile app, iphone app, ipad app, ios app, iphone, ipad, ipod, ios' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/96.png', sizes: '96x96' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/180.png' }],
    // ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KFMGDCTN');`
    ],
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: {
      src: '/icons/96.png',
      alt: 'Aux logo',
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Support', link: '/support' },
      { text: 'Privacy', link: '/privacy' },
    ],

    footer: {
      copyright: 'Copyright © 2010-2026 Xerxes Engineering LLC. All rights reserved.'
    }
  }
})
