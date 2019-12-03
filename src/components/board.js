import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from './row';

export class Board extends Component {
  render() {
    const { board } = this.props;

    return (
      <div className='game-board'>
        {board.map((row, index) => {
          return <Row rowNumber={index + 1} key={index} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { checkers = {} } = state;
  const { board = [] } = checkers;

  return {
    board
  }
};

export default connect(mapStateToProps)(Board);