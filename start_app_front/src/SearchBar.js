import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsVisible(true);
    console.log("Input value: ",searchTerm);
    setSubmittedText(searchTerm);
  }

  return (
    <div className="flex flex-col justify-center my-4">
      {isVisible && <div 
        id="PromtDiv"
        className=" bg-blue-200 h-auto w-calc(100%-20px) ml-4 mr-4 text-lg rounded-lg px-3 py-2.5"
      >{submittedText}</div>
      }
      <div className="flex flex-row justify-center mx-4 my-4 w-calc(100%-20px)">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Write your promt here..."
          className="w-full h-8 px-3 py-2.5 text-lg font-bold rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-white text-gray-700 focus:outline-gray-400 border-gray-300"
        />

        <button 
          onClick={handleSubmit}
          className="font-bold rounded-lg text-lg  w-48 h-8 ml-2 bg-sky-500 hover:bg-sky-700 text-white justify-center">
            Submit
          </button>
      </div>
    </div>
  );
}

export default SearchBar;