import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Header = () => {
    // Get Current User
    const [user] = useAuthState(auth);

    // Handle SignOut
    const handleLogout = () => {
        signOut(auth);
    }

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
                    {user ? <div className='dropdown dropdown-end'>
                        <label tabIndex="0" className="avatar">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                                <img src={(user.photoURL) || 'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-9 p-2 shadow bg-primary rounded-box w-52 text-neutral border-2 border-secondary">
                            <li className='ml-4 mt-2'>{user.displayName}</li>
                            <li className='ml-4 my-2 cursor-pointer' onClick={handleLogout}>Logout</li>
                        </ul>
                    </div> : <Link to='/login' className='flex gap-2 border border-primary rounded-lg px-5 py-2 bg-secondary'>
                        <p className='text-primary text-xl'>Login</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 580 340"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></Link>}
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