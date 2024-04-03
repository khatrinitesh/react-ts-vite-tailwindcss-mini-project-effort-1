import React from 'react';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <header className='bg-black'>
      <ul className='flex'>
        <li>
            <NavLink to="/" activeClassName="active" className="text-white p-[10px] block">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about"  activeClassName="active" className="text-white p-[10px] block">About</NavLink>
        </li>
        <li>
            <NavLink to="/service"  activeClassName="active" className="text-white p-[10px] block">Service</NavLink>
        </li>
        <li>
            <NavLink to="/contact"  activeClassName="active" className="text-white p-[10px] block">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
