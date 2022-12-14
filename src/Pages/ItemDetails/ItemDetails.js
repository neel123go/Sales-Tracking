import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [message, setMessage] = useState('');
    const [sold, setSold] = useState(false);

    useEffect(() => {
        fetch(`https://stormy-tundra-05889.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item, id]);

    // function for update stock
    const handleItemStock = (stock) => {
        const newStock = stock - 1;
        if (newStock < 0) {
            // setMessage('');
            setMessage('This product is sold out');
            setSold(true);
        } else {
            // setMessage('')
            const updateItem = { newQuantity: newStock };

            const url = `https://stormy-tundra-05889.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount > 0) {
                        setMessage('Item delivered successfully');
                    }
                });
        }
    }

    // function for restock stock
    const handleRestockItem = (e) => {
        e.preventDefault();
        const restock = e.target.restock.value;

        if (restock === '') {
            setMessage('Field must not be empty');
        } else if (restock < 0) {
            setMessage('');
            setMessage('Please enter a valid number');
        } else {
            setMessage('');
            setSold(false);
            const stock = item.stock;
            const newStock = parseInt(restock) + parseInt(stock);
            const updateItem = { newQuantity: newStock };

            const url = `https://stormy-tundra-05889.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.modifiedCount > 0) {
                        e.target.reset();
                        setMessage('Restock item successfully');
                    }
                });
        }
    }

    return (
        <div className='lg:px-40 md:px-32 sm:px-12 px-5 md:my-20 my-5'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <figure className='w-full'><img src={item?.image} alt="Movie" /></figure>
                <div className='lg:px-10 px-0 w-full lg:mt-0 mt-5'>
                    <p>Item Id: {item?._id}</p>
                    <h2 className='text-3xl mt-2 font-bold'>{item?.name}</h2>
                    <p className='mt-7'>{item?.description}</p>
                    <h2 className='text-3xl mt-6'>Price: ${item?.price}</h2>
                    <h2 className='text-xl mt-3'>Supplier Name: {item?.suplier}</h2>
                    <h2 className='text-2xl mt-2'>Stock: {item?.stock}</h2>
                    <h2 className='text-2xl mt-2'>Sold: {item?.sold}</h2>
                    {sold ? <p className='text-error mt-6 text-xl'>This product is sold out</p> : <button onClick={() => handleItemStock(item?.stock)} className="bg-secondary px-8 py-1 rounded-md text-xl text-primary mt-6">Delivered</button>}
                    <p className='text-success text-xl mt-2 h-8'>{message}</p>
                    <div>
                        <h2 className='text-xl'>Restock Item</h2>
                        <form onSubmit={handleRestockItem} className="grid grid-cols-1 md:grid-cols-2">
                            <input name="restock" type="number" placeholder="Enter Value" className="px-2 py-3 border-2 rounded-md border-secondary focus:outline-none text-slate-700 mt-2" />
                            <button type='submit' className="bg-secondary xl:w-2/3 w-full rounded-md text-m text-primary md:ml-3 ml-0 lg:my-[1px] my-0 py-3 mt-2">Restock</button>
                        </form>
                    </div>
                </div>
            </div>

            <Link to='/manageInventories' className='flex justify-end cursor-pointer viewMore text-lg mt-10 lg:mb-0 mb-10'>
                <p className='inline-block pr-1 font-bold'>Manage Inventories</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7 mt-1 inline-block arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Link>
        </div>
    )
}

export default ItemDetails;