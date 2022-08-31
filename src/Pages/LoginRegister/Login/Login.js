import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const email = data?.email
        await signInWithEmailAndPassword(email, data.password);
        fetch('https://stormy-tundra-05889.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
                navigate(from, { replace: true });
            });
    };

    // // Navigate user
    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user, navigate, from]);

    // Handle Error Message
    if (error) {
        errorMessage = <p className='text-red-500 text-center'>{error?.message}</p>
    }

    // Handle Loading
    if (loading) {
        return <Loading />;
    }

    // function for reset password
    const handleResetPassword = async () => {
        const email = document.getElementById("email").value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent. Check your email.', {
                style: {
                    marginTop: '-3px'
                }
            });
        } else {
            toast.error('Please enter your email', {
                style: {
                    marginTop: '-3px'
                }
            });
        }
    }

    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 md:w-2/3 w-full max-w-md shadow-2xl bg-base-100 border border-secondary">
                    <div className="card-body">
                        <h1 className='text-3xl text-center'>Please Login</h1>
                        {errorMessage}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Email address"
                                    id="email"
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
                                    <p className='text-md text-error cursor-pointer' onClick={handleResetPassword}
                                    >Forgot Password?</p>
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin />
                        <p className='text-center mt-3 text-lg'>Don't have any account? <Link to='/registration' className='text-secondary'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;