const fs = require('fs')
const Component = require('./Component')
const Redux = require('./Redux')
let fileConfig; 
try {
  fileConfig = require(process.cwd()+'/ra.config.js')
}
catch(err){
  fileConfig = null
}

module.exports = function(type, filename, options) {
  
  let objOptions = {
    filename: filename,
    type: type
  }

  if (fileConfig){
    objOptions = {
      ...objOptions,
      ...fileConfig[type]
    }
  }

  options.forEach(option => {
    switch (option) {
      case "--functional":
      case "-f":
        objOptions.classComponent = false
        break;
      case "--here":
        objOptions.isHere = true
        break;
      case "--with-react-redux":
        objOptions.withReactRedux = true
        break;
      case "--folder-file":
      case "-ff":
        objOptions.folderFile = true
        break;
    }
  });
  
  switch (type) {
    case "component":
      return new Component(objOptions)
    case "redux":
      return new Redux(objOptions)
    default:
      return new Component(objOptions)
  }
}