#!/usr/bin/env node
const fs = require('fs');

const args = process.argv.splice(2)
const command = args[0]
const filename = args[1]
const optionCommand = args.splice(2)

console.log(command, filename, optionCommand)
