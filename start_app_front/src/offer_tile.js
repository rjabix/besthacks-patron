import React from 'react';

const OfferTile = ({ pic, jobTitle, jobRequirements, onElaborateClick, noViewClick }) => {
    return (
        <div className="offer-tile p-4 border rounded shadow-lg mb-4">
            <div className="header flex items-start">
                <img src={pic} alt="Company logo" className="logo w-16 h-16 mr-4" />
                <h2 className="job-title text-xl font-bold" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {jobTitle}
                </h2>
            </div>
            <ul className="mt-4 list-disc pl-5">
                {jobRequirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
            <div className="mt-4">
                <button
                    onClick={onElaborateClick}
                    className="btn mr-2"
                    style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white' }}
                >
                    Elaborate
                </button>
                <button
                    onClick={noViewClick}
                    className="btn btn-secondary"
                >
                    View
                </button>
            </div>
        </div>
    );
}

export default OfferTile;
