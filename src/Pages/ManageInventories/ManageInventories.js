import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import UnderlineImg from '../../assets/underline.png';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // Function for delete item
    const handleItemDelete = (itemId) => {
        const deleteStatus = window.confirm('Are you sure to delete this item?');
        if (deleteStatus) {
            const url = `http://localhost:5000/items/${itemId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        const remainingItems = items.filter(item => item._id !== itemId);
                        setItems(remainingItems);
                        toast.success('Item deleted successfully', {
                            style: {
                                border: '1px solid #DC8665',
                                padding: '16px',
                                color: '#E8E5EB',
                                backgroundColor: '#292524'
                            },
                            iconTheme: {
                                primary: '#DC8665',
                                secondary: '#292524',
                            },
                        });
                    }
                })
        }
    }

    return (
        <div className='px-20' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-16 cus-font'>Manage Inventory Items</h1>
                <img className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className="border border-secondary rounded-xl w-full mt-12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Supplier Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Sold</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items ? items?.map(item => <tr key={item?._id}>
                                <td>
                                    <div className="flex items-center space-x-5">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.name}</div>
                                            <div className="text-sm opacity-50">ID: {item?._id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item?.suplier}</td>
                                <td>${item?.price}</td>
                                <td>{item?.stock}</td>
                                <td>{item?.sold}</td>
                                <th>
                                    <button onClick={() => handleItemDelete(item?._id)} className="btn btn-error btn-sm">Delete</button>
                                </th>
                            </tr>) : 'No Data Found'
                        }
                    </tbody>
                </table>
            </div>

            <Link to='/addItem' className='flex justify-end cursor-pointer viewMore text-lg mt-8 mb-16'>
                <p className='inline-block pr-1 font-bold'>Add New Items</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7 mt-1 inline-block arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Link>
        </div>
    )
}

export default ManageInventories;