module.exports = {
  dest: "./dist",
  title: 'Home',
  description: '程序猿的技术历程',
  base: "/",
  cache: false,
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: [".vuepress/components"]
      }
    ]
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {
        text: "开发环境配置",
        items: [
          { text: '前端Web', link: '/environment/frontend-web' },
        ]
      },
      {
        text: "前端Web",
        items: [
          { text: 'vue', link: '/frontend-web/vue/guide' },
          { text: 'react', link: '/frontend-web/react/guide' },
          { text: 'webpack', link: '/frontend-web/webpack/guide' },
        ]
      },
      {
        text: "后端",
        items: [
          {
            text: "Java",
            items: [
              { text: 'vue', link: '/frontend-web/vue/guide' },
            ]
          },
          {
            text: "Python",
            items: [
              { text: 'vue', link: '/frontend-web/vue/guide' },
            ]
          },
        ]
      },
      {
        text: "数据库",
        items: [
          { text: 'vue', link: '/frontend-web/vue/guide' },
        ]
      },
      {
        text: "大数据",
        items: [
          { text: 'vue', link: '/frontend-web/vue/guide' },
        ]
      },
      {
        text: "算法与数据结构",
        items: [
          {
            text: "算法",
            items: [
              { text: '效率', link: '/algorithm-design/algorithm/big-o' },
            ]
          },
          {
            text: "数据结构",
            items: [
              { text: '线性表', link: '/algorithm-design/structure/linear-list' },
            ]
          }
        ]
      },
      {
        text: "设计模式",
        items: [
          { text: 'vue', link: '/frontend-web/vue/guide' },
        ]
      },
    ]
  }
}
