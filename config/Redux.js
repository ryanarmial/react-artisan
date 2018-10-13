let Config = require('./config.js')

class Redux extends Config {
  constructor(options) {
    super(options)

    this.rootPath = this.setDefault(options, 'rootPath', '/store'),
    this.withReactRedux = this.setDefault(options, 'withReactRedux', false)
    this.folderFile = this.setDefault(options, 'folderFile', false) 
  }
}

module.exports = Redux