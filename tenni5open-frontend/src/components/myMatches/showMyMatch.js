import React from 'react'
import {useParams, useNavigate } from "react-router-dom" 
import { useState, useEffect } from 'react'

function ShowMyMatch(props) {


const params = useParams() 
const navigate = useNavigate()
const id = params.id; 
const matches = props.matches; 
const myMatch = matches.find((p) => p.id === Number(id)); 


  //set state
//   const [updateForm, setUpdateForm] = useState('');
//   const [showupdateForm, setShowUpdateForm] = useState(false);

//   const handleChange = (event) => {
//       setUpdateForm({ ...updateForm, [event.target.name]: event.target.value });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault() //ensures that the form data is handled within the function without trigerring a pag
//     const payload = {  //We need to create a new object and assign the values from updateForm to these properties 
//       location: updateForm.location, 
//       description: updateForm.description,
//       date: updateForm.date,
//       players: updateForm.players, 
//       price: updateForm.price, 
//     }
//     props.addMatch(payload, myMatch.id); //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
//   }

//   const editMatch = (event) => {
//     event.preventDefault()
//     setShowUpdateForm(true)
//   }

////////////////////////////////////////////////////////////////////////////////

////////MY MATCHES
  //set state
//   const [addForm, setAddForm] = useState('');
//   const [showAddForm, setShowAddForm] = useState(false);

//   const addM = (event) => {
//       setAddForm({ ...addForm, [event.target.name]: event.target.value });
//   }

//   const handleAdd = (event) => {
//     event.preventDefault() //ensures that the form data is handled within the function without trigerring a pag
//     const {image, host_name, location, description, date, players, skill_level, price} = addForm
//     const payload = {  //We need to create a new object and assign the values from updateForm to these properties 
//       image: "image",
//       host_name: "host_name",
//       location: "location", 
//       description: "description",
//       date: "date",
//       players: "players", 
//       skill_level: "skill_level",
//       price: "price", 
//     }
//     props.addMatch(payload, match.id) //invoke updateMatch passed as a prop, and passes the payload object and the 'id' as arguments. 
//     navigate('/tenni5open/mymatches')
//   }

//   const showAdd = (event) => {
//     event.preventDefault()
//     setShowAddForm(true)
//   }



// /////////////////////////////////////////////////////////////////////
//   const handleClose = (event) => {
//     event.preventDefault()
//     setShowUpdateForm(false);
//   }

//   const removeMatch = (event) => {
//     event.preventDefault()
//     props.deleteMatch(myMatch.id);
//     navigate("/tenni5open/mymatches")
//   }
 
return ( 

<div className="match"> 
  <h1>Location: {myMatch.location}</h1> 
  <img src={myMatch.image} /> 
  <h2>Description: {myMatch.description}</h2> 
  <h2>Host: {myMatch.host_name.username}</h2> 
  <h2>Date: {myMatch.date}</h2> 
  <h2>Players:{myMatch.players}</h2> 
  <h2>Skill level:{myMatch.skill_level}</h2> 
  <h2>Price: {myMatch.price}</h2> 
  {/* Not longer interested: <button id="delete" onClick={removeMatch}>Remove</button> */}


  {/* <button id="update" onClick={editMatch}>UPDATE</button> */}
    {/* {showupdateForm && <UpdateForm matches={match} updateMatch={props.updateMatch} />} */}
    {/* {showupdateForm && 
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
  } */}

</div>
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
