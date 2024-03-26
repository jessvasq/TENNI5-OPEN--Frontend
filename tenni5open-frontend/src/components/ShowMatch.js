import React, { useState } from 'react';
import {useParams, useNavigate } from "react-router-dom" 

function ShowMatch(props) {


const params = useParams() 
const navigate = useNavigate()
const id = params.id; 
const matches = props.matches; 
const match = matches.find((p) => p.id === Number(id)); 


///////////

  //set state
  const [updateForm, setUpdateForm] = useState('');
  const [showupdateForm, setShowUpdateForm] = useState(false);

  const handleChange = (event) => {
      setUpdateForm({ ...updateForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault() //ensures that the form data is handled within the function without trigerring a pag
    const payload = {  //We need to create a new object and assign the values from updateForm to these properties 
      location: updateForm.location, 
      description: updateForm.description,
      date: updateForm.date,
      players: updateForm.players, 
      price: updateForm.price, 
    }
    props.updateMatch(payload, match.id); //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
  }

  const editMatch = (event) => {
    event.preventDefault()
    setShowUpdateForm(true)
  }

////////////////////////////////////////////////////////////////////////////////

////////MY MATCHES
  //set state
  const [addForm, setAddForm] = useState(match);
  const [showAddForm, setShowAddForm] = useState(false);

  const addM = (event) => {
      setAddForm({ ...addForm, [event.target.name]: event.target.value });
  }

  const handleAdd = (event) => {
    event.preventDefault() //ensures that the form data is handled within the function without trigerring a pag
    const { image, host_name, location, username, description, date, players, skill_level, price } = addForm
    const payload = {  //We need to create a new object and assign the values from updateForm to these properties 
      image: image,
      // host_name: host_name,
      location: location, 
      username: username,
      description: description,
      date: date,
      players: players, 
      skill_level: skill_level,
      price: price, 
    }
    props.addMatch(payload, match.id) //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
    navigate('/tenni5open/mymatches')
  }

  const showAdd = (event) => {
    event.preventDefault()
    setShowAddForm(true)
  }





/////////////////////////////////////////////////////////////////////
  const handleClose = (event) => {
    event.preventDefault()
    setShowUpdateForm(false);
  }

  const removeMatch = (event) => {
    event.preventDefault()
    props.deleteMatch(match.id);
    navigate("/tenni5open/matches")
  }
 
return ( 

<div className="matches-grid"> 
  <div className='match-host'> 
     <h2 className='host-name'> Hosted BY <br/> 
     {match.host_name.username}</h2> 
  </div>


  <div className='match-description'>
    <img className='matches-img'  src={match.image} /> 

    <div className='descrip-container'>
        <h2 className='descrip-title'>LOCATION:</h2> 
        <h2 className='description'>{match.location}</h2> 
        <h2 className='descrip-title'>DESCRIPTION:</h2> 
        <h2 className='description'>{match.description}</h2> 
        <h2 className='descrip-title'>DATE: </h2> 
        <h2 className='description'>{match.date}</h2> 
        <h2 className='descrip-title'>PLAYERS: </h2> 
          <h2 className='description'>{match.players}</h2> 
        <h2 className='descrip-title'>LEVEL: </h2> 
        <h2 className='description'>{match.skill_level}</h2> 
        <h2 className='descrip-title'>PRICE: </h2> 
        <h2 className='description'> ${match.price}</h2> 
    </div>
  <button className="join-bttn" onClick={showAdd}>JOIN MATCH</button>
    {showAddForm && 
      <form onSubmit={handleAdd}>
      <div className='confirmation_container'>
        <h1 className='check'>Check to add:
        <input type="checkbox" value={match.is_in_my_matches} name="is_in_my_matches" placeholder="Match's is_in_my_matches" onChange={handleChange} /> </h1>
        <input className="confirm-join-bttn" type="submit" value="Confirm" />
      </div>
    </form>
  }
  </div>
</div>
); 
} 

export default ShowMatch;

