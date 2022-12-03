import React from 'react';
import Square from './Square';
import './Board.css';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(12).fill(Array(12).fill(<Square />)),
      head: [1, 0],
    };
  }

  render() {
    return <div className='Board'>{this.state.squares}</div>;
  }
}
export default Board;
