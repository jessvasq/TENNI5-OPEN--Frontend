import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PopUp() {

     //POP-UP Notification
     const [showPopUp, setShowPopUp] = useState(false);
   
     
     //show message 
         const handleOpen = () => {
           setShowPopUp(true)
         }

         const handleClose = () => {
            setShowPopUp(true);
        };

  return (
    <>
    {handleOpen}
   
         {!showPopUp && (
    <div className='popupNotification'>
        <h1 className='title-notification'>Sign in or Register to view upcoming tennis tournaments & host new matches.</h1>
        <div className='notification-bttns'>
            <Link to='/user/register'>
                <h2 className='user-new'>NEW USER</h2>
            </Link>
            <Link to='/user/login'>
                <h1 className='user-signin'>SIGN IN</h1>
            </Link>
        </div>
        <button className='x-close' onClick={handleClose}>X</button>
    </div>
     )}
  </>
  )
}

export default PopUp;
