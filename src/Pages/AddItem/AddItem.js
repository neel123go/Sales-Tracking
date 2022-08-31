import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import toast from 'react-hot-toast';

const AddItem = () => {
    let errorMessage;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async (data) => {
        const name = data?.itemName;
        const image = data?.image;
        const price = data?.price;
        const stock = data?.stock;
        const sold = data?.sold;
        const suplier = data?.suplierName;
        const description = data?.description;
        const itemInfo = { name, image, description, price, stock, sold, suplier, email: user?.email };

        fetch('https://stormy-tundra-05889.herokuapp.com/addItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Item added successfully', {
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
                    reset();
                }
            })
    };

    return (
        <div className="hero min-h-screen md:py-20 py-6 bg-base-100" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 md:w-2/3 sm:w-3/4 w-full shadow-2xl bg-base-100 border border-secondary">
                    <div className="card-body">
                        <h1 className='text-3xl text-center mb-5'>Add Item</h1>
                        {errorMessage}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid md:grid-cols-2 grid-cols-1">
                                <div className='w-full mr-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Apple Macbook Pro"
                                            {...register("itemName", {
                                                required: {
                                                    value: true,
                                                    message: 'Item name is required'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Item name must be contain at least 3 characters'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.itemName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.itemName.message}</span>}
                                            {errors.itemName?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.itemName.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="https://i.ibb.co/XCkXHLZ/ORH91S0.jpg"
                                            {...register("image", {
                                                required: {
                                                    value: true,
                                                    message: 'Image is required'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.image?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.image.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>

                                        <input
                                            type="number"
                                            placeholder="43534"
                                            {...register("price", {
                                                required: {
                                                    value: true,
                                                    message: 'Price is required'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.price?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.price.message}</span>}
                                        </label>
                                    </div>
                                </div>


                                <div className='w-full md:ml-5 ml-0'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Item Stock</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="8000"
                                            {...register("stock", {
                                                required: {
                                                    value: true,
                                                    message: 'Item Stock is required'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.stock?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.stock.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Item Sold</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="23423"
                                            {...register("sold", {
                                                required: {
                                                    value: true,
                                                    message: 'Item sold is required'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.sold?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.sold.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Supplier Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ayoun Paul"
                                            {...register("suplierName", {
                                                required: {
                                                    value: true,
                                                    message: 'Supplier name is required'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Supplier name must be contain at least 3 characters'
                                                }
                                            })}
                                            autoComplete='off'
                                            className="input input-bordered" />
                                        <label className="mt-1">
                                            {errors.suplierName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.suplierName.message}</span>}
                                            {errors.suplierName?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.suplierName.message}</span>}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    className="textarea input input-bordered h-28"
                                    type="text"
                                    placeholder="Item description type here...."
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Item description is required'
                                        }
                                    })}
                                    autoComplete='off' />
                                <label className="mt-1">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.description.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;