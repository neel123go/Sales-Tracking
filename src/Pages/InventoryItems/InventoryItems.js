import React, { useEffect, useState } from 'react';
import './InventoryItems.css';
import UnderlineImg from '../../assets/underline.png';
import InventoryItem from '../../Components/InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, []);

    return (
        <div className='px-20 pb-10' id='inventoryItems'>
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-20 cus-font' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000">Our Inventory Items</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000" className='mt-16 mb-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-5'>
                {
                    inventoryItems ? inventoryItems?.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>) : ''
                }
            </div>

            <div className='flex justify-end cursor-pointer viewMore text-lg'>
                <p className='inline-block pr-1 font-bold'>Manage Inventories</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7 mt-1 inline-block arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default InventoryItems;