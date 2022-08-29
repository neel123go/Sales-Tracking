import React from 'react';
import UnderlineImg from '../../assets/underline.png';
import Feature1 from '../../assets/road-freight-img.jpg';
import Feature2 from '../../assets/air-freight-img.jpg';
import Feature3 from '../../assets/ocean-freight-img.jpg';

const OurFeatures = () => {
    return (
        <div className='bg-primary md:px-20 sm:px-12 px-5' id="ourFeatures">
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold md:pt-20 pt-10 cus-font'>Our Features</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='w-40  mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='md:mt-16 mt-8 pb-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between lg:w-5/6 w-full gap-8 mx-auto' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Feature1} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title text-2xl">
                            ROADWAY FREIGHT
                        </h2>
                        <span className='w-40 h-1 bg-secondary block'></span>
                        <p className='mt-5'>We offer a comprehensive range of air air-freight forwarding services that has a good from all major airports. We have dedicated management team</p>
                        <div className='mt-5 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Feature2} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title text-2xl">
                            AIR FREIGHT
                        </h2>
                        <span className='w-40 h-1 bg-secondary block'></span>
                        <p className='mt-5'>We offer a comprehensive range of air air-freight forwarding services that has a good from all major airports. We have dedicated management team</p>
                        <div className='mt-5 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>



                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Feature3} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title text-2xl">
                            OCEAN FREIGHT
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <span className='w-40 h-1 bg-secondary block'></span>
                        <p className='mt-5'>We offer a comprehensive range of air air-freight forwarding services that has a good from all major airports. We have dedicated management team</p>
                        <div className='mt-5 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;