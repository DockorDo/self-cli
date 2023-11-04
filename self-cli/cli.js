#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command();
import { input } from '@inquirer/prompts';

import download from 'download-github-repo'

import child from 'child_process'

import shell from 'shelljs';


// program.exitOverride((err) => {
//   console.log(JSON.stringify(err))
// });

function errorColor(str) {
  return `\x1b[31m${str}\x1b[0m`;
}

program
  .configureOutput({
    writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
    writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
    outputError: (str, write) => write(errorColor(str))
  });



program.action(async () => {

  const answer = await input({ message: '请输入你的问题:' });
  const answer1 = await input({ message: '请输入你的第二个问题:' });
  const answer2 = await input({ message: '请输入你的第三个问题:' });

})

program.on('option:port', function (port) {
  console.log("测试:", port)
});
program
  .option('-p, --port <port>', '端口号')

program
  .command('clone [url]')
  .description('这里是clone的描述')
  .action((url) => {
    download(url, 'test/', (err) => {
      console.log(err)
    })
  });
program
  .command('add')
  .description('这里是add的描述')
  .action((source, destination) => {
    console.log('add command called');
  });

program
  .command("test")
  .description("测试执行shell 脚本")
  .action(() => {
    child.execFile("./src/install.sh", [], (err, stdout, stderr) => {
      console.log(stdout)
    })
  })

program
  .command("test1")
  .description("测试执行shell 脚本")
  .action(() => {
    shell.exec('/Users/richguo/Desktop/self-cli/src/install.sh', function (...rest) {
      console.log(rest)
    })
  })

try {
  program.parse(process.argv);
} catch (err) {
}

