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
  <h1 className='description'>{myMatch.location}</h1> 

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

  </div>
  


<button className="buttons" onClick={openChat}>Contact Host</button>
   {showContactForm && 
    <Chat /> 
   }
  <button id="close-chat" onClick={closeChat}>X</button>
{/* 
//   <button id="add" onClick={showAdd}>Add</button>
//     {showAddForm && 
//       <form onSubmit={handleAdd}>
//           <input type="text" value={match.image} name="image" placeholder="image" onChange={handleChange} />
//           <input type="text" value={match.host_name.username} name="host_name" placeholder="host_name" onChange={handleChange} />
//           <input type="text" value={match.skill_level} name="skill_level" placeholder="skill_level" onChange={handleChange} />
//           Location: <input type="text" value={match.location} name="location" placeholder="location" onChange={handleChange} />
//           Description: <input type="text" value={match.description} name="description" placeholder="description" onChange={handleChange} />
//           Date & Time: <input type="text" value={match.date} name="date" placeholder="date" onChange={handleChange} />
//           Players: <input type="text" value={match.players} name="players" placeholder="players" onChange={handleChange} />
//           Price: $<input type="text" value={match.price} name="price" placeholder="price" onChange={handleChange} />
//       <input type="submit" value="Confirm" />
//     </form> */}


<button className="bttn-update" onClick={editMatch}>UPDATE</button>
    {/* {showupdateForm && <UpdateForm matches={match} updateMatch={props.updateMatch} />} */}
    { showupdateForm &&
        <form onSubmit={handleSubmit}>
          Description: <input type="text" value={updateForm.description} name="description" placeholder="description" onChange={handleChange} />
          Date & Time: <input type="text" value={updateForm.date} name="date" placeholder="date" onChange={handleChange} />
          Players: <input type="text" value={updateForm.players} name="players" placeholder="players" onChange={handleChange} />
          Price: $<input type="text" value={updateForm.price} name="price" placeholder="price" onChange={handleChange} />
          <input type="submit" value="Update Match"/>
          <button onClick={handleClose}>X</button>
        </form> 
    }


  <br/>
  <h3 className='remove-text'>No longer interested:</h3> <br/>
  <button className="bttn-remove" onClick={removeMatch}>REMOVE</button>
  </div>
</div>
</>
); 
} 

export default ShowMyMatch;















//     const loaded = () => {
//         return props.matches.map((match) => (
//             <div key={match.id} >
//               <Link to={`/tenni5open/mymatches/${match.id}`}> 
//                 <img src={match.image}/>
//                 <h1>{match.description} , {match.location}</h1> 
//               </Link>
//             </div>
//         ))
//     }

//     const loading = () => {
//         return <h1>Loading...</h1>;
//       };
    

//   return (
//     <div>
//       {props.matches ? loaded() : loading() }
//     </div>
//   )
// }

// export default ShowMyMatch;
