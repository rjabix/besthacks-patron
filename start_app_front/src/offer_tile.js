import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

const OfferTile = ({ pic, jobTitle, jobDescription, onElaborateClick, noViewClick }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleElaborateClick = () => {
        setShowDetails(true);
        if (onElaborateClick) onElaborateClick();
    };

    const ref = useOnclickOutside(() => {
        setShowDetails(false);
    });
    return (
        <div className="offer-tile-container relative mb-4 w-full">
            <div className="offer-tile p-4 border shadow-lg w-full h-[300px] rounded-xl flex flex-col justify-between transition-all duration-500">
                <div className="header flex items-center flex-grow mb-4">
                    <img src={pic} alt="Company logo" className="logo w-16 h-full mx-4 object-contain" />
                    <div className="border-l border-gray-300 h-full mx-4"></div>
                    <h2 className="job-title text-xl font-bold flex items-center justify-center" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden' }}>
                        {jobTitle}
                    </h2>
                </div>

                {/* Button Section */}
                <div className="mt-4 flex space-x-2">
                    <button
                        onClick={handleElaborateClick}
                        className="btn p-2"
                        style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}
                    >
                        More
                    </button>
                    <button onClick={noViewClick} className="btn btn-secondary">
                        Visit
                    </button>
                </div>
            </div>

            {/* Detailed View Tile */}
            <div
                ref={ref} 
                className={`detailed-tile p-4 border shadow-lg h-[300px] rounded-xl w-full bg-gray-100 transition-transform duration-500 ease-in-out absolute top-full left-0 ${showDetails ? 'translate-y-[-100%] opacity-100' : 'translate-y-0 opacity-0'}`}
                style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}>

                <div className="header flex items-center flex-grow ml-5">
                    <h3 className="text-lg font-bold">Detailed Information</h3>
                </div>
                <div className="mt-2 overflow-y-auto" style={{ maxHeight: 'calc(100% - 85px)' }}>
                    <p>{jobDescription}</p>
                </div>
                <button
                    onClick={() => setShowDetails(false)}
                    className="btn btn-secondary absolute bottom-4 left-4 p-2 mt-4"
                    style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}>Select tasks</button>
            </div>
        </div>
    );
};

export default OfferTile;
