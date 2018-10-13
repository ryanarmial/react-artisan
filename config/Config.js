class Config {
  constructor(options) {
    this.filename = this.setDefault(options, 'filename', 'index')
    this.type = options.type
    this.isHere = this.setDefault(options, 'isHere', false)
  }
  setDefault(options, property, defaultValue){
    return options.hasOwnProperty(property) ? options[property] : defaultValue
  }
}

module.exports = Config