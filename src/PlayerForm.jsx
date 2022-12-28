import React from 'react';
import './PlayerForm.css';
const PlayerForm = (props) => {
  return (
    <div className='playerForm'>
      <form onSubmit={props.handleSubmit}>
        <label>Name: </label> <br />
        <input type='text' onChange={props.handleNameChange} value={props.nameValue} /> <br />
        <label>Surname: </label> <br /> <input type='text' onChange={props.handleSurnameChange} value={props.surnameValue} /> <br />
        <input type='submit' value='OK' />
      </form>
    </div>
  );
};

export default PlayerForm;
