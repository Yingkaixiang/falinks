# `@falinks/deploy-ghpages`

一键部署 GitHub Page。脚本只会将 build 完的静态目录资源发布至当前 repo 的 gh-pages 分支，不会上传你的源代码。

## 如何使用

```bash
# 执行部署脚本前请先构建你的工程
# --path 指定你要发布的静态资源目录
npx @falinks/deploy-ghpages --path dist

# 不指定路径会直接发布当前目录
npx @falinks/deploy-ghpages
```
