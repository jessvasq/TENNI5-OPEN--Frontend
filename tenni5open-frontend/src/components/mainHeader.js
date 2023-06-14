import React from 'react'
import { Link } from 'react-router-dom';
import Header from './header';


function MainHeader() {
  return (
    
    <nav class='header'>
        <Header />
        <img src= 'https://teamwitsken.com/wp-content/uploads/Tennis-Ball-Free-Download-PNG.png' className='ball-img1'></img>
       
          
        <div className='home-title'>
        <Link to='/tenni5open/home'>
            <h1 className='main-header-title'>TENNI5 OPEN</h1>
        </Link>
        </div>
        <div className='user-container'>
          <div className='user-login'>
        <Link to='/user/login'>
          {/* <img src='https://static.thenounproject.com/png/2035169-200.png'className='user-icon'/> */}
            <h1 className='user-reg'>LOGIN</h1>
        </Link>
        </div>

        <Link to='/user/logout'>
          {/* <img src='https://static.thenounproject.com/png/205237-200.png' className='user-icon'/> */}
            <h1 className='user-reg'>LOGOUT</h1>
        </Link>
        </div>
    
    </nav>
  )
}

export default MainHeader;
