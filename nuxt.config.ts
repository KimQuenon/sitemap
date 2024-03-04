// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'about',
        path: '/about',
        component: 'pages/about.vue'
      },
      {
        name: 'gallery',
        path: '/gallery',
        component: 'pages/gallery.vue'
      },
      {
        name: 'contact',
        path: '/contact',
        component: 'pages/contact.vue'
      }
    ]
  },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://example.com',
    trailingSlash: true,
  },
})
