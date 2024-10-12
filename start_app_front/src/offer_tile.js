import React, { useState } from 'react';

const OfferTile = ({ pic, jobTitle, jobRequirements, onElaborateClick, noViewClick }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleElaborateClick = () => {
        setShowDetails(showDetails => true);
        if (onElaborateClick) onElaborateClick();
    };

    const closeElaborate = () => {
        setShowDetails(showDetails => false);
        if (onElaborateClick) onElaborateClick();
    };

    return (
        <div className="offer-tile-container relative mb-4 w-full">
            {/* Main Tile */}
            <div className="offer-tile p-4 border shadow-lg w-full h-[300px] rounded-xl transition-all duration-500">
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
                <div className="mt-4 bottom-2">
                    <button
                        onClick={handleElaborateClick}
                        className="btn mr-2 p-2"
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
            {/* Detailed View Tile */}
            <div
                className={`detailed-tile p-4 border shadow-lg h-[300px] rounded-xl w-full bg-gray-100 transition-transform duration-500 ease-in-out absolute top-full left-0 ${showDetails ? 'translate-y-[-100%] opacity-100' : 'translate-y-0 opacity-0'}`}
                style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
            >
                <h3 className="text-lg font-bold">Detailed Information</h3>
                <p className="mt-2">More details about the job, company, and other requirements go here.</p>
                {/* Additional content for detailed view */}
                <div className="mt-4 pl-5 ottom-2 absolute bottom-4 left-0 right-0 flex justify-left">
                    <button
                        onClick={closeElaborate}
                        className="btn mr-2 p-2"
                        style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white' }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OfferTile;
