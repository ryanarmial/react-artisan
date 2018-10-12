import React, { Component } from 'react';
import { connect } from 'react-redux'

class FILENAME extends Component {
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

const mapStateToProps = state => {
  return {
    // example: state.stateFromReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // example: () => { dispatch({}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FILENAME);