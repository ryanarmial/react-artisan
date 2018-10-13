const InitPackage = require('./InitPackage')
const path = require('path')
const Message = require(path.join(__dirname, '../../sources/message'))

class Redux extends InitPackage {



  static init(config) {
    
    let redux = new Redux(config)

    let statusPackageFile = redux.checkPackage()

    if(statusPackageFile) {
      let listPackage = redux.readPackage()
    } else {
      Message.mustRootFolder()
    }
  }

}

module.exports = Redux