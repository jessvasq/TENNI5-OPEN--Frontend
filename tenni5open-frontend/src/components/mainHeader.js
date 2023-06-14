import React from 'react'
import { Link } from 'react-router-dom';


function MainHeader() {
  return (
    
    <nav class='header'>
      
        <img src= 'https://teamwitsken.com/wp-content/uploads/Tennis-Ball-Free-Download-PNG.png' className='ball-img1'></img>
       
          
        <div className='home-title'>
        <Link to='/tenni5open/home'>
            <h1 className='main-header-title'>TENNI5 OPEN</h1>
        </Link>
        </div>
        <div className='user-container'>
        <Link to='/user/login'>
            <h1 className='user-reg'>Login</h1>
        </Link>
        <Link to='/user/logout'>
            <h1 className='user-reg'>Logout</h1>
        </Link>
        </div>
    
    </nav>
  )
}

export default MainHeader;
