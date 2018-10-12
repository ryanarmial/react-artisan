const path = require('path')
const Component = require(path.join(__dirname, './Component'))

module.exports = function(config) {

  switch (config.type) {
    case "component":
      Component.create(config)
      break;
  }

}