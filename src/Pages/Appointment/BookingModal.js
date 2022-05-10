import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment

    const handleBooking = event=>{
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-y-2 mt-5' >

                        <input disabled name='date' type="text" value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' class="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />

                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full" />
                        
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />


                        <input type="submit" value='Submit' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;