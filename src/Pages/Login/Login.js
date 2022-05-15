import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)

    let from = location.state?.from?.pathname || '/';

    // let from = location.state?.from?.pathname || "/";

    // const email = document.getElementById('email')

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let signInErrorMessage;

    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || googleError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl ">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* for email field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-800">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-800">{errors.email.message}</span>}

                            </label>
                        </div>

                        {/* for password field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {

                                        value: 6,
                                        message: 'Must be six charecters or longer'

                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-800">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-800">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                    </form>

                    <p>Forgot Password? <Link className='text-primary' to='/resetpassword'>Reset Password</Link></p>

                    <p>New to Doctors Portal?  <Link to='/signup' className='text-secondary'>Create New Account</Link></p>

                    <div className="divider">OR</div>
                    <button

                        onClick={() => signInWithGoogle()}

                        className="btn btn-outline"

                    >Continue With Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login; <h2>Please login</h2>