import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bannerbg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div
            style={{
                backgroundImage: `url(${bannerbg})`,
                backgroundSize: 'cover',
            }}
            className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='mr-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    // footer={footer}

                    />

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;