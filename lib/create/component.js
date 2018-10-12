const fs = require('fs')
const path = require('path')

let getSourceFilename = (config) => {
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

module.exports = function(config) {
  
  sourcefile = getSourceFilename(config);
  const filepath = path.join(__dirname, `../../sources/${config.type}s/${sourcefile}`)

  let filenya = fs.readFileSync(filepath, 'utf8')
  let result = filenya.replace(/FILENAME/g, config.filename);
  console.log('====================================');
  console.log(result);
  console.log('====================================');

  // fs.mkdirSync('components')
  // fs.writeFileSync(`components/${filename}.js`, result, 'utf8');
}