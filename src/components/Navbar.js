
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import'./navbar.css'

// import {Link} from 'react-router-dom';
function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

        const changeIcon =  ()=>{
            setClick(!click)
        }
      
        const closeMobileMenu=()=>{
            setClick(!click)
        }
        const showButton = ()=>{
            if(window.innerWidth<= 960){
                setButton(false);
            } else {
                setButton(true);
            }
        };
        window.addEventListener('resize', showButton);
       return (
        <div>
            <nav className="navbar">
            <div className="navbar-container">
            <div className='navbar-logo'>
                TRAVEL<i className="social-logo"/>
            </div>
            <div className="menu-icon" onClick={changeIcon}>
                <i className={click ? 'fa fa-times':  "fa fa-bars"}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign up
                </Link>
                </li>
            </ul>
            {button && 
            <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>

            </nav>

        </div>
     
     
    );
}

export default Navbar;
