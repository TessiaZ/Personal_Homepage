# 学术与求职个人主页模板

个人主页，适合大学生、研究生、研究人员和初入职场者。它把学术主页、项目作品集、经历与个人介绍组织在同一套清晰的信息架构中。

> 在 GitHub 点击 **Use this template** 即可创建自己的仓库。演示中的人物、机构、论文和成果数据均为虚构。

## 主要功能

- `/zh/` 与 `/en/` 双语路由，切换语言时保留当前页面
- `academic`、`career`、`hybrid` 三种模式与可选模块
- 项目搜索、类型筛选、精选排序和静态详情页
- 论文状态、个人贡献、研究方向、结果导向的经历与技能分组
- 使用 Markdown 格式维护的双语文章、阅读时间与上下篇
- 跟随系统且写入 `localStorage` 的无闪烁深色模式
- 语义化 HTML、Skip Link、键盘操作、清晰焦点与减少动画支持
- Canonical、Open Graph、Twitter Card、sitemap、robots 与 JSON-LD
- 自动识别仓库子路径的 GitHub Pages 工作流

## 快速开始

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 修改个人信息

一般无需修改页面组件，只需编辑：

- `src/config/site.ts`：模式、模块开关与站点信息
- `src/data/profile.ts`：姓名、简介、教育、社交链接与简历路径
- `src/data/projects.ts`：项目卡片与完整案例结构
- `src/data/publications.ts`：论文、状态、贡献和链接
- `src/data/experience.ts`：科研、实习和校园经历
- `src/data/skills.ts`：技能分组
- `src/data/posts.ts`：双语 Markdown 格式文章
- `public/images/`：头像、项目封面和分享图
- `public/resume/`：用真实 PDF 替换占位文件

将 `siteConfig.mode` 改为 `academic`、`career` 或 `hybrid`。通过 `showBlog`、`showPublications`、`showExperience`、`showSkills` 和 `showContact` 控制模块。主题颜色位于 `src/styles/global.css` 顶部的 CSS 变量中。

## 添加项目、论文、经历与文章

复制对应数据文件中的已有对象，保持 TypeScript 字段完整并使用唯一 `slug`。项目和文章详情页会自动静态生成。每条可见文本同时提供 `zh` 和 `en`，图片放在 `public/images/`，路径以 `/images/` 开头。

## 部署到 GitHub Pages

1. 推送到 GitHub，并使用 `main` 作为默认分支。
2. 打开 **Settings → Pages → Build and deployment**，选择 **GitHub Actions**。
3. 再次推送；工作流会执行 `npm ci`、构建并部署。

配置会根据 `GITHUB_REPOSITORY` 自动处理 `username.github.io/repository-name/`。若仓库名就是 `username.github.io`，则使用根路径。手动构建时可以设置 `PUBLIC_BASE_PATH=/repository-name` 与 `SITE_URL=https://username.github.io`。

### 自定义域名

在 GitHub Pages 设置中添加域名并配置提示的 DNS 记录；将工作流中的 `SITE_URL` 改为完整域名。根域名部署时设置 `PUBLIC_BASE_PATH=/`。如需要，在 `public/CNAME` 中只写域名。

## 拼贴图片资源

页面使用的轻量 WebP 统一保存在 `public/images/collage/`。资源说明、双语替代文本、透明属性和动画预设集中维护在 `src/data/visualAssets.ts`，组件中不要直接硬编码图片路径。

- `hero-student-*`：首页人物 AI 拼贴与 About 编辑图片
- `campus-agent-*`：校园智能体项目卡与项目详情
- `computer-contact-cutout.*`：首页研究成果区的电脑与邮件拼贴
- `medical-mri-cutout.webp`：Research 首屏和医学项目
- `lookbook-*`：About 的“简历之外”模块
- `paper-elements.webp`、`doodle-elements.webp`：通过裁切容器用于纸片和手绘装饰

WebP 已压缩到 1280px 宽，并保留透明 Alpha 通道。装饰图片默认禁止鼠标事件。

动画遵循 `prefers-reduced-motion`。桌面 Hero 提供不超过 12px 的轻量视差，平板和手机端自动关闭鼠标视差并减少装饰图层。

## 常见问题

- 博客关闭：设置 `showBlog: false`，导航与首页会同步隐藏。
- 联系表单：模板默认不加入后端；若使用第三方服务，请补充隐私说明。
- PDF 占位：请替换 `public/resume/` 下的两个文件。
- 示例链接：发布前搜索并替换 `example.com`、`yourname` 和所有虚构机构。

项目采用 [MIT License](LICENSE)。
