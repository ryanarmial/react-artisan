const fs = require('fs')

class InitPackage {

  constructor(config){
    this.config = config
  }

  checkPackage() {
    return fs.existsSync('./package.json')
  }

  readPackage() {
    let packages = fs.readFileSync('./package.json', 'utf8')
    return JSON.parse(packages)
  }

}

module.exports = InitPackage