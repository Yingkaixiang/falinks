# `@falinks/deploy-ghpages`

使用此脚本可以将你的 `master` 分支以及 `gh-pages` 分支进行分离。`master` 分支只存放你的源代码而 `gh-pages` 分支只存放项目构建后的静态资源文件。

## 如何使用

```bash
# 执行部署脚本前请先构建你的工程
# --path 指定你要发布的静态资源目录
npx @falinks/deploy-ghpages --path dist

# 不指定路径会直接发布当前目录
npx @falinks/deploy-ghpages
```
