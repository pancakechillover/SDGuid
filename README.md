# Scholar's Dungeon

这是 Scholar's Dungeon 的中文指南站，使用 VitePress 构建。

## 本地预览

第一次使用需要安装依赖：

```bash
pnpm install
```

之后每次预览只需要：

```bash
pnpm run dev
```

Windows 用户也可以直接双击：

```text
start-dev.bat
```

## 修改内容

- 首页内容：`docs/index.md`
- 普通教程页面：`docs/guide/*.md`
- 功能说明页面：`docs/features/*.md`
- 常见问题：`docs/faq/index.md`
- 更新日志：`docs/changelog.md`
- 顶部导航与侧边栏：`docs/.vitepress/config.ts`
- 首页视觉样式：`docs/.vitepress/theme/style.css`
- Logo、图片与 Lucide 图标资源：`docs/public/`

更详细的编辑方法见：

```text
EDITOR_GUIDE.md
```

## Vercel 部署

构建命令：

```bash
pnpm run docs:build
```

输出目录：

```text
docs/.vitepress/dist
```
