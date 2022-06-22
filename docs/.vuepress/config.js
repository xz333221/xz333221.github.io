const logo_url = 'https://my-assets.pek3b.qingstor.com/images/logo11.png'
const path = require('path')
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '流光的blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: logo_url }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: logo_url,
    navbar: [ // 导航栏配置
      { text: '首页', link: '/' },
      // { text: 'test', link: '/template/test/test.md' },
      { text: '前端路线', link: '/front_road/road/前端路线.md' },
      { text: '网络基础', link: '/internet_base/internet/TCP三次握手和四次挥手.md' },
      { text: 'JavaScript 基础强化', link: '/js_base_intensify/this指向/this到底指向谁.md' },
      { text: '高频考点', link: '/interface/js/var let const.md' },
      { text: '没啥用的', link: '/psychology/友情.md' },
    ],
    sidebar: {
      '/template/':[
        {
          text: 'test',
          sidebarDepth: 2,
          children: [
            '/template/test/test.md',
            '/template/test/test1.md',
          ]
        },
        {
          text: 'test2',
          children: [
            '/template/test/test.md',
            '/template/test/test1.md',
          ]
        },
      ],
      '/internet_base/':[
        {
          text: 'internet',
          children: [
            '/internet_base/internet/TCP三次握手和四次挥手.md',
          ]
        },
        {
          text: 'browser',
          sidebarDepth: 5,
          children: [
            '/internet_base/browser/浏览器工作原理.md',
          ]
        },
      ],
      '/js_base_intensify/': [
        {
          text: 'this指向',
          children: [
            '/js_base_intensify/this指向/this到底指向谁.md',
          ]
        },
        {
          text: '原型链',
          children: [
            '/js_base_intensify/原型链/原型 构造函数 原型链.md',
          ]
        },
        {
          text: '闭包',
          children: [
            '/js_base_intensify/闭包/TDZ.md',
            '/js_base_intensify/闭包/内存.md',
            '/js_base_intensify/闭包/闭包例题.md'
          ]
        },
        {
          text: 'API实现',
          children: [
            '/js_base_intensify/API实现/jQuery offset.md',
            '/js_base_intensify/API实现/数组reduce.md',
            '/js_base_intensify/API实现/compose.md',
            '/js_base_intensify/API实现/new.md',
            '/js_base_intensify/API实现/bind实现.md',
            '/js_base_intensify/API实现/promise实现.md',
            '/js_base_intensify/API实现/VueRouter实现.md',
            '/js_base_intensify/API实现/Vuex实现.md',
            '/js_base_intensify/API实现/Vue的基础实现.md',
          ]
        },
      ],

      '/interface/': [
        {
          text: 'html',
          children: [
            '/interface/html/dom重排和重绘.md',
          ]
        },
        {
          text: 'js',
          children: [
            '/interface/js/var let const.md',
            '/interface/js/window.onload与document.ready.md',
            '/interface/js/基本数据类型.md',
          ]
        },
        {
          text: 'vue',
          children: [
            '/interface/vue/具名插槽和作用域插槽.md',
            '/interface/vue/父子组件生命周期执行顺序.md',
          ]
        },
      ],

      '/psychology/': [
        {
          text: '心理学',
          children: [
            '/psychology/友情.md',
            '/psychology/抱抱.md',
          ]
        },
      ]

    }, // 侧边栏配置
    sidebarDepth: 5 // 侧边栏显示2级
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../../../assets/images')
      }
    }
  }
}
