import React from 'react';
import Square from './Square';
import './Board.css';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [1, 0],
    };
  }

  render() {
    let retSquares = Array(81);
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        if (i === this.state.head[0] && j === this.state.head[1]) {
          retSquares.push(<Square actualColor={'yellow'} />);
        } else retSquares.push(<Square actualColor={'none'} />);
      }
    }
    return <div className='Board'>{retSquares}</div>;
  }
}
export default Board;
