const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getSourceFilename = (config) => {
  if(config.classComponent && config.withRedux) {
    return 'class-with-redux.js'
  } else if(!config.classComponent && config.withRedux) {
    return 'function-with-redux.js'
  } else if(config.classComponent && !config.withRedux) {
    return 'class.js'
  } else if(!config.classComponent && !config.withRedux) {
    return 'function.js'
  }
}

const readFile = (config, sourcefile) => {
  const filepath = path.join(__dirname, `../../sources/${config.type}s/${sourcefile}`)

  let filenya = fs.readFileSync(filepath, 'utf8')
  let result = filenya.replace(/FILENAME/g, config.filename);
  return result
}

const checkSrc = () => {
  return fs.existsSync('./src')
}

const createFolder = (rootPath) => {
  let folderPath = path.join('./src', rootPath)
  let statusFolder = fs.existsSync(folderPath)
  if(!statusFolder){
    try {
      mkdirp.sync(folderPath, { mode: 0755 & (~process.umask()) })
    }
    catch(err){
      if(err.code == 'EACCES'){
        console.log('====================================');
        console.log(`check your permission folder in ./src${rootPath}`);
        console.log('====================================');
      } else {
        // console.log(err)
        console.log('====================================');
        console.log('You must be at project root folder');
        console.log('====================================');
      }
    }
  }
}

const writeFile = (fileName, rootPath, rawfile) => {

  let filePath = path.join('./src/', rootPath, `/${fileName}.js`)
  let statusFile = fs.existsSync(filePath)

  if (!statusFile) {
    try {
      fs.writeFileSync(filePath, rawfile)
    }
    catch(err) {
      console.log(err)
    }
    console.log('====================================');
    console.log('You success create '+ filePath);
    console.log('====================================');
  } else {
    console.log('====================================');
    console.log('file already exist in '+ filePath);
    console.log('====================================');
  }
}

module.exports = function(config) {
  
  let sourcefile = getSourceFilename(config)
  let rawfile = readFile(config, sourcefile)
  let srcStatus = checkSrc()

  if(!srcStatus){
    console.log('====================================');
    console.log('You must be at project root folder');
    console.log('====================================');
  } else {
    createFolder(config.rootPath)
    writeFile(config.filename, config.rootPath, rawfile)
  }
}