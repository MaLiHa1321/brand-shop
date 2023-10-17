import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
     
    const navLinks = <>

<NavLink className="mr-3 underline text-lg" to="/">Home</NavLink>
<NavLink className="mr-3 underline text-lg" to="/addproduct">Add product</NavLink>
<NavLink className="mr-3 underline text-lg" to="/cart">My cart</NavLink>
<NavLink className="mr-3 underline text-lg" to="/login">Login</NavLink>
<NavLink className="mr-3 underline text-lg" to="/register">Register</NavLink>
    </>

   
    return (
        <div>
          <div className="navbar bg-blue-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <div className='flex flex-col md:flex-row items-center'>

    <img className='w-[50px] h-[50px] rounded-full' src="https://i.ibb.co/vhvkXfm/technology.jpg" alt="" />
    <a className=" normal-case text-xl font-bold">TechStore</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;