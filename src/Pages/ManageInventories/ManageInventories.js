import React from 'react';
import UnderlineImg from '../../assets/underline.png';

const ManageInventories = () => {
    return (
        <div className='px-20'>
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold pt-20 cus-font' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000">Manage Inventory Items</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='w-1/6  mx-auto' src={UnderlineImg} alt="" />
            </div>



            <div class="overflow-x-auto border border-secondary rounded-xl w-full my-16">
                <table class="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Supplier Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src='https://i.ibb.co/dGhDvXb/ORH91S0.jpg' alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">HP Chromebook</div>
                                        <div class="text-sm opacity-50">ID: 6308883cb63bc3a829689929</div>
                                    </div>
                                </div>
                            </td>
                            <td>Onivia Rodrigo</td>
                            <td>$806</td>
                            <td>8000</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>

                        {/* <!-- row 2 --> */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageInventories;