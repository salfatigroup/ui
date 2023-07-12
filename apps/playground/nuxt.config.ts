// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Salfati Group UI Library',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            "Explore Salfati Group's innovative UI library for Nuxt. Purpose-built to accelerate web development, our suite boasts a rich collection of user-friendly, customizable components. As a premier solution for Nuxt developers, it delivers seamless integration, enhancing site performance, improving UX, and significantly bolstering SEO rankings. Harness the power of this flexible UI library to craft compelling, responsive web applications that stand out in the digital landscape.",
        },
        {
          name: 'keywords',
          content:
            'Salfati Group, UI library for Nuxt, Nuxt.js development, web development tools, user interface components, SEO-friendly web design, customizable UI, responsive web applications, user experience, site performance enhancement, digital solutions, web application development, component-based design',
        },
      ],
    },
  },
  modules: ['@salfatigroup/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    prefetch: true,
    display: 'swap',
    families: {
      Inter: true,
    },
  },
})
