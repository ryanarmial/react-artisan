const InitPackage = require('./InitPackage')
const path = require('path')
const Message = require(path.join(__dirname, '../../sources/message'))

class Redux extends InitPackage {

  constructor(config) {
    super(config)
    this.dependencies = this.generateDependencies()
  }

  generateDependencies() {
    if(this.config.withReactRedux) {
      return [ 'redux', 'react-redux' ]
    } else {
      return [ 'redux' ]
    }
  }

  static init(config) {
    
    let redux = new Redux(config)

    let statusPackageFile = redux.checkPackage()

    if(statusPackageFile) {
      let listPackage = redux.readPackage()
      redux.installPackages(redux.dependencies)
    } else {
      Message.mustRootFolder()
    }
  }

}

module.exports = Redux