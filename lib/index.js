const create = require('./create')

module.exports = function(doing, config) {
  switch (doing) {
    case "create":
      create(config)
      break;
  }
}