import React from 'react';
import './PlayerForm.css';
const PlayerForm = (props) => {
  return (
    <div className='playerForm'>
      <form onSubmit={props.handleSubmit}>
        <label>Name: </label> <br />
        <input type='text' onChange={props.handleNameChange} /> <br />
        <label>Surname: </label> <br /> <input type='text' onChange={props.handleSurnameChange} /> <br />
        <input type='submit' value='OK' />
      </form>
    </div>
  );
};

export default PlayerForm;
