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
    this.isAppleEaten = this.isAppleEaten.bind(this);
  }
  componentDidMount() {
    this.generateApple();
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && this.state.direction !== 'right') this.setState({ direction: 'left' });
      if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && this.state.direction !== 'left') this.setState({ direction: 'right' });
      if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && this.state.direction !== 'bottom') this.setState({ direction: 'top' });
      if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && this.state.direction !== 'top') this.setState({ direction: 'bottom' });
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
    this.isAppleEaten();
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

  isAppleEaten() {
    if (this.state.head[0] === this.state.apple[0] && this.state.head[1] === this.state.apple[1]) {
      this.setState((prevState) => ({
        snakeLength: prevState.snakeLength + 1,
      }));
      this.generateApple();
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
