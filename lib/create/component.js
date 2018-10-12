const CreateFile = require('./CreateFile')

class Component extends CreateFile {

  constructor(config){
    super(config)
  }

  getSourceFilename() {
    if(this.config.classComponent && this.config.withRedux) {
      return 'class-with-redux.js'
    } else if(!this.config.classComponent && this.config.withRedux) {
      return 'function-with-redux.js'
    } else if(this.config.classComponent && !this.config.withRedux) {
      return 'class.js'
    } else if(!this.config.classComponent && !this.config.withRedux) {
      return 'function.js'
    }
  }

  static create(config) {
    
    const component = new Component(config)
    
    let srcStatus = component.checkSrc()
    
    if(!srcStatus){
      
      console.log('====================================');
      console.log('You must be at project root folder');
      console.log('====================================');

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