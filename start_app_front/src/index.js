import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import OfferTile from './offer_tile';
import sample from './sample.svg';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
      </header>
      <div className="offer-tile-container" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px", 
        padding: "20px",
        overflowY: 'auto', 
        maxHeight: '80vh' 
      }}>
        <OfferTile pic={sample} jobTitle="Software Developer"
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
    </div>
  );
}

// Initialize and render the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default App;
