import React from 'react';
import './InventoryItem.css';
import { Link } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    return (
        <div className="bg-base-100 shadow-xl">
            <figure><img src={item?.image} className="w-[100%]" alt="Shoes" /></figure>
            <div className="card-body p-8">
                <h2 className="card-title">
                    {item?.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item?.description.slice(0, 100) + ' ...'}</p>
                <div className="card-actions mt-2">
                    <div className="text-xl w-full">Price: ${item?.price}</div>
                    <div className="text-xl w-full">Supplier: {item?.suplier}</div>
                    <div className="text-xl">Stock: {item?.stock}</div>
                </div>
                <Link to={`/itemDetails/${item._id}`} className='mt-2 cursor-pointer readMore text-lg'>
                    <p className='inline-block pr-1 font-bold'>Manage Stock</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default InventoryItem;