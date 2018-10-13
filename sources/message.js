class Message {

  static mustRootProject() {
    console.log('====================================');
    console.log('You must be at project root folder');
    console.log('====================================');
  }

  static checkPermission(location) {
    console.log('====================================');
    console.log(`check your permission folder in ${location}`);
    console.log('====================================');
  }

  static createdFile(location) {
    console.log('====================================');
    console.log('You success created file in '+ location);
    console.log('====================================');
  }

  static failedCreate(location) {
    console.log('====================================');
    console.log('file already exist in '+ location);
    console.log('====================================');
  }
}

module.exports = Message