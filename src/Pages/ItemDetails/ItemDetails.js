import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [message, setMessage] = useState('');
    const [sold, setSold] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
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

            const url = `http://localhost:5000/items/${id}`;
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

            const url = `http://localhost:5000/items/${id}`;
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
        <div className='px-40 my-20'>
            <div className='flex'>
                <figure className='w-1/2'><img src={item.image} alt="Movie" /></figure>
                <div className='px-10 w-1/2'>
                    <p>Item Id: {item._id}</p>
                    <h2 className='text-3xl mt-2 font-bold'>{item.name}</h2>
                    <p className='mt-7'>{item.description}</p>
                    <h2 className='text-3xl mt-6'>Price: ${item.price}</h2>
                    <h2 className='text-xl mt-3'>Supplier Name: {item.suplier}</h2>
                    <h2 className='text-2xl mt-2'>Stock: {item.stock}</h2>
                    <h2 className='text-2xl mt-2'>Sold: {item.sold}</h2>
                    {sold ? <p className='text-error mt-6 text-xl'>This product is sold out</p> : <button onClick={() => handleItemStock(item.stock)} className="bg-secondary px-8 py-1 rounded-md text-xl text-primary mt-6">Delivered</button>}
                    <p className='text-success text-xl mt-2 h-8'>{message}</p>
                    <div>
                        <h2 className='text-xl'>Restock Item</h2>
                        <form onSubmit={handleRestockItem}>
                            <input name="restock" type="number" placeholder="Enter Value" className="px-2 py-2 border-2 rounded-md border-secondary focus:outline-none text-slate-700 mt-2" />
                            <button type='submit' className="bg-secondary px-8 py-2 rounded-md text-lg text-primary ml-3">Restock</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex justify-end cursor-pointer viewMore text-lg mt-10'>
                <p className='inline-block pr-1 font-bold'>Manage Inventories</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7 mt-1 inline-block arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default ItemDetails;