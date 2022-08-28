import React from 'react';
import NotFoundImg from '../../assets/NotFound.png';

const NotFound = () => {
    return (
        <div className='w-full py-10'>
            <img className='w-2/3 mx-auto' src={NotFoundImg} alt="" />
        </div>
    )
}

export default NotFound;