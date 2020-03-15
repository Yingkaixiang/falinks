#!/usr/bin/env node

const shell = require('shelljs');
const argv = require('yargs').argv;
const chalk = require('chalk');

// 需要部署的文件目录
const path = argv.path;

// 进入指定目录部署
if (path) {
  const res = shell.cd(path);
  if (res.code !== 0) {
    process.exit(-1);
  }
}

console.log(`=> 需要部署的目录为：${path}`);
console.log('=> 获取 git 远程仓库地址');

const remoteUrl = shell.exec('git config --get remote.origin.url', { silent: true }).stdout.trim();
console.log(chalk.green(`仓库地址：${remoteUrl}`));

if (!remoteUrl) {
  console.log(chalk.red('error: 请先配置远程地址'));
  process.exit(-1);
}

shell.exec('git init');
shell.exec('git add .');
shell.exec('git commit -m "Deploy to GitHub Pages"');
shell.exec(`git remote add origin ${remoteUrl}`);

console.log('=> 开始部署');

const res = shell.exec(`git push --force --quiet ${remoteUrl} master:gh-pages`);

if (res.code !== 0) {
  console.log(chalk.red('error: 部署失败'));
  process.exit(-1);
}

console.log(chalk.green('=> 部署成功'));