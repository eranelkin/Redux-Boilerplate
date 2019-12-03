import React, { Component } from 'react';
import { connect } from 'react-redux';

import { buildBoard } from '../actions';

export class Checkers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: null,
      hasErrors: false
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/planets/4/')
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div className='myclass'></div>;
  }
}

// Checkers.defaultProps = {
//   rowsAmount: 8,
//   colsAmount: 8
// };

const mapStateToProps = state => {
  const { checkers = {} } = state;
  const { board = [] } = checkers;

  return {
    board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buildBoard: (rowsAmount, colsAmount) => {
      dispatch(buildBoard(rowsAmount, colsAmount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkers);
