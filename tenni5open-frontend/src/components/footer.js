import React from 'react'
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <>
   <div className='footer-menu'>
            <Link to='/'>
                <h2 className='foot-title'>HOME</h2>
            </Link>
            <Link to='/about'>
                <h2 className='foot-title'>ABOUT</h2>
            </Link>

            <Link to='/user/register'>
                <h2 className='foot-title'>REGISTER</h2>
            </Link>
            <a href={process.env.REACT_APP_EMAIL_LINK} target='blank' >
            <h2 className='foot-title'>CONTACT </h2></a>
   </div>
    </>
  )
}

export default Footer;
