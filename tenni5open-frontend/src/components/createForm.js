import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CreateForm(props) {

    const [newForm, setNewForm] = useState({ 
        image: "",
        description: "",
        location: "",
        date: "",
        username: "",
        host_name: "",
        players: "",
        skill_level: "",
        price: "",  
    });

    //redirect to index once logged in 

    const redirectPage = () => {
        window.location.href = '/tenni5open/matches'
    }


    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createMatch(newForm);
        setNewForm({
            image: "",
            description: "",
            location: "",
            date: "",
            username: "",
            host_name: "",
            players: "",
            skill_level: "",
            price: "",  
        });
        redirectPage()
    };

    

  return (
   
    <div className='grid-host'>

    <div className='grid-host-input'>
    <h1 className="login-title">HOST NEW MATCH</h1>
    <form onSubmit={handleSubmit}>

        <div className='email-input'>
            <input className='host-user-input' type="text" value={newForm.image} name="image" placeholder="img URL" onChange={handleChange} />
        </div>
        <div className='email-input'>
            <input className='host-user-input'type="text" value={newForm.description} name="description" placeholder="description" onChange={handleChange} />
        </div>
        <div className='email-input'>
            <input className='host-user-input' type="text" value={newForm.location} name="location" placeholder="location" onChange={handleChange} />
       </div>
       <div className='email-input'>
            <input  className='host-user-input' type="text" value={newForm.date} name="date" placeholder="date" onChange={handleChange} />
       </div>
       <div className='email-input'>
             <input className='host-user-input' type="text" value={newForm.username} name="username" placeholder="username" onChange={handleChange} />
       </div>
       <div className='email-input'>
            <input  className='host-user-input'type="text" value={newForm.host_name} name="host_name" placeholder="Your name" onChange={handleChange} />
       </div>
       <div className='email-input'>
            <input className='host-user-input' type="text" value={newForm.players} name="players" placeholder="Number of players" onChange={handleChange} />
       </div>
       <div className='email-input'>
            <input className='host-user-input' type="text" value={newForm.skill_level} name="skill_level" placeholder="i.e.; beginner, pro," onChange={handleChange} />
       </div>
       <div className='email-input'>
            <input className='host-user-input' type="text" value={newForm.price} name="price" placeholder="Match's price" onChange={handleChange} />
       </div>
       {/* My Matches: <input type="checkbox" value={newForm.is_in_my_matches} name="is_in_my_matches" placeholder="Match's is_in_my_matches" onChange={handleChange} /> */}

       <input  className="user-pw-bttn"  type="submit" value="Create Match" />
    </form>
    </div>
    <div className='grid-host-img'>
    <h1 className='equip-title'></h1>
        </div>
    </div>

  )
};

export default CreateForm;
