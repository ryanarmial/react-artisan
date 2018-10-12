class Config {
  constructor(options) {
    this.filename = options.filename
    this.type = options.type
    this.isHere = this.setDefault(options, 'isHere', false)
  }
  setDefault(options, property, defaultValue){
    return options.hasOwnProperty(property) ? options[property] : defaultValue
  }
}

module.exports = Config