import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const SocialLoader = () => {
    return (
        <div className='py-10 flex justify-center items-center'>
            <InfinitySpin color="#DC8665" />
        </div>
    );
};

export default SocialLoader;