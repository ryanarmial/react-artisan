let Config = require('./config.js')

class Component extends Config {
  constructor(options) {
    super(options)

    this.rootPath = this.setDefault(options, 'rootPath', '/components'),
    this.classComponent =  this.setDefault(options, 'classComponent', true)
    this.withReactRedux = this.setDefault(options, 'withReactRedux', false)
    this.folderFile = this.setDefault(options, 'folderFile', false)
  }
}

module.exports = Component