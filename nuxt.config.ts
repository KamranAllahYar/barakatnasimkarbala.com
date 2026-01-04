// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxt/ui", "@nuxt/fonts"],
    colorMode: {
        preference: 'light'
    },
    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/png', href: '/logo.png'},
            ]
        }
    }
})