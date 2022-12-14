import React from 'react';
import { Link } from 'react-router-dom';
import UnderlineImg from '../../assets/underline.png';

const CustomerReview = () => {
    return (
        <div className='bg-primary md:px-20 sm:px-12 px-5 md:pb-10 pb-0' id='customerReview'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold md:pt-20 pt-10 cus-font'>What People Say</h1>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold pt-3 cus-font'>About Us</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='xl:w-1/6 md:w-2/6 sm:w-3/6 w-2/3 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <div className="bg-base-100 shadow-xl rounded-md">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://files.thefacecdn.com/images/_1200x630_crop_center-center_82_none/Ruel034_F2.jpg?mtime=1572895173" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Ruel B.</h2>
                                <p>American Singer</p>
                            </div>
                        </div>
                        <p className='my-5'>This is a best inventory management company I see ever. Product is too good in quality & very fast delivery. Over all this is best...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://www.nme.com/wp-content/uploads/2021/12/olivia-rodrigo-2021-696x442.jpg" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Olivia Rodrigo</h2>
                                <p>American Singer</p>
                            </div>
                        </div>
                        <p className='my-5'>Tried a few different brands and my 5 month old unfortunately wasn???t to pleased. One particular evening nothing would settle him, so...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://qph.cf2.quoracdn.net/main-qimg-00cad65b33f4e7c6f24d2c42ebf7b40d-lq" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Dino Jeams</h2>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <p className='my-5'>Hi friends,
                            I???m Microsoft Laptop user from past 4-5 years. It???s nice Laptop and I like the touch screen with very good resolution. It???s slim and light...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://images.indianexpress.com/2015/06/music-thumb1.jpg" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Arnob Dey</h2>
                                <p>Researcher</p>
                            </div>
                        </div>
                        <p className='my-5'>I was having an issue with the camera in my iPhone X and decided to have it looked at through the Apple store. One of the things I love about...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH16-jNeMT3vQ/profile-displayphoto-shrink_200_200/0/1654511687100?e=2147483647&v=beta&t=wsVmO1A-NkbdawuhkUBCVgiiqOkurFPoesQPCjDQVJM" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Neel Paul</h2>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <p className='my-5'>Bought this phone 3 months ago and I absolutely love it. Upgraded from iPhone 6s which was awesome too (had it for over 5 years and it...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/301793288_10217208690568575_5656699412204268463_n.jpg?stp=dst-jpg_p600x600&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGN9hTIwNpCcQn45nDbrR46LBCZf3agYdIsEJl_dqBh0uwWKZc0dAhSxykyk-VZ_AXg2rEZ-ilwfcMmjkA48CfU&_nc_ohc=BmU80ZVlB1sAX8VkZsI&_nc_ht=scontent.fdac5-2.fna&oh=00_AT869BNlpFu7wKxTgwP9-7WLG4oqIXsfqemEhcp42OZd5w&oe=6313DE75" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Sawapon Paul</h2>
                                <p>Business Man</p>
                            </div>
                        </div>
                        <p className='my-5'>I have 3 issues with the Oneplus Bullet V2 earbuds. Firstly they have a constant flashing white light while in use (very...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://pbs.twimg.com/media/FI80guMVkAMv04E.jpg" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>Lady Gaga</h2>
                                <p>Designer</p>
                            </div>
                        </div>
                        <p className='my-5'>Hardware including the screen, keyboard and touch pad is excellent. CPU is faster than any laptop I???ve ever used and the screen...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src="https://static.dw.com/image/52315108_6.jpg" alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='ml-3 mt-2'>
                                <h2 className='card-title'>billie eilish</h2>
                                <p>Auntoproner</p>
                            </div>
                        </div>
                        <p className='my-5'>This is great you should buy it you won't be disappointed, upgrading from a 2013 it's like night & day. Excellent laptop right in the af...</p>
                        <Link to='/' className='text-orange-700'>LinkedIn profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;