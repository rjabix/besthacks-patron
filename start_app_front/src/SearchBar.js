import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center justify-items-center my-4">
      
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Write your promt here..."
        className="w-screen h-8 ml-1 mr-1 px-3 py-2.5 text-lg font-bold rounded-lg border focus:outline focus:outline-1 focus:outline-offset-2 bg-white text-gray-700 focus:outline-gray-400 border-gray-300"
      />

      <button 
        type="submit"
        class="font-bold rounded-lg text-lg  w-48 h-8 bg-sky-500 hover:bg-sky-700 text-white justify-center">
          Submit
        </button>
    </div>
  );
}

export default SearchBar;