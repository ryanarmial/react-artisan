//in this component you can't get state and react lifecycle only props that you have
import React from 'react';
import { connect } from 'react-redux'

const FILENAME = (props) => {
  return (
    //component goes here
  );
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