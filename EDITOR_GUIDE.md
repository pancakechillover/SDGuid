# Scholar's Dungeon 编辑说明

这份说明给维护者使用，不会显示在网站里。

## 1. 平时怎么预览

第一次使用项目时安装依赖：

```bash
pnpm install
```

之后每次预览只需要：

```bash
pnpm run dev
```

浏览器打开终端里显示的地址，通常是：

```text
http://localhost:3000/
```

## 2. 修改普通页面内容

VitePress 的页面基本都是 Markdown 文件。

常用位置：

| 想修改的内容 | 文件位置 |
| --- | --- |
| 首页 | `docs/index.md` |
| 开始之前 | `docs/guide/getting-started.md` |
| 第一次专注 | `docs/guide/first-focus.md` |
| 安装为应用 | `docs/guide/install-app.md` |
| 功能说明 | `docs/features/*.md` |
| 常见问题 | `docs/faq/index.md` |
| 更新日志 | `docs/changelog.md` |

修改后保存文件，浏览器会自动刷新；没有自动刷新时，手动刷新页面即可。

## 3. 添加一个新页面

例如你想新增“奖励系统”页面：

### 第一步：新建 Markdown 文件

创建文件：

```text
docs/features/rewards.md
```

内容可以这样写：

```md
# 奖励系统

这里介绍 Scholar's Dungeon 的奖励系统。

## 奖励从哪里来？

完成专注后，系统会根据你的专注情况给予奖励。
```

### 第二步：把页面加入侧边栏

打开：

```text
docs/.vitepress/config.ts
```

找到 `sidebar` 里的“功能说明”：

```ts
{
  text: '功能说明',
  items: [
    { text: '地牢系统', link: '/features/dungeon' },
    { text: '专注计时', link: '/features/focus' },
    { text: '任务系统', link: '/features/tasks' },
    { text: '统计系统', link: '/features/stats' },
    { text: '数据与同步', link: '/features/sync' }
  ]
}
```

加入新页面：

```ts
{ text: '奖励系统', link: '/features/rewards' }
```

注意：`link` 不需要写 `.md`。

## 4. 修改页面的父子集合

VitePress 里的“父子集合”主要由 `docs/.vitepress/config.ts` 中的 `sidebar` 控制。

### 父级栏目

这一层是父级栏目：

```ts
{
  text: '新手教程',
  items: [ ... ]
}
```

`text: '新手教程'` 就是左侧目录里的父级标题。

### 子页面

`items` 里面的每一项就是子页面：

```ts
{ text: '第一次专注', link: '/guide/first-focus' }
```

- `text` 是侧边栏显示的名字；
- `link` 是页面路径；
- `link: '/guide/first-focus'` 对应文件 `docs/guide/first-focus.md`。

### 新增一个父级栏目

例如你想新增“站点维护”父级栏目，可以在 `sidebar` 数组里新增：

```ts
{
  text: '站点维护',
  items: [
    { text: '如何编辑页面', link: '/maintenance/edit-pages' },
    { text: '如何添加图片', link: '/maintenance/add-images' }
  ]
}
```

同时要新建对应文件：

```text
docs/maintenance/edit-pages.md
docs/maintenance/add-images.md
```

## 5. 添加图片

推荐把图片放到：

```text
docs/public/images/
```

例如放入：

```text
docs/public/images/first-focus-start.png
```

然后在 Markdown 页面里这样引用：

```md
![开始专注按钮截图](/images/first-focus-start.png)
```

注意：

- `docs/public` 会变成网站根目录；
- 所以 `docs/public/images/a.png` 在文章里写成 `/images/a.png`；
- 图片文件名尽量使用英文、数字和短横线，不要用空格。

## 6. 首页怎么改

首页文件是：

```text
docs/index.md
```

顶部 `---` 之间是 VitePress 首页配置，例如：

```yaml
hero:
  name: "Scholar's Dungeon"
  text: "把专注变成地牢冒险"
  tagline: "这里是 Scholar's Dungeon 的中文说明站。"
```

首页下面的自定义卡片是普通 HTML，主要样式在：

```text
docs/.vitepress/theme/style.css
```

## 7. 样式和图标怎么改

| 内容 | 文件位置 |
| --- | --- |
| 首页视觉样式 | `docs/.vitepress/theme/style.css` |
| 顶部导航和侧边栏 | `docs/.vitepress/config.ts` |
| Logo | `docs/public/scholardungeon-logo.svg` |
| Lucide 图标 | `docs/public/icons/*.svg` |

暗色主题下图标颜色由 `style.css` 中的 `--sd-icon-filter` 控制。一般不需要单独修改每个 SVG。
