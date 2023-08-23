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
   </div>
    </>
  )
}

export default Footer;
