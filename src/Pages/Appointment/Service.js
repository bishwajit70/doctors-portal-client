import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 mb-10 shadow-xl">
            <div class="card-body">
                <h2 className="font-semibold text-xl text-secondary text-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0
                            ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p className='text-center uppercase'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                

                    <label
                    onClick={() => setTreatment(service)}
                    className=''
                    disabled={slots.length === 0}
                    for="booking-modal" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;