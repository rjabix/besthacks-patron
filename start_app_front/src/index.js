import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import OfferTile from './offer_tile';
import sample from './sample.svg';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1 className="text-4xl font-bold">Job Offers</h1>
      </header>
      <div className=" grid grid-cols-3 p-12 gap-x-12"  style={{
        overflowY: 'auto'
      }}>
        <OfferTile pic={sample} jobTitle="Software Developer and not it is a very long title that should be truncated"
          jobRequirements={[
            "Bachelor's degree in Computer Science",
            "3+ years of experience in software development", 
            "Experience with Java, Python, and C++"
          ]}
          onElaborateClick={() => { console.log("Elaborate clicked") }} 
          noViewClick={() => { console.log("View clicked") }} 
        />
        <OfferTile pic={sample} jobTitle="Software Developer and not it is a very long title that should be truncated"
          jobRequirements={[
            "Bachelor's degree in Computer Science",
            "3+ years of experience in software development", 
            "Experience with Java, Python, and C++"
          ]}
          onElaborateClick={() => { console.log("Elaborate clicked") }} 
          noViewClick={() => { console.log("View clicked") }} 
        />
        <OfferTile pic={sample} jobTitle="Software Developer and not it is a very long title that should be truncated"
          jobRequirements={[
            "Bachelor's degree in Computer Science",
            "3+ years of experience in software development", 
            "Experience with Java, Python, and C++"
          ]}
          onElaborateClick={() => { console.log("Elaborate clicked") }} 
          noViewClick={() => { console.log("View clicked") }} 
        />
        {/* Add more OfferTile components as needed */}
      </div>
      <div className="search-bar-container" style={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        backgroundColor: 'white', 
        padding: '10px', 
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)' 
      }}>
        <SearchBar />
      </div>
    </div>
  );
}

// Initialize and render the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default App;
