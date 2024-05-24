import { defineConfig } from 'vitepress';
const pkg = require('../../package.json');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Roodash',
  description: '前端常用工具集合',
  head: [['link', { href: '/roodash/favicon.png', rel: 'icon', type: 'image/png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/introduction/' },
      { text: pkg.version, link: '/changelog/' },
    ],
    logo: '/logo.png',
    sidebar: [
      {
        text: '起步',
        items: [
          { text: '简介', link: '/introduction/' },
          { text: '安装', link: '/installation/' },
          { text: '更新日志', link: '/changelog/ ' },
        ],
      },
      {
        text: 'Storage',
        items: [
          { text: 'local', link: '/storage/local' },
          { text: 'session', link: '/storage/session' },
        ],
      },
      {
        text: 'Object',
        items: [
          { text: 'omit', link: '/object/omit' },
          { text: 'pick', link: '/object/pick' },
        ],
      },
      {
        text: 'Util',
        items: [
          { text: 'cloneDeep', link: '/util/cloneDeep' },
          { text: 'debounce', link: '/util/debounce' },
          { text: 'throttle', link: '/util/throttle' },
          { text: 'formatData', link: '/util/formatData' },
          { text: 'getFileExtension', link: '/util/getFileExtension' },
          { text: 'generateUUID', link: '/util/generateUUID' },
          { text: 'formatBytes', link: '/util/formatBytes' },
          { text: 'arrToObj', link: '/util/arrToObj' },
        ],
      },
      {
        text: 'Typed',
        items: [
          { text: 'isValidJson', link: '/typed/isValidJson' },
          { text: 'isArray', link: '/typed/isArray' },
          { text: 'isObject', link: '/typed/isObject' },
          { text: 'isFunction', link: '/typed/isFunction' },
          { text: 'isString', link: '/typed/isString' },
          { text: 'isNumber', link: '/typed/isNumber' },
          { text: 'isDate', link: '/typed/isDate' },
          { text: 'isSymbol', link: '/typed/isSymbol' },
          { text: 'isEmpty', link: '/typed/isEmpty' },
          { text: 'isEqual', link: '/typed/isEqual' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/jxxuxuefeng/roodash' }],

    footer: {
      copyright: 'Copyright © 2024-present snowden.xu 贡献者',
      message: '基于 MIT 协议发布',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
  base: '/roodash/',
});
