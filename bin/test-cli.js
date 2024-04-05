#! /usr/bin/env node


const program = require('commander')
// console.log(program.command, 123)
const chalk = require('chalk')

program.command('create <app-name>').description('create a new project').option('-f,--force', 'overwrite target directory if it exist')
  .action((name, options) => {
    console.log('项目名称', name)
  })

program.parse(process.argv)