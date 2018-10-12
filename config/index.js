const fs = require('fs')
const Component = require('./component')
try {
  var fileConfig = require(process.cwd()+'/ryan.config.js')
}
catch(err){
  var fileConfig = null
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
      case "--function":
      case "-f":
        objOptions.classComponent = false
        break;
      case "--here":
        objOptions.isHere = true
        break;
      case "--with-redux":
        objOptions.withRedux = true
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
    default:
      return new Component(objOptions)
  }
}