#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const config = require(path.join(__dirname, '../config'))
const commandList = require(path.join(__dirname, '../command'))
const generate = require(path.join(__dirname, '../lib'))
const help = fs.readFileSync(path.join(__dirname, '../sources/help.txt'), 'utf8')

const args = process.argv.splice(2)
const command = args[0]
const filename = args[1]
const optionCommand = args.splice(2)

const doing = command.split(':')[0]
const type = command.split(':')[1]

const checkCommand = commandList.hasOwnProperty(doing) ? 
                      (commandList[doing].indexOf(type) > -1) : 
                      false 

if(doing == "help") {
  console.log(help)
} else if (!checkCommand) {
  console.log(help)
  console.log('====================================');
  console.log('Unknown Command '+'"'+command+'"' );
  console.log('====================================');
} else if (!filename && doing != 'init') {
  console.log('====================================');
  console.log('Filename must be exist' );
  console.log('====================================');
} else {
  const getConfig = config(type, filename, optionCommand)
  generate(doing, getConfig);
}
