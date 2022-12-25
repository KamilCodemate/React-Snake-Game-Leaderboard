import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: [0, 2],
      apple: [],
      direction: null,
      body: [
        [0, 0],
        [0, 1],
      ],

      snakeLength: 2,
    };
    this.move = this.move.bind(this);
    this.generateApple = this.generateApple.bind(this);
  }
  componentDidMount() {
    this.generateApple();
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

  generateApple() {
    while (true) {
      const appleRow = Math.floor(Math.random() * 15);
      const appleColumn = Math.floor(Math.random() * 15);

      if (
        !(appleRow === this.state.head[0] && appleColumn === this.state.head[1]) &&
        !this.state.body.some((square) => square[0] === appleRow && square[1] === appleColumn)
      ) {
        this.setState({
          apple: [appleRow, appleColumn],
        });
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <Board head={this.state.head} body={this.state.body} apple={this.state.apple} />
      </div>
    );
  }
}

export default Game;
