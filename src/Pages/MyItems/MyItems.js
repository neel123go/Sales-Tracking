import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import UnderlineImg from '../../assets/underline.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `https://stormy-tundra-05889.herokuapp.com/myItems?email=${user.email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => setItems(data))
    }, [user]);

    // Function for delete item
    const handleItemDelete = (itemId) => {
        const deleteStatus = window.confirm('Are you sure to delete this item?');
        if (deleteStatus) {
            const url = `https://stormy-tundra-05889.herokuapp.com/items/${itemId}`;
            fetch(url, {
                method: 'DELETE',
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
        <div className='md:px-20 sm:px-12 px-5 mb-20' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-16 cus-font'>My Items</h1>
                <img className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>

            {
                items?.length > 0 ? <div className="border border-secondary rounded-xl mt-12 w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th className='md:block hidden'>Sold</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items ? items?.map(item => <tr key={item?._id}>
                                    <td>
                                        <div className="flex items-center sm:space-x-5 space-x-0">
                                            <div className="avatar">
                                                <div className="mask mask-squircle md:w-12 md:h-12 w-10 h-10">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold sm:table-cell hidden">{item?.name}</div>
                                                <div className="text-sm opacity-50 sm:inline-block hidden">ID: {item?._id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${item?.price}</td>
                                    <td>{item?.stock}</td>
                                    <td className='md:table-cell hidden'>{item?.sold}</td>
                                    <th>
                                        <button onClick={() => handleItemDelete(item?._id)} className="btn btn-error btn-sm lg:table-cell hidden">Delete</button>
                                        <svg onClick={() => handleItemDelete(item?._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:hidden table-cell p-0 m-0 w-6 h-6 text-error">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </th>
                                </tr>) : 'No Data Found'
                            }
                        </tbody>
                    </table>
                </div> : <p className='text-center text-error text-3xl mt-10 font-bold h-[60vh]'>Sorry, You don't have any item.</p>
            }
        </div>
    )
}

export default MyItems;