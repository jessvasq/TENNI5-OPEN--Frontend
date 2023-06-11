import React from 'react'
import { useState } from 'react';

function NewChats(props) {

    const [ NewFormChat, setNewFormChat] = useState({
        name: "",
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createConvo(NewFormChat);
        setNewFormChat({
            name: ""
        });
    }
    
    const handleChange = (event) => {
        setNewFormChat({ ...NewFormChat, [event.target.name]: event.target.value });
    };
    
//////////////////////SEND NEW TEXT ///////////////////////////
    const [ newText, setNewText] = useState({
        message: "",
        conversation: "",
    });

////////////////////// SEARCH   ///////////////////////////


// const [searchConvo, setSearchConvo] = useState('');

// const handleSearch = (event) => {
//     setSearchConvo(event.target.value)
//   }

// //Array method that checks 'props.matches' to check if the user's searchQuery matches an existing dog name 
//                       //matches is being passes as a prop 
// const filteredConvo = props.texts.filter((text) => { //filter() iterates over each element in the array and creates a new array 'filteredConvo' with the objects that match the query
//   const userInput = searchConvo
//   return text.id.includes(userInput); //check if user's input exist. Returns true if there's a match
// });


//   const loaded = () => {
//     //check if there are no matches
//     if (filteredConvo.lenght === 0) {
//       return <h1>No convo found in this location</h1>;
//     }

//     return filteredConvo.map((text) => (
//       <div key={text.id} >
//           <h1>{text.message}</h1>
//       </div>
//     ));
//   };
  

//   const loading = () => {
//     return <h1>Loading data...</h1>
//   }

//   const handleSubmitSearch = (event) => {
//     event.preventDefault();
//     setSearchConvo(searchConvo)
//     // props.getText(searchConvo);
//     // //receives the previousChats array and preserves the exisiting chats
//     // setChatHistory( prevChats => [...prevChats, chatHistory ]); //newChat is then added at the end of the array
    
// }




////////////////////////////////////////////////////////////////////////


//////////////////////DISPLAY ALL TEXTS ///////////////////////////

    const [ chatHistory, setChatHistory ] = useState([]);

    const handleSubmitText = (event) => {
        event.preventDefault();
        props.sendText(newText);
        // //receives the previousChats array and preserves the exisiting chats
        // setChatHistory( prevChats => [...prevChats, chatHistory ]); //newChat is then added at the end of the array
  
        setNewText({
            message: "",
            conversation: "",
        });
    }

    const handleChangeText = (event) => {
        setNewText({ ...newText, [event.target.name]: event.target.value });
    };



    //   const loaded = () => {
    //     <h1>Chat History</h1>
    //     return(
    //     props.texts.map(text => (
    //         <div key={text.id}>
    //             {text.message}
    //             </div>
    //          ))
    //     )
    //   };
    
///////////////////////////////////////////////////////////////////////////
      return (
        <div>
        <h1>New CHAT</h1>
           <input type="text" value={NewFormChat.name} name="name" placeholder="New Chat" onChange={handleChange} />
           <button onClick={handleSubmit}> + New Chat </button>

           {/* NEW TEXT */}
           {NewFormChat && (
            <div>
                <h1>Send Text</h1>
                <input type="text" value={newText.message} name="message" placeholder="type your message" onChange={handleChangeText} />
                <input type="text" value={newText.conversation} name="conversation" placeholder="conversation id" onChange={handleChangeText} />
                <button onClick={handleSubmitText}> SEND </button>
            </div>
           )}
            {/* <div>
            Search: <input type="text" value={searchConvo}  placeholder="conversation id" onChange={handleSearch}/>
            <button onClick={handleSubmitSearch}> SEARCH </button>


            <h1>Chat History</h1>
            {props.texts ? loaded() : loading()} */}
            {props.texts.map(text => (
                <div key={text.id}>
                    {text.message}
                    </div>
                 ))}
            </div>
       
      )
}

export default NewChats;
