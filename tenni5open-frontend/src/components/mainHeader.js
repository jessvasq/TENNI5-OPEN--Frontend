import React from 'react'
import { Link } from 'react-router-dom';
import Header from './header';
import Logout from './user/Logout';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function MainHeader() {
  return (
    <nav class='header'>
        <Header />
        <img src= '/imgs/tennis_07.png' className='ball-img1'></img> 

        <div className='home-title'>
        <Link to='/'>
            <h1 className='main-header-title'>TENNI5 OPEN</h1>
        </Link>
        </div>

        <div className='user-container'>
          <Link to='/user/login'>
          <h1 className='user-reg'>
              <LoginIcon /> <br/>
              SIGN IN</h1>
          </Link>
        {/* </div> */}
          <Link to='/user/logout'>
            <h1 className='user-reg'>
              <LogoutIcon/><br/>
              LOGOUT</h1>
          </Link>
        </div>
    
    </nav>
  )
}

export default MainHeader;
