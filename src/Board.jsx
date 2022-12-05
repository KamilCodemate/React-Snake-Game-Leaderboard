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
    this.move = this.move.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      debugger;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.setState({ direction: 'left' });
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') this.setState({ direction: 'right' });
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') this.setState({ direction: 'top' });
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') this.setState({ direction: 'bottom' });
    });
    setInterval(() => this.move(), 500);
  }

  move() {
    switch (this.state.direction) {
      case 'left':
        this.setState((prevState) => ({
          head: [prevState.head[0], prevState.head[1] - 1],
        }));
        break;
      case 'right':
        this.setState((prevState) => ({
          head: [prevState.head[0], prevState.head[1] + 1],
        }));
        break;
      case 'top':
        this.setState((prevState) => ({
          head: [prevState.head[0] - 1, prevState.head[1]],
        }));
        break;
      case 'bottom':
        this.setState((prevState) => ({
          head: [prevState.head[0] + 1, prevState.head[1]],
        }));
        break;
      default:
        break;
    }
  }

  render() {
    let retSquares = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (i === this.state.head[0] && j === this.state.head[1]) {
          retSquares.push(<Square actualColor={'yellow'} key={`squareRow${i}Col${j}`} />);
        } else retSquares.push(<Square actualColor={'#171717'} key={`squareRow${i}Col${j}`} />);
      }
    }
    return <div className='Board'>{retSquares}</div>;
  }
}
export default Board;
