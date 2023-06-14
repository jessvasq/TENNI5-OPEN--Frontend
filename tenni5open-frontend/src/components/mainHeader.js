import React from 'react'
import { Link } from 'react-router-dom';


function MainHeader() {
  return (
    
    <nav class='header'>
      
        <img src= 'https://teamwitsken.com/wp-content/uploads/Tennis-Ball-Free-Download-PNG.png' className='ball-img1'></img>
       
          
        <div className='option1'>
        <Link to='/tenni5open/home'>
            <h1 className='home-title'>TENNI5 OPEN</h1>
        </Link>
        </div>
        <div className='option1'>
        <Link to='/user/login'>
            <h1 className='user-reg'>Login</h1>
        </Link>
        </div>
        <div className='option1'>
        <Link to='/user/logout'>
            <h1 className='user-reg'>Logout</h1>
        </Link>
        </div>
    
    </nav>
  )
}

export default MainHeader;
