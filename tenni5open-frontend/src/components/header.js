import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav>
        <Link to='/tenni5open/create'>
            <h1>Create</h1>
        </Link>
        <Link to='/tenni5open'>
            <h1>HOME</h1>
        </Link>
        <Link to='/user/login'>
            <h1>Login</h1>
        </Link>
        <Link to='/user/logout'>
            <h1>LOGOUT</h1>
        </Link>
    </nav>
  )
}

export default Header;
