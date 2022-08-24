import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        // await useSignInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 md:w-2/3 w-full max-w-sm shadow-2xl bg-base-100 border border-secondary">
                    <div className="card-body">
                        <h1 className='text-3xl text-center mb-5'>Login Now</h1>
                        {errorMessage}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Email address"
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be contain at least 8 characters'
                                        }
                                    })}
                                    autoComplete='off'
                                    className="input input-bordered" />
                                <label className="mt-1">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center mt-3 text-lg'>Don't have any account? <Link to='/registration' className='text-secondary'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;