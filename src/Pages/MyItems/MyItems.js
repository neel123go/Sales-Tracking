import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import UnderlineImg from '../../assets/underline.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myItems?email=${user.email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user]);

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
        <div className='px-20 mb-20' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-16 cus-font'>My Items</h1>
                <img className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            {
                items?.length > 0 ? <div className="border border-secondary rounded-xl w-full my-12">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Item</th>
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
                                    <td>${item?.price}</td>
                                    <td>{item?.stock}</td>
                                    <td>{item?.sold}</td>
                                    <th>
                                        <button onClick={() => handleItemDelete(item?._id)} className="btn btn-error btn-sm">Delete</button>
                                    </th>
                                </tr>) : ''
                            }
                        </tbody>
                    </table>
                </div> : <p className='text-center text-error text-3xl mt-10 font-bold h-[60vh]'>Sorry, You don't have any item.</p>
            }
        </div>
    )
}

export default MyItems;