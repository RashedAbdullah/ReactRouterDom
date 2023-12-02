import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavlinkCss.css'

const Navlinks = () => {
  return (
    <div>
        <ul className='NavlinkUl'>
            <li><NavLink className={({isActive})=>isActive? "active" : "pending"} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active" : "pending"} to="/project">Projects</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active" : "pending"} to="/contact">Contact</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active" : "pending"} to="/blog">Blog</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active" : "pending"} to="/about">About</NavLink></li>
        </ul>
    </div>
  )
}

export default Navlinks