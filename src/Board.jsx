import React from 'react';
import Square from './Square';
import './Board.css';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [0, 2],
      direction: null,
      body: [[0, 0]],
      snakeLength: 1,
    };
    this.move = this.move.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') this.setState({ direction: 'left' });
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') this.setState({ direction: 'right' });
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') this.setState({ direction: 'top' });
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') this.setState({ direction: 'bottom' });
    });
    setInterval(() => this.move(), 100);
  }

  move() {
    let newBody = this.state.body;
    newBody.unshift(this.state.head);
    if (newBody.length > this.state.snakeLength) {
      newBody.pop();
    }

    switch (this.state.direction) {
      case 'left':
        this.setState((prevState) => ({
          head: [prevState.head[0], prevState.head[1] - 1],
          body: newBody,
        }));
        break;
      case 'right':
        this.setState((prevState) => ({
          head: [prevState.head[0], prevState.head[1] + 1],
          body: newBody,
        }));
        break;
      case 'top':
        this.setState((prevState) => ({
          body: newBody,
          head: [prevState.head[0] - 1, prevState.head[1]],
        }));
        break;
      case 'bottom':
        this.setState((prevState) => ({
          body: newBody,
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
