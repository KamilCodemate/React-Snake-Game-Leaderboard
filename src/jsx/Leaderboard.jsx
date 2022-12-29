import React from 'react';
import '../css/Leaderboard.css';

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
          <th key='nameHeader'>Name</th>
          <th key='surnameHeader'>Surname</th>
          <th key='pointsHeader'>Points</th>
        </tr>
      </thead>
    );

    const leaders = this.state.data.map((element, index) => {
      return (
        <tr key={`row${index}`}>
          <td key={`nameRow${index}`}>{element.name}</td>
          <td key={`surnameRow${index}`}>{element.surname}</td>
          <td key={`pointsRow${index}`}>{element.points}</td>
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
