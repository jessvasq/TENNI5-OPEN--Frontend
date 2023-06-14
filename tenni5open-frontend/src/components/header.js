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
   
    <div class='menu'>
        <button id="show-nav" onClick={showNav}>MENU</button>
            {showNavBar &&
                <>
            <div className='option'>
            <Link to='/tenni5open/home'>
                <h2 className='nav-title'>HOME</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/tenni5open/matches'>
                <h2 className='nav-title'>MATCHES</h2>
            </Link>
            </div>

            <div className='option'>
            <Link to='/user/register'>
                <h2 className='nav-title'>REGISTER</h2>
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
            <button onClick={handleClose}> Close X</button>
            </>
       }
    </div>
  );
}

export default Header;
