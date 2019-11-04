import React from 'react'
import './Header.css';
import clock from '../Header/clock.png'


const Header = () =>{
    return(
        <div className="header">
             <img className="logo" src={clock} alt="logo" />
             <h1>React Clock</h1>
        </div>
        
    )
}

export default Header





