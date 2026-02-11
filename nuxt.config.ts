// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    modules: ["@nuxt/ui", "@nuxt/fonts"],
    colorMode: {
        preference: 'light'
    },
    app: {
        baseURL: '/',
        head: {
            link: [
                {rel: 'icon', type: 'image/png', href: '/logo.png'},
            ]
        }
    },
    nitro: {
        preset: 'github-pages'
    }
})