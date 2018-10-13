const create = require('./create')
const init = require('./init')

module.exports = function(doing, config) {
  switch (doing) {
    case "create":
      create(config)
      break;
    case "init":
      init(config)
  }
}