import React from 'react'
import { useState, useEffect } from 'react'

function NewMessage(props) {

    const [ newText, setNewText] = useState({
    conversation: "",
    user: "",
    message: "",
});

const handleSubmit = (event) => {
    event.preventDefault();
    props.sendText(newText);
    setNewText({
        conversation: "",
        user: "",
        message: "",
    });
}

const handleChange = (event) => {
    setNewText({ ...newText, [event.target.name]: event.target.value });
};


  return (
    <div>
    <h1>Send Text</h1>
       <input type="text" value={newText.message} name="message" placeholder="type your message" onChange={handleChange} />
       <button onClick={handleSubmit}> SEND </button>
    </div>
  )
}

export default NewMessage;
