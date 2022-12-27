import React from 'react';
import './Leaderboard.css';

class Leadeboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost/leaderboard/leaders.php')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          data: result,
        });
      })
      .catch((error) => {
        console.log('an error occured: ' + error);
      });
  }

  render() {
    const headers = (
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Points</th>
        </tr>
      </thead>
    );

    const leaders = this.state.data.map((element) => {
      return (
        <tr>
          <td>{element.name}</td>
          <td>{element.surname}</td>
          <td>{element.points}</td>
        </tr>
      );
    });
    return (
      <div className='leaderboard'>
        <table>
          {headers}
          <tbody>{leaders}</tbody>
        </table>
      </div>
    );
  }
}
export default Leadeboard;
