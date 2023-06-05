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
  const [updateForm, setUpdateForm] = useState(match);

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

  const removeMatch = (event) => {
    event.preventDefault()
    props.deleteMatch(match.id);
    navigate("/tenni5open/")
  }
 
return ( 

<div className="match"> 
  <h1>Location: {match.location}</h1> 
  <img src={match.image} /> 
  <h2>Description: {match.description}</h2> 
  <h2>Host: {match.host_name.username}</h2> 
  <h2>Date: {match.date}</h2> 
  <h2>Players:{match.players}</h2> 
  <h2>Skill level:{match.skill_level}</h2> 
  <h2>Price: {match.price}</h2> 
  <button id="delete" onClick={removeMatch}>Delete</button>


  <h1>Update Match</h1>
  <form onSubmit={handleSubmit}>
        Location: <input type="text" value={updateForm.location} name="location" placeholder="location" onChange={handleChange} />
        Description: <input type="text" value={updateForm.description} name="description" placeholder="description" onChange={handleChange} />
        Date: <input type="text" value={updateForm.date} name="date" placeholder="date" onChange={handleChange} />
        Players: <input type="text" value={updateForm.players} name="players" placeholder="players" onChange={handleChange} />
        Price: $<input type="text" value={updateForm.price} name="price" placeholder="price" onChange={handleChange} />
        <input type="submit" value="Update Match"/>
  </form>
</div>

); 
} 

export default ShowMatch;

