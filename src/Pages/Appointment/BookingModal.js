import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const [user, loading, error] = useAuthState(auth)


    const { _id, name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-y-2 mt-5' >

                        <input disabled name='date' type="text" value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full" />

                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full" />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />


                        <input type="submit" value='Submit' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;