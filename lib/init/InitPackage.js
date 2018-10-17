const fs = require('fs')
const execa = require('execa');
const Listr = require('listr');

class InitPackage {

  constructor(config){
    this.config = config
  }

  checkPackage() {
    return fs.existsSync('./package.json')
  }

  readPackage() {
    let packages = fs.readFileSync('./package.json', 'utf8')
    return JSON.parse(packages)
  }

  async installPackages(dependencies) {
    new Listr([
      {
        title: 'Removing package-lock',
        task: () => false
      },
      {
        title: 'Running npm install',
        task: () => execa('echo', ['install'])
      },
      {
        title: 'Adding package-lock to git',
        task: (ctx, task) =>
            execa('echo', ['add', 'HIII'])
            .catch(() => task.skip())
      }
    ]).run();
  }

}

module.exports = InitPackage