import React from 'react';

const InfoCard = ({ img, cardTitle, cardDetail, bgColor }) => {
    return (

        <div className={`card bg-base-100 lg:card-side shadow-xl ${bgColor}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDetail}</p>
            </div>
        </div>

    );
};

export default InfoCard;