import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roodash",
  description: "前端常用工具类集合",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/introduction/' },
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '简介', link: '/introduction/' },
          { text: '安装', link: '/installation/' },
          {text: '更新日志', link: '/changelog/'}
        ]
      },
      {
        text: 'storage',
        items: [
          {text: 'local', link: '/storage/local'},
          {text: 'session', link: '/storage/session'},
        ]
      },
      {
        text: 'typed',
        items: [
          {text: 'isValidJson', link: '/typed/isValidJson'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jxxuxuefeng/roodash' }
    ],

    footer: {
      copyright: 'Copyright © 2024-present snowden.xu 贡献者',
      message: '基于 MIT 协议发布'
    },
  },
  base: "/roodash/"
})
