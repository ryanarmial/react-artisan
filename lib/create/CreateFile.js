const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const Message = require(path.join(__dirname, '../../sources/message'))


class CreateFile {

  constructor(config){
    this.config = config
  }

  checkSrc() {
    if(this.config.isHere){
      return (process.cwd().split('/').indexOf("src") > -1)
    } else {
      return fs.existsSync('./src')
    }
  }

  readFile(sourcefile) {
    
    const filepath = path.join(__dirname, `../../sources/${this.config.type}s/${sourcefile}`)
  
    let filenya = fs.readFileSync(filepath, 'utf8')
    let result = filenya.replace(/FILENAME/g, this.config.filename);
    
    return result

  }

  createFolder() {

    let folderPath = this.getFolderPath()
    
    let statusFolder = fs.existsSync(folderPath)

    if(!statusFolder){
      try {
        mkdirp.sync(folderPath, { mode: parseInt('0755',8) & (~process.umask()) })
      }
      catch(err){
        if(err.code == 'EACCES'){
          Message.checkPermission(`./src${this.config.rootPath}`)
        } else {
          Message.mustRootProject()
        }
      }
    }

  }

  writeFile(rawfile) {

    let filePath = this.getFilePath()
                
    let statusFile = fs.existsSync(filePath)
  
    if (!statusFile) {
      try {
        fs.writeFileSync(filePath, rawfile)

        Message.createdFile(filePath)
      }
      catch(err) {
        console.log(err)
      }
    } else {
        Message.failedCreate(filePath)
    }

  }
  
  getFolderPath() {
    
    if(this.config.isHere) {
      return path.join(`./${this.config.filename}`)
    } else if(this.config.folderFile){
      return path.join('./src', this.config.rootPath, this.config.filename)
    } else {
      return path.join('./src', this.config.rootPath)
    }

  }

  getFilePath() {

    let rootPath = this.config.isHere ? '' : path.join('./src/', this.config.rootPath)
    
    if(this.config.folderFile) {
      return path.join(rootPath, `./${this.config.filename}/index.js`)
    } else {
      return path.join(rootPath, `./${this.config.filename}.js`)
    }

  }

}

module.exports = CreateFile