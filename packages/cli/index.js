#!/usr/bin/env node

const program = require('commander');
const ora = require('ora');
const download = require('download-git-repo');
const chalk = require('chalk');
const symbols = require('log-symbols');
const axios = require('axios');
const fs = require('fs');

const packageJSON = require('./package.json');

program.version(packageJSON.version, '-v, --version');

// 创建工程模板
program.command('create <name>').action((name) => {
  const spinner = ora('脚手架模板下载中...');
  spinner.start();
  // 安装 vue 组件库脚手架
  download('Yingkaixiang/vue-component-boilerplate', name, {}, (err) => {
    if (!err) {
      spinner.succeed();
      console.log(symbols.success, chalk.green('项目创建成功'));
    } else {
      spinner.fail();
      console.log(symbols.error, chalk.red('项目创建失败'));
      console.log(symbols.error, chalk.red(err));
    }
  });
});

// 创建 gitignore
program.command('gi <type>').action((type) => {
  const types = ['vue', 'vuejs', 'react', 'reactnative', 'node', 'dart'];
  if (!types.includes(type)) {
    console.log(chalk.yellow(`暂不支持生成 ${type} 类型的 .gitignore`));
    console.log(chalk.yellow(`你可以选择以下的类型：${types}`));
    process.exit(1);
  }
  let url;
  if (type === 'vue') {
    url = 'https://raw.githubusercontent.com/Yingkaixiang/dotfiles/master/gitignore/vue/.gitignore';
  } else {
    url = `https://www.gitignore.io/api/${type}`;
  }
  axios(url).then((res) => {
    fs.writeFileSync('.gitignore', res.data);
    console.log(symbols.success, chalk.green('生成成功'));
  }).catch((err) => {
    console.log(symbols.error, chalk.red(err.message));
    process.exit(1);
  })
});

program.parse(process.argv);
