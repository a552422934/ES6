# ES6 教程文档

这是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。

## 项目简介

本项目使用 [VitePress](https://vitepress.dev/) 构建，包含 30+ 个章节的 ES6 教程内容，涵盖从基础语法到高级特性的所有内容。

## 主要内容

- ECMAScript 6 简介
- let 和 const 命令
- 变量的解构赋值
- 字符串的扩展与新增方法
- 正则的扩展
- 数值的扩展
- 函数的扩展
- 数组的扩展
- 对象的扩展与新增方法
- 运算符的扩展
- Symbol
- Set 和 Map 数据结构
- Proxy 和 Reflect
- Promise 对象
- Iterator 和 for...of 循环
- Generator 函数
- async 函数
- Class 基础语法与继承
- Module 语法与加载实现
- 编程风格与规格解读
- 异步遍历器
- ArrayBuffer
- 最新提案
- 构造器（Decorator）
- 参考链接

## 使用方法

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 项目结构

```
.
├── docs/                 # 文档源文件
│   ├── .vitepress/       # VitePress 配置
│   ├── images/           # 图片资源
│   ├── *.md             # 各章节文档
│   └── index.md         # 首页
├── package.json          # 项目配置
└── README.md            # 项目说明
```

## 技术栈

- **VitePress**: 文档站点生成器
- **Markdown**: 文档编写格式
- **Vue.js**: VitePress 底层框架

## 适合人群

- 已掌握 ES5 的 JavaScript 开发者
- 想了解 JavaScript 最新特性的前端工程师
- 需要查阅 ES6 语法参考的开发者

## 相关资源

- [ECMAScript 6 规格](http://www.ecma-international.org/ecma-262/6.0/index.html)
- [Babel 转码器](https://babeljs.io/)

## License

本项目为开源教程，内容基于社区贡献和公开资料整理。
