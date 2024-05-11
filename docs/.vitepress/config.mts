import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "purich",
  description: "Pic rich",
  base: "/purich/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bing', link: '/bing/bing-pic' }
    ],

    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/allforcloud/purich.git' }
    ]
  }
})
