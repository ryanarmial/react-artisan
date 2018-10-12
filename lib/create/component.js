const fs = require('fs')
const path = require('path')

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

const createFolderComponent = (rootPath) => {
  let statusFolder = fs.existsSync(`./src/${rootPath}`)
  console.log('====================================');
  console.log(statusFolder);
  console.log('====================================');
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
    createFolderComponent(config.rootPath)
  }
}