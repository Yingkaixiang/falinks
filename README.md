# falinks

一个用于管理团队工具链的 monorepo。

![falinks](https://www.serebii.net/swordshield/pokemon/870.png)

## 命令行工具

[查看详情](./packages/cli/README.md)

```bash
# 创建一个 vue 组件库脚手架
npx @falinks/cli create <project>

# 按类型创建 .gitignore 文件
npx @falinks/cli gi <language>
```

## 一键部署 GitHub Pages

[查看详情](./packages/deploy-ghpages/README.md)

```bash
npx @falinks/deploy-ghpages --path <folder>
```

## UI 组件库

[查看详情](./packages/rotom/README.md)

```bash
npm i @falinks/rotom
```
