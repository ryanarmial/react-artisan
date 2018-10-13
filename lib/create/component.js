const CreateFile = require('./CreateFile')
const path = require('path')
const Message = require(path.join(__dirname, '../../sources/message'))

class Component extends CreateFile {

  constructor(config){
    super(config)
  }

  getSourceFilename() {
    if(this.config.classComponent && this.config.withReactRedux) {
      return 'class-with-redux.js'
    } else if(!this.config.classComponent && this.config.withReactRedux) {
      return 'function-with-redux.js'
    } else if(this.config.classComponent && !this.config.withReactRedux) {
      return 'class.js'
    } else if(!this.config.classComponent && !this.config.withReactRedux) {
      return 'function.js'
    }
  }

  static create(config) {
    
    const component = new Component(config)
    
    let srcStatus = component.checkSrc()
    
    if(!srcStatus){
      
      Message.mustRootProject()

    } else {
      
      let sourcefile = component.getSourceFilename()
      let rawfile = component.readFile(sourcefile)
      
      if(!config.isHere || config.folderFile){
      
        component.createFolder()
      
      }
      
      component.writeFile(rawfile)

    }
  }
}

module.exports = Component