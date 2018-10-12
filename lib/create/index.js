const path = require('path')
const component = require(path.join(__dirname, './component'))

module.exports = function(config) {

  switch (config.type) {
    case "component":
      component(config)
      break;
  }

}