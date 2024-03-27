import React from 'react'
import {useParams, useNavigate } from "react-router-dom" 
import { useState, useEffect } from 'react'
import Chat from '../Chat'

function ShowMyMatch(props) {


const params = useParams() 
const navigate = useNavigate()
const id = params.id; 
const matches = props.matches; 
const myMatch = matches.find((p) => p.id === Number(id)); 


//set state
 const [updateForm, setUpdateForm] = useState(myMatch);
 const [showupdateForm, setShowUpdateForm] = useState(false);
 const [showContactForm, setShowContactForm] = useState(false);

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
   props.updateMatch(payload, myMatch.id); //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
   navigate("/tenni5open/mymatches")
}

 const editMatch = (event) => {
   event.preventDefault()
   setShowUpdateForm(true)
 }

  const handleClose = (event) => {
    event.preventDefault()
    setShowUpdateForm(false);
  }

  const removeMatch = (event) => {
    event.preventDefault()
    props.deleteMatch(myMatch.id);
    navigate("/tenni5open/mymatches")
  }
 
  const openChat = (event) => {
    event.preventDefault()
    setShowContactForm(true)
  }
  const closeChat = (event) => {
    event.preventDefault()
    setShowContactForm(false);
  }

return ( 
  <>

  <div className='matches-grid'>

    <div className='match-host'>
      <h2 className='host-name'> HOSTED BY <br/>
      {myMatch.username}
      </h2>
    </div>


  <div className='match-description'>
    <img className='matches-img' src={myMatch.image} /> 
  

  <div className='descrip-container'> 
    <h2 className='descrip-title'>LOCATION:</h2> 
    <h2 className='description'>{myMatch.location}</h2> 

    <h2 className='descrip-title'>DESCRIPTION:</h2> 
    <h2 className='description'>{myMatch.description}</h2> 
    <h2 className='descrip-title'>DATE: </h2> 
    <h2 className='description'>{myMatch.date}</h2> 
    <h2 className='descrip-title'>PLAYERS: </h2> 
    <h2 className='description'>{myMatch.players}</h2> 
    <h2 className='descrip-title'>LEVEL: </h2> 
    <h2 className='description'>{myMatch.skill_level}</h2> 
    <h2 className='descrip-title'>PRICE: </h2> 
    <h2 className='description'>{myMatch.price}</h2> 
  <br/>

<button className="buttons" onClick={openChat}>Contact Host</button>

   {showContactForm && 
   <div>
    <Chat /> 
    <button id="close-chat" onClick={closeChat}>X</button> </div>
   }

  <button className="bttn-remove" onClick={removeMatch}>DELETE MATCH</button>
  <button className="bttn-update" onClick={editMatch}>UPDATE</button>
    <div className='grid-update'>
    { showupdateForm &&
        <div className='grid-host-input1'>
           <h1 className="update-title">UPDATE MATCH</h1>
    <div className='email-input'>
        <form onSubmit={handleSubmit}>
        <button className ="update-close-bttn " onClick={handleClose}>X</button>
        <h2 className='descrip-title1'>DESCRIPTION:</h2> 
          <input className='host-user-input1' type="text" value={updateForm.description} name="description" placeholder="description" onChange={handleChange} />
        <h2 className='descrip-title1'>DATE: </h2> 
          <input className='host-user-input1' type="text" value={updateForm.date} name="date" placeholder="date" onChange={handleChange} />
        <h2 className='descrip-title1'>PLAYERS: </h2> 
          <input  className='host-user-input1' type="text" value={updateForm.players} name="players" placeholder="players" onChange={handleChange} />
        <h2 className='descrip-title1'>PRICE: $ </h2> 
          <input className='host-user-input1' type="text" value={updateForm.price} name="price" placeholder="price" onChange={handleChange} />
          <input  className="user-update-bttn" type="submit" value="Update Match"/>
        </form> 
    </div>
    </div>
    
    }
 </div>
 </div>
</div>
</div>
</>
); 
} 

export default ShowMyMatch;

