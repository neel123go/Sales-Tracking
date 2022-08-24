import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary md:px-20 px-2 h-auto">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-base-100">Sales Tracking</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-neutral ">
                <ul className="menu menu-horizontal p-0 text-lg">
                    <li><Link to='/'>Inventory Items</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='dropdown dropdown-end'>
                    <Link to='/login' className='text-xl text-base-100'>Login</Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" color='#fcccae' /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-neutral">
                        <li><Link to='/'>Services</Link></li>
                        <li><Link to='/'>Our Mission</Link></li>
                        <li><Link to='/'>Our Successful Student</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;