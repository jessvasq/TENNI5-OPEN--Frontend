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
    props.addMatch(payload, match.id); //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
  }

  const editMatch = (event) => {
    event.preventDefault()
    setShowUpdateForm(true)
  }

////////////////////////////////////////////////////////////////////////////////

////////MY MATCHES
  //set state
  const [addForm, setAddForm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const addM = (event) => {
      setAddForm({ ...addForm, [event.target.name]: event.target.value });
  }

  const handleAdd = (event) => {
    event.preventDefault() //ensures that the form data is handled within the function without trigerring a pag
    const {image, host_name, location, description, date, players, skill_level, price} = addForm
    const payload = {  //We need to create a new object and assign the values from updateForm to these properties 
      image: "image",
      host_name: "host_name",
      location: "location", 
      description: "description",
      date: "date",
      players: "players", 
      skill_level: "skill_level",
      price: "price", 
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


  <button id="update" onClick={editMatch}>UPDATE</button>
    {/* {showupdateForm && <UpdateForm matches={match} updateMatch={props.updateMatch} />} */}
    {showupdateForm && 
        <form onSubmit={handleSubmit}>
          Location: <input type="text" value={updateForm.location} name="location" placeholder="location" onChange={handleChange} />
          Description: <input type="text" value={updateForm.description} name="description" placeholder="description" onChange={handleChange} />
          Date & Time: <input type="text" value={updateForm.date} name="date" placeholder="date" onChange={handleChange} />
          Players: <input type="text" value={updateForm.players} name="players" placeholder="players" onChange={handleChange} />
          Price: $<input type="text" value={updateForm.price} name="price" placeholder="price" onChange={handleChange} />
          <input type="submit" value="Update Match"/>
          <button onClick={handleClose}>X</button>
        </form> 
    }

  <button id="add" onClick={showAdd}>Add</button>
    {showAddForm && 
      <form onSubmit={handleAdd}>
          <input type="text" value={match.image} name="image" placeholder="image" onChange={handleChange} />
          <input type="text" value={match.host_name.username} name="host_name" placeholder="host_name" onChange={handleChange} />
          <input type="text" value={match.skill_level} name="skill_level" placeholder="skill_level" onChange={handleChange} />
          Location: <input type="text" value={match.location} name="location" placeholder="location" onChange={handleChange} />
          Description: <input type="text" value={match.description} name="description" placeholder="description" onChange={handleChange} />
          Date & Time: <input type="text" value={match.date} name="date" placeholder="date" onChange={handleChange} />
          Players: <input type="text" value={match.players} name="players" placeholder="players" onChange={handleChange} />
          Price: $<input type="text" value={match.price} name="price" placeholder="price" onChange={handleChange} />
      <input type="submit" value="Confirm" />
    </form>
  }

</div>
); 
} 

export default ShowMatch;

