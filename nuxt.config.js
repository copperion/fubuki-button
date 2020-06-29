import colors from 'vuetify/es5/util/colors';

const is_production = process.env.NODE_ENV === 'production';
const production_url = is_production ? 'https://btn.lonelyion.com/' : '/_nuxt/';
const manifest_url = is_production ? '/' : '/_nuxt/';

export default {
  mode: 'universal',
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'フブキボタン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '白上フブキの音声ボタン 白上吹雪语音按钮 Voice button for Shirakami Fubuki'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'フブキボタン,FUBUKI BUTTON,狐按钮,hololive,Shirakami Fubuki,白上フブキ,白上吹雪,吹雪,小狐狸,屑狐狸,喵喵狐,语音按钮,ボイスボタン'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'フブキボタン' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://fubuki.moe' },
      { hid: 'og:title', property: 'og:title', content: 'フブキボタン' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '新しい白上フブキのボイスボタン。私たちの目標は白上フブキの総合的なファンサイトを作ることです。'
      },
      { hid: 'og:image', property: 'og:image', content: 'https://fubuki.moe/img/og_common.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lonely_ion' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@plugins/i18n' },
    { src: '@plugins/eventBus.js', mode: 'client' },
    { src: '@plugins/analytics.js', mode: 'client' }
  ],
  router: {
    middleware: 'ui_config'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [['@nuxtjs/vuetify', { treeShake: is_production }]],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/pwa', { workbox: { publicPath: production_url }, manifest: { publicPath: manifest_url } }],
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: false,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.base,
          secondary: colors.grey.darken4,
          accent: colors.blue.lighten2,
          error: colors.deepOrange.base,
          warning: colors.orange.base,
          info: colors.blueGrey.base,
          success: colors.teal.base
        },
        dark: {
          primary: colors.blue.darken3,
          secondary: colors.grey.darken4,
          accent: colors.lightBlue.darken4,
          error: colors.deepOrange.accent4,
          warning: colors.amber.base,
          info: colors.teal.lighten1,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      font: null,
      icons: 'mdiSvg'
    },
    pwa: {
      manifest: {
        start_url: '/?standalone=true'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: production_url,
    optimizeCSS: is_production,
    extractCSS: is_production,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
