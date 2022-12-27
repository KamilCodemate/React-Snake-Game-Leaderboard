import React from 'react';

class Leadeboard extends React.Component {
  componentDidMount() {
    fetch('http://localhost/leaderboard/leaders.php')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
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

    return (
      <div className='leaderboard'>
        <table>
          {headers}
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
export default Leadeboard;
