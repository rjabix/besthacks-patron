import React from 'react';

const OfferTile = ({ pic, jobTitle, jobRequirements, onElaborateClick, link_var }) => {
    return (
        <div className="offer-tile p-4 border  shadow-lg mb-4 w-full h-[300px] rounded-xl ">
            <div className="header flex items-start">
                <img src={pic} alt="Company logo" className="logo w-16 h-16 mr-4" />
                <h2 className="job-title text-xl font-bold" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}>
                    {jobTitle}
                </h2>
            </div>
            <ul className="mt-4 list-disc pl-5">
                {jobRequirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
            <div className="mt-4  bottom-2">
                <button
                    onClick={onElaborateClick}
                    className="btn mr-2 p-2"
                    style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white' }}
                >
                    Elaborate
                </button>
                <a
                    href={link_var}
                    className="btn btn-secondary"
                >
                    View
                </a>
            </div>
        </div>
    );
}

export default OfferTile;
