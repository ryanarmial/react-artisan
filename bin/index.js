#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const config = require(path.join(__dirname, '../config'))
const commandList = require(path.join(__dirname, '../command'))
const generate = require(path.join(__dirname, '../lib'))

const args = process.argv.splice(2)
const command = args[0]
const filename = args[1]
const optionCommand = args.splice(2)

const doing = command.split(':')[0]
const type = command.split(':')[1]

const checkDoing = commandList.doing.indexOf(doing)
const checkType = commandList.type.indexOf(type)

if (checkDoing < 0 || checkType < 0) {
  console.log('====================================');
  console.log('Unknown Command '+'"'+command+'"' );
  console.log('====================================');
} else if (!filename) {
  console.log('====================================');
  console.log('Filename must be exist' );
  console.log('====================================');
} else {
  const getConfig = config(type, filename, optionCommand)
  generate(doing, getConfig);
}
