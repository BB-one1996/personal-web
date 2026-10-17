# 沈力钊 · 个人作品集

React + Vite 个人网站，托管在 GitHub Pages 的 `/docs` 目录。

线上地址：https://BB-one1996.github.io/personal-web/

仓库：https://github.com/BB-one1996/personal-web

## 本地开发

```bash
npm install
npm run dev
npm run build
```

`npm run build` 会把静态站点写到 `docs/`，并复制 `404.html`、写入 `.nojekyll`，方便 GitHub Pages 直接发布。

## GitHub Pages

这是**项目站点**（仓库名不是 `用户名.github.io`），地址形式为 `https://用户名.github.io/仓库名/`。因此 Vite 的 `base` 设为 `/personal-web/`。

按 [GitHub 文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 在仓库中开启：

1. Settings → Pages
2. Source 选 **Deploy from a branch**
3. Branch 选 `master`，文件夹选 `/docs`
4. Save

站点公开后约需 1–10 分钟生效。`.nojekyll` 用来跳过 Jekyll，避免 Vite 资源被忽略。
