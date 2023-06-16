import React, {useState} from 'react'
import { Link } from 'react-router-dom';


function Header() {


const [showNavBar, setShowNavBar] = useState(false);

const showNav = (event) => {
    event.preventDefault()
    setShowNavBar(true)
  }

const handleClose = (event) => {
    event.preventDefault()
    setShowNavBar(false);
}



  return (
   
    <div className='menu'>
        <button id="show-nav" onClick={showNav}>
        <img src='https://static.thenounproject.com/png/1166836-200.png' className='hamburger-menu'/>
        </button>
            <div className='menu-links'>
            {showNavBar &&
                <>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            <div className='option'>
            <Link to='/tenni5open/home'>
                <h2 className='nav-title'>HOME</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/user/register'>
                <h2 className='nav-title'>REGISTER</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/tenni5open/matches'>
                <h2 className='nav-title'>UPCOMING MATCHES</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/tenni5open/create'>
                <h2 className='nav-title'>HOST A MATCH</h2>
            </Link>
            </div>

            <div className='option'>
            {/* /////MY MATCHES// */}
            <Link to='/tenni5open/mymatches'>
                <h2 className='nav-title'>MY MATCHES</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/highlights'>
                <h2 className='nav-title'>GRAND SLAMS HIGHLIGHTS</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/equipment'>
                <h2 className='nav-title'>EQUIPMENT</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/lessons'>
                <h2 className='nav-title'>HOW TO TENNIS</h2>
            </Link>
            </div>
            <button id="close-menu" onClick={handleClose}>X</button>
            </>
       }
        </div>
    </div>
  );
}

export default Header;
