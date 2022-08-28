import React from 'react';
import UnderlineImg from '../../assets/underline.png';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let errorMessage;

    const onSubmit = async (data) => {
        const name = data?.userName;
        const number = data?.number;
        const email = data?.email;
        const message = data?.message;
        const messageInfo = { name, number, email, message };

        fetch('http://localhost:5000/queries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Thank You, for contact with us..', {
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
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className='text-center mb-10'>
                <h1 className='text-4xl text-primary font-bold pt-16 cus-font'>Contact Us</h1>
                <img className='w-1/6 px-16  mx-auto' src={UnderlineImg} alt="" />
                <h1 className='text-center text-2xl mt-5'>We'd love to here from you</h1>
                <p className='mt-2 w-2/5 mx-auto'>Whether you have a question about features, trails, pricing, or anything else, our teat is ready to answer all your questions</p>
            </div>

            <div className="hero mb-20 bg-base-100">
                <div className="hero-content w-full">
                    <div className="card flex-shrink-0 md:w-2/4 w-100 max-w-2/3 shadow-2xl bg-base-100 border border-secondary">
                        <div className="card-body">
                            <h1 className='text-3xl text-center mb-8'>Get in touch with us</h1>
                            {errorMessage}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="User Name"
                                        {...register("userName", {
                                            required: {
                                                value: true,
                                                message: 'User name is required'
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'User name must be contain at least 3 characters'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="input input-bordered" />
                                    <label className="mt-1">
                                        {errors.userName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                                        {errors.userName?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="example@your.com"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email address is required'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Provide a valid email'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="input input-bordered" />
                                    <label className="mt-1">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="+8801732843###"
                                        {...register("number", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is required'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="input input-bordered" />
                                    <label className="mt-1">
                                        {errors.number?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.number.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea
                                        className="textarea input input-bordered h-28"
                                        type="text"
                                        placeholder="Type your message here...."
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: 'Your message is required'
                                            }
                                        })}
                                        autoComplete='off' />
                                    <label className="mt-1">
                                        {errors.message?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.message.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sent</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;