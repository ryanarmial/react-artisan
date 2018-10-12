# React Artisan

## How to install
```bash
$ yarn add -g react-artisan
# or
$ npm install -g react-artisan
```

## How to use

```bash
$ react-artisan COMMAND FILENANE [options]

# e.g
$ react-artisan create:component About --with-react-redux --functional
```

### List of Command

```
create:component
``` 

### List of Option

| Options             | Description   |
| -------------       | ------------- |
| --with-react-redux  | create a component file that already connected with react-redux |
| --functional / -f     | create a functional component file       |
| --folder-file / -ff | create a component file inside folder, filename will be the folder name component file name would be index.js      |
| --here              | create component file in current directory       |

### Config File
you can also create a config file to change default config.
you can create file with name ra-config.js in project root folder

### e.g
```javascript
module.exports = {
  component: {
    rootPath: '/component', // to change root folder also inside /src
    classComponent: true, // default value create class component
    withReactRedux: false, // create a component file without connect to react-redux
    folderFile: false // create component file without folder file name
  }
}
```

## Example Code
### Class Component
```javascript
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    this.exampleMethod = this.exampleMethod.bind(this) //if you dont want to use arrow function
  }

  componentDidMount() {
    //will run after component rendered
  }

  //you can use arrow function if you want bind function
  exampleMethod() {

  }
  
  render() {
    return (
      //Component Start Here
    );
  }
}

export default About;
```

