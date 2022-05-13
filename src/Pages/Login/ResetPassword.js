import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading';

const ResetPassword = () => {
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (sending) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        // console.log(data.email)
        if (data.email) {
            sendPasswordResetEmail(data.email)
            alert('Email Sent')
            navigate('/login')
        }
        else {
            alert("Enter Your Email Address")
        }
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl ">Reset Password</h2>

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
                        <input className='btn w-full max-w-xs' type="submit" value='Reset Password' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ResetPassword;