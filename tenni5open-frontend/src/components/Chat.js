import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';


function Chat() {

    //set state 
    const [ text, setText ] = useState([]);

    const URL = 'http://localhost:8000/chat/'

    //fetch data from backend 
    const getText = async (conversationId) => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (`http://localhost:8000/chat/newmessage/${conversationId}`, {
              credentials: 'include',
            } )
            const data = await response.json(); //sends as JSON 
            //sets the value of data to setMatch (saving the data in state)
            setText(data.data);
            console.log(data.data)
        }
        catch (error) {
            console.log('Error:', error);
        }
    };

    //Create new convo 
    const createConvo = async (name) => {
        try{
            //make an HTTP POST request to our backend
            const response = await fetch ("http://localhost:8000/chat/newmessage", {
                method: "POST", 
                headers: {
                    'Content-Type': "application/json" //indicates that the request body is in JSON
                },
                //specifies the credentials to include when making the request. We want to include user credentials "cookies" in the request . The server will then verify the credentials, provide access to this route and process this request. 
                credentials: 'include',
                body: JSON.stringify(name)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
                const conversationId = responseData.data.id;
                const conversationName = responseData.data.name;
                console.log(conversationName)
                console.log("Your chat reference number" + conversationId)
                //conversation id is stored in the conversationId using state
                setConversationId(conversationId)
               //update previous messages
                getText(conversationId)
            }
           
        }
        catch (error) {
            console.log('Error:', error);
        }
      }


    //Send New Message
    const sendText = async (text) => {
        try{
            //make an HTTP POST request to our backend
            await fetch (URL, {
                method: "POST", 
                headers: {
                    'Content-Type': "application/json" //indicates that the request body is in JSON
                },
                //specifies the credentials to include when making the request. We want to include user credentials "cookies" in the request . The server will then verify the credentials, provide access to this route and process this request. 
                credentials: 'include',
                body: JSON.stringify(text)
            });
            //update list of available matches after match is created
           // getText(text.conversationId)
            getText(conversationId)
        }
        catch (error) {
            console.log('Error:', error);
        }
      }



///////////////////////////////////////////////////////////////////////////////

const [conversationId, setConversationId] = useState('');

// const [messages, setNewMessages] = useState([])
const [ NewFormChat, setNewFormChat] = useState({
    name: "",
});

const [ newText, setNewText] = useState({
    message: "",
    conversation: conversationId,
});


const handleSubmitText = (event) => {
    event.preventDefault();
    sendText(newText);
    // //receives the previousChats array and preserves the exisiting chats
    // setChatHistory( prevChats => [...prevChats, chatHistory ]); //newChat is then added at the end of the array

    setNewText({
        message: "",
        conversation: "",
    });
}


const handleChange = (event) => {
    setNewFormChat({ ...NewFormChat, [event.target.name]: event.target.value });
};

const handleChangeText = (event) => {
    setNewText({ ...newText, [event.target.name]: event.target.value });
};


const handleOnClick = () => {
    setConversationId(conversationId)
}

const handleChangeConvo = (event) => {
    setConversationId(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    createConvo(NewFormChat);
    setNewFormChat({
        name: ""
    });
}




//useEffect
    useEffect(() => {
        if (conversationId){
            getText(conversationId)
        }
    }, [conversationId]);
      


return (
    <>
<div className='grid-mssg'>
 
    <h1 className="new-chat">New CHAT</h1>

            {!conversationId && (
            <div>
           <input className='mssg-new-input' type="text" value={NewFormChat.name} name="name" placeholder="Subject" onChange={handleChange} />
           <button className="new-mssg-bttn" onClick={handleSubmit}> Create Chat </button>
            </div>
           )}

           {/* {conversationId && (
            <div>
                <h2>Keep this number for your records: </h2>
                {conversationId}
            </div>
           )} */}


<div className='grid-newmssg'>
        <h1 className="mssg-title">REPLY / Message</h1>
        <input className='ref' type="text" value={newText.conversation} name="conversation" placeholder="Send to: Enter Reference Number" onChange={handleChangeText} />
        <input className='mssg' type="text" value={newText.message} name="message" placeholder="type your message" onChange={handleChangeText} />
        <button className="user-send-bttn" onClick={handleSubmitText}> 
        <img src="https://static.thenounproject.com/png/1015120-200.png"  id="icon1"></img>
        </button>
                
    </div>
    
<div className='grid-mssg-input'>
        <h1 className="mssg-title1">View All Messages:</h1><br/>
        <input className='host-user-input' type="text" value={conversationId}  placeholder="Reference Number" onChange={handleChangeConvo}/>
        <button className="user-mssg-bttn" onClick={handleOnClick}> SEARCH</button>
   

        {conversationId && ( 
            <>
            <div className='grid-mssg-input'>
            {text.map((text) => (
             <div key={text.id}>
              <h5 className="mssg-info">    
              {text.user.username},
              {text.user.email} <br/></h5> 
              <h5 className="mssg-sent">   
              {text.message}</h5> 
                </div>

                
        ))}
            </div>
            </>
            
         )}

</div>


    {/* <h1>New CHAT</h1>
           <input type="text" value={NewFormChat.name} name="name" placeholder="New Chat" onChange={handleChange} />
           <button onClick={handleSubmit}> + New Chat </button> */}
    <div>
      

    </div>
        


</div>
</>
)
};

export default Chat;
