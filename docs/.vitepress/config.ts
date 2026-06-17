import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Scholar's Dungeon",
  description: "Scholar's Dungeon 官方中文指南",
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }]
  ],
  themeConfig: {
    logo: '/scholardungeon-logo.svg',
    siteTitle: "Scholar's Dungeon",
    nav: [
      { text: '首页', link: '/' },
      { text: '新手教程', link: '/guide/getting-started' },
      { text: '高级教程', link: '/features/dungeon' },
      { text: '常见问题', link: '/faq/' },
      { text: '更新日志', link: '/changelog' }
    ],
    sidebar: {
      '/': [
        {
          text: '新手教程',
          items: [
            { text: '开始之前', link: '/guide/getting-started' },
            { text: '第一次专注', link: '/guide/first-focus' },
            { text: '账号与登录', link: '/guide/account' },
            { text: '安装为应用', link: '/guide/install-app' }
          ]
        },
        {
          text: '高级教程',
          items: [
            { text: '地牢系统', link: '/features/dungeon' },
            { text: '专注计时', link: '/features/focus' },
            { text: '任务系统', link: '/features/tasks' },
            { text: '统计系统', link: '/features/stats' },
            { text: '数据与同步', link: '/features/sync' }
          ]
        },
        {
          text: '常见问题',
          items: [
            { text: '常见问题总览', link: '/faq/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    footer: {
      message: 'Built for every brave scholar entering the dungeon.',
      copyright: "Scholar's Dungeon"
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  },
  vite: {
    server: {
      allowedHosts: true,
      host: '0.0.0.0',
      port: 3000
    }
  }
})
