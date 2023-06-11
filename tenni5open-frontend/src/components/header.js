import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav>
        <Link to='/tenni5open/home'>
            <h1>HOME</h1>
        </Link>
        <Link to='/tenni5open/matches'>
            <h1>Matches</h1>
        </Link>
        <Link to='/user/login'>
            <h1>Login</h1>
        </Link>
        <Link to='/user/logout'>
            <h1>Logout</h1>
        </Link>
        <Link to='/user/register'>
            <h1>Register</h1>
        </Link>
        {/* /////MY MATCHES// */}
        <Link to='/tenni5open/mymatches'>
            <h1>My Matches</h1>
        </Link>
        <Link to='/tutorials'>
            <h1>Tutorials</h1>
        </Link>
        <Link to='/equipment'>
            <h1>Equipment</h1>
        </Link>
    </nav>
  )
}

export default Header;
