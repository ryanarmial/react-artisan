const Component = require('./component')

module.exports = function(type, filename, options) {
  let objOptions = {
    filename: filename
  }
  options.forEach(option => {
    switch (option) {
      case "--function":
      case "-f":
        console.log('====================================');
        console.log('masuk nich');
        console.log('====================================');
        objOptions.classComponent = false
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