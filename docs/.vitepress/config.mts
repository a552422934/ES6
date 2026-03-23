import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ES6",
  description: "es6入门教程",
  head: [['link', { rel: 'icon', href: '../images/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../images/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ES6 教程',
        items: [
          { text: '1.ECMAScript 6 简介', link: '/intro' },
          { text: '2.let 和 const 命令', link: '/let' },
          { text: '3.变量的解构赋值', link: '/destructuring' },
          { text: '4.字符串的扩展', link: '/string' },
          { text: '5.字符串的新增方法', link: '/string-methods' },
          { text: '6.正则的扩展', link: '/regex' },
          { text: '7.数值的扩展', link: '/number' },
          { text: '8.函数的扩展', link: '/function' },
          { text: '9.数组的扩展', link: '/array' },
          { text: '10.对象的扩展', link: '/object' },
          { text: '11.对象的新增方法', link: '/object-methods' },
          { text: '12.运算符的扩展', link: '/operator' },
          { text: '13.Symbol', link: '/symbol' },
          { text: '14.Set 和 Map 数据结构', link: '/set-map' },
          { text: '15.Proxy', link: '/proxy' },
          { text: '16.Reflect', link: '/reflect' },
          { text: '17.Promise 对象', link: '/promise' },
          { text: '18.Iterator 和 for...of 循环', link: '/iterator' },
          { text: '19.Generator 函数的语法', link: '/generator' },
          { text: '20.函数的异步应用值', link: '/generator-async' },
          { text: '21.async 函数', link: '/async' },
          { text: '22.Class 的基本语法', link: '/class' },
          { text: '23.Class 的继承', link: '/class-extends' },
          { text: '24.Module 的语法', link: '/module' },
          { text: '25.Module 的加载实现', link: '/module-loader' },
          { text: '26.编程风格', link: '/style' },
          { text: '27.读懂规格', link: '/spec' },
          { text: '28.异步遍历器', link: '/ async-iterator' },
          { text: '29.ArrayBuffer', link: '/arraybuffer' },
          { text: '30.最新提案', link: '/proposals' },
          { text: '31.构造器', link: '/decorator' },
          { text: '32. 参考链接', link: '/reference' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
