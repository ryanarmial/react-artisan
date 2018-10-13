const path = require('path')
const Redux = require(path.join(__dirname, './Redux'))

module.exports = function(config) {

  switch (config.type) {
    case "redux":
      Redux.init(config)
      break;
  }

}