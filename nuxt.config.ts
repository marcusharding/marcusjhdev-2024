
export default defineNuxtConfig({

    app: {
        head: {
            title: 'Marcusjhdev',
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },

    css: [ '@/assets/scss/global.scss', '@/assets/scss/_normalize.scss', '@/assets/scss/_typography.scss' ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: { 
                    additionalData: '@import "@/assets/scss/_mediaqueries.scss"; @import "@/assets/scss/_variables.scss";' 
                }
            }
        }
    },

    devtools: { enabled: true },

    // typescript: { typeCheck: true },

    components: true,

    prismic: { 
        endpoint: "marcusjhdev",
        clientConfig: {
            routes: [
                // Resolves the Homepage document to "/"
                {
                    type: "homepage",
                    path: "/",
                },
                {
                    type: "work",
                    path: "/work",
                },
                {
                    type: "about",
                    path: "/about",
                },
                {
                    type: "ramblings",
                    path: "/ramblings",
                },
            ]
        }
    },

    modules: ['@pinia/nuxt', '@nuxtjs/prismic', '@nuxt/test-utils/module'],
});