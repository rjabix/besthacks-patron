import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

const OfferTile = ({ pic, jobTitle, jobRequirements, onElaborateClick, noViewClick }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleElaborateClick = () => {
        setShowDetails(true);
        if (onElaborateClick) onElaborateClick();
    };

    const ref = useOnclickOutside(() => {
        setShowDetails(false);
    });

const OfferTile = ({ pic, jobTitle, jobRequirements, onElaborateClick, link_var }) => {
    return (
        <div className="offer-tile p-4 border  shadow-lg mb-4 w-full h-[300px] rounded-xl ">
            <div className="header flex items-start">
                <img src={pic} alt="Company logo" className="logo w-16 h-16 mr-4" />
                <h2 className="job-title text-xl font-bold" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}>
                    {jobTitle}
                </h2>
            </div>
            {/* Detailed View Tile */}
            <div
                ref={ref} 
                className={`detailed-tile p-4 border shadow-lg h-[300px] rounded-xl w-full bg-gray-100 transition-transform duration-500 ease-in-out absolute top-full left-0 ${showDetails ? 'translate-y-[-100%] opacity-100' : 'translate-y-0 opacity-0'}`}
                style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
            >
                <h3 className="text-lg font-bold">Detailed Information</h3>
                <p className="mt-2">More details about the job, company, and other requirements go here.</p>
                {/* Additional content for detailed view */}
                <div className="mt-4 pl-5 ottom-2 absolute bottom-4 left-0 right-0 flex justify-left">
                </div>
            </div>
        </div>
    );
}
}

export default OfferTile;
