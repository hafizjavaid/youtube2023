
export default defineNuxtConfig({
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css', '@fortawesome/fontawesome-free/css/all.css'],
    build: {
        transpile: ['vuetify']
    },
    modules:[
        '@pinia/nuxt'
    ]
})
