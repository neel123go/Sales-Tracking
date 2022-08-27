import React from 'react';
import UnderlineImg from '../../assets/underline.png';
import StaffImg from '../../assets/staffImg.png';
import './CustomerBenefits.css';

const CustomerBenefits = () => {
    return (
        <div className='px-20 pb-10'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className='text-4xl text-primary font-bold pt-20 cus-font'>Customer Benefits</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl w-100 m-10" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <div className="card-body w-1/2 grid grid-cols-2">
                    <div className="card w-auto">
                        <div className="card-body">
                            <div className='p-2 bg-secondary w-10 icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            <h2 className="card-title text-lg mt-5 mb-1">PROFESSIONAL STAFF</h2>
                            <p>Our every staff have almost 5 years of experience working in an Inventory Management company.</p>
                        </div>
                    </div>

                    <div className="card w-auto">
                        <div className="card-body">
                            <div className='p-2 bg-secondary w-10 icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>

                            <h2 className="card-title text-lg mt-5 mb-1">DISTRIBUTION & DELIVERY</h2>
                            <p>We deliver our products within 3 days anywhere in the world.</p>
                        </div>
                    </div>


                    <div className="card w-auto">
                        <div className="card-body">
                            <div className='p-2 bg-secondary w-10 icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>

                            </div>

                            <h2 className="card-title text-lg mt-5 mb-1">EFFECTIVE USE</h2>
                            <p>You can start your own business by deal with us.</p>
                        </div>
                    </div>


                    <div className="card w-auto">
                        <div className="card-body">
                            <div className='p-2 bg-secondary w-10 icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                            </div>
                            <h2 className="card-title text-lg mt-5 mb-1">CONTINUOS FOCUS</h2>
                            <p>We focus to distribute our product around the world</p>
                        </div>
                    </div>
                </div>
                <figure className='w-1/2'>
                    <img className='w-full h-full' src={StaffImg} alt="Album" />
                </figure>
            </div>
        </div>
    )
}

export default CustomerBenefits;