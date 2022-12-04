import React from 'react';
import Square from './Square';
import './Board.css';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [1, 0],
      direction: null,
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.setState({ direction: 'left' });
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') this.setState({ direction: 'right' });
      if (e.key === 'ArrowTop' || e.key === 'w' || e.key === 'W') this.setState({ direction: 'top' });
      if (e.key === 'ArrowBottom' || e.key === 's' || e.key === 'S') this.setState({ direction: 'bottom' });

      console.log(this.state.direction);
    });
  }
  render() {
    let retSquares = Array(81);
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        if (i === this.state.head[0] && j === this.state.head[1]) {
          retSquares.push(<Square actualColor={'yellow'} key={`squareRow${i}Col${j}`} />);
        } else retSquares.push(<Square actualColor={'none'} key={`squareRow${i}Col${j}`} />);
      }
    }
    return <div className='Board'>{retSquares}</div>;
  }
}
export default Board;
