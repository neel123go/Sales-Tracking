import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    const [createUserWithEmailAndPassword, user, loading, hookError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data?.userName });
    };

    // Navigate user
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    // Handle error
    if (error || hookError || updateProfileError) {
        errorMessage = <p className='text-error text-center'>{error?.message || hookError?.message || updateProfileError?.message}</p>
    };

    // Handle loading
    if (loading || updating) {
        return <Loading />;
    };

    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 md:w-2/3 w-full max-w-lg shadow-2xl bg-base-100 border border-secondary">
                    <div className="card-body">
                        <h1 className='text-3xl text-center mb-5'>Registration Now</h1>
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
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <SocialLogin />
                        <p className='text-center mt-3 text-lg'>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;