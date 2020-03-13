#!/usr/bin/env node

const program = require('commander');
const ora = require('ora');
const download = require('download-git-repo');
const chalk = require('chalk');
const symbols = require('log-symbols');

const packageJSON = require('./package.json');

program.version(packageJSON.version, '-v, --version');

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

program.parse(process.argv);
