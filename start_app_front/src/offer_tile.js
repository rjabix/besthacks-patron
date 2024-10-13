import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import axios from 'axios';

const OfferTile = ({ id, pic, jobTitle, jobDescription, jobCompany, onElaborateClick, onTaskClick, link_var, links }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [sgpa, setSgpa] = useState('Loading...');
    const [llink, setLlink] = useState('Loading...');
    const [myjson, setMyjson] = useState('Loading...');

    const get_sgpa = () => {
        axios.post('https://78d9-156-17-72-59.ngrok-free.app/api/ai/getshorten/' + id)
            .then((response) => {
                console.log(response.data);
                setSgpa(response.data)
            }).catch((error) => {
                console.error(error)
            });
    }

    const handleElaborateClick = () => {
        setShowDetails(true);
        get_sgpa();
        if (onElaborateClick) onElaborateClick();
    };

    const handleTasksClick = () => {
        setShowDropdown((prev) => !prev);
        axios.post('https://78d9-156-17-72-59.ngrok-free.app/api/ai/getlearninglinks/' + id)
            .then(response => {
            // Convert the response data to an array of key-value pairs
            const dataObject = response.data;
            setLlink(dataObject);
            }).catch((error) => {
            console.error(error);
            }); // Toggle dropdown visibility

        if (onTaskClick) onTaskClick();
    };

    const ref = useOnclickOutside(() => {
        setShowDetails(false);
    });

    const refDropdown = useOnclickOutside(() => {
        setShowDropdown(false);
    });

    return (
        <div className="offer-tile-container relative mb-4 w-full">
            <div className="offer-tile p-4 border shadow-lg w-full h-[300px] rounded-xl flex flex-col justify-between transition-all duration-500">
                <div className="header flex items-center flex-grow mb-4">
                    <img src={pic} alt="Company logo" className="logo w-16 h-full mx-4 object-contain" />
                    <div className="border-l border-gray-300 h-full mx-4"></div>
                    <div>
                        <h3 className="company-name text-lg font-bold text-gray-500">{jobCompany}</h3>
                        <h2 className="job-title text-xl font-bold flex items-center justify-center" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden' }}>
                            {jobTitle}
                        </h2>
                    </div>
                </div>

                {/* Button Section */}
                <div className="mt-4 flex space-x-2">
                    <button
                        onClick={handleElaborateClick}
                        className="btn p-2 flex-1"
                        style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}
                    >
                        More
                    </button>
                    <a href={link_var} target='_blank' className="btn btn-secondary flex-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Visit
                    </a>
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
                    <p>{sgpa}</p>
                </div>
                <button
                    onClick={handleTasksClick}
                    className="btn btn-secondary absolute bottom-4 left-4 p-2 mt-4"
                    style={{ backgroundColor: '#044FF1', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}>
                    Generate links
                </button>
            </div>
            <div
                ref={refDropdown}
                className={`dropdown-tile p-4 border shadow-lg h-[300px] rounded-xl w-full bg-gray-200 transition-transform duration-500 ease-in-out absolute top-full left-0 mt-4 ${showDropdown ? 'translate-y-0 opacity-100 z-10 ' : 'translate-y-[-20px] opacity-0'}`}
                style={{ transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out' }}>

                <h3 className="text-lg font-bold">Task Selection</h3>
                <div className="mt-2 overflow-y-auto" style={{ maxHeight: 'calc(100%-40px)' }}>
                    {Array.isArray(llink) ? (
                        llink.map((pair, index) => (
                            <p key={index}>{pair[0] + pair[1]}</p>
                        ))
                    ) : (
                        <p>{llink}</p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default OfferTile;
