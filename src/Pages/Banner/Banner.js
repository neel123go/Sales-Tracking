import React from 'react';
import BannerImg from '../../assets/Banner.png';

const Banner = () => {
    return (
        <div className="hero flex justify-center h-full md:py-32 py-5 mt-5 bg-primary">
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img src={BannerImg} className="w-full mx-auto" />
                </div>
                <div className='md:ml-16'>
                    <h1 className="text-5xl text-secondary font-bold pt-5 md:pt-2">Welcome! To <span className='text-base-100'>Sales Tracking</span> Warehouse</h1>
                    <p className="py-6 text-neutral">This is a warehouse management website</p>
                    <button class="btn btn-outline btn-secondary">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;