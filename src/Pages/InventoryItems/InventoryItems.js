import React from 'react';
import './InventoryItems.css';
import UnderlineImg from '../../assets/underline.png';

const InventoryItems = () => {
    return (
        <div className='px-20 py-10'>
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-20 cus-font'>Our Inventory Items</h1>
                <img className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='mt-16 mb-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-5'>

                <div className="bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/dGhDvXb/ORH91S0.jpg' className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            HP Chromebook
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{`The HP Chromebook is 17.3" with Full HD 1080p resolution. It can handle your high-end video playback, but it also includes an NVIDA Quadro K4100M with 4GB of dedicated GDDR5 RAM. 2.7GHz Intel® Core™ i7 processor with 32GB of 1600 MHz DDRL3 RAM. For storage, a standard 750GB 7200 rpm spindle drive is complemented by a super-fast 512GB solid-state drive.`.slice(0, 100) + ' ...'}</p>
                        <div className="card-actions mt-2">
                            <div className="text-xl">Price: $890</div>
                            <div className="text-xl">Supplier: Ayoun Paul Neel</div>
                            <div className="text-xl">Stock: 890</div>
                        </div>
                        <div className='mt-2 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/pWm1QT9/rm391-pf-s73-08-mockup-1.jpg' className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            Acer Swift 1 (SF114-34)
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{`A decent budget laptop that runs into tough competition at the top-spec. The silver Acer Swift 1 (SF114-34), from Acer, sports a smaller 18.6" screen with a 6th-generation Haswell Intel Core i7 processor. Full HD resolution, the MSI uses an NVIDIA GeForce GTX 860M graphics controller with 4GB of dedicated RAM. It also upgrades the storage with a 1TB 7200 rpm hard drive.`.slice(0, 100) + ' ...'}</p>
                        <div className="card-actions mt-2">
                            <div className="text-xl">Price: $890</div>
                            <div className="text-xl">Supplier: Ayoun Paul Neel</div>
                            <div className="text-xl">Stock: 890</div>
                        </div>
                        <div className='mt-2 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>



                <div className="bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/QfgC4N3/6161352.jpg' className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            HP Envy 13
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{`A solid everyday laptop with a great screen, but several rivals are better in several key departments. It uses a 2.5GHz Crystalwell Intel Core i7 processor, along with 16GB of onboard 1600 MHz DDR3L RAM. It has loads of high-res artwork or photos. The 2880 x 1800 resolution LED-backlit IPS display is a game-breaker. It also includes a dedicated NVIDIA GeForce GT750M graphics controller with 2GB of dedicated RAM.`.slice(0, 100) + ' ...'}</p>
                        <div className="card-actions mt-2">
                            <div className="text-xl">Price: $890</div>
                            <div className="text-xl">Supplier: Ayoun Paul Neel</div>
                            <div className="text-xl">Stock: 890</div>
                        </div>
                        <div className='mt-2 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                    <figure><img src='https://i.ibb.co/sW4r5M6/5587114.jpg' className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            Samsung Galaxy Book
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{`Samsung Galaxy Book Pro offers the Republic of Gamers series, with the G750JH-DB71 17.3" Notebook Laptop. For starters, it’s a 17.3" Full HD 1920 x 1080 resolution screen, with an NVIDIA GeForce GTX 780M with 4GB of RAM doing the real graphics work. Under the hood is a 2.4GHz Intel Core i7-4700HQ 4th-generation Haswell processor and 24GB of 1600 MHz DDR3L RAM. For storage, there are three hard drives in this laptop: a 1TB 5400 rpm spindle drive, and two 128GB solid-state drives.`.slice(0, 100) + ' ...'}</p>
                        <div className="card-actions mt-2">
                            <div className="text-xl">Price: $890</div>
                            <div className="text-xl">Supplier: Ayoun Paul Neel</div>
                            <div className="text-xl">Stock: 890</div>
                        </div>
                        <div className='mt-2 cursor-pointer readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>View Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end cursor-pointer viewMore text-lg'>
                <p className='inline-block pr-1 font-bold'>View More Items</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7 mt-1 inline-block arrow">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default InventoryItems;