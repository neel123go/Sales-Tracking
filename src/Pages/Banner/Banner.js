import React from 'react';
import BannerImg from '../../assets/Banner.png';

const Banner = () => {
    return (
        <div className="lg:px-0 md:px-20 sm:px-12 px-2 hero flex justify-center h-full md:py-32 py-5 mt-2 bg-primary">
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img src={BannerImg}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="800" />
                </div>
                <div className='md:ml-16'>
                    <h1 className="text-5xl text-secondary font-bold pt-5 md:pt-2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="500"
                    >Welcome! To <span className='text-base-100'>Sales Tracking</span> Warehouse</h1>

                    <p className="py-10 text-neutral"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="800">At Sales Tracking Warehouse, we provide a unique solution for warehousing space for business and consumers. We deliver our product around the world without any cost.</p>

                    <button className="btn btn-outline btn-secondary"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1100">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;