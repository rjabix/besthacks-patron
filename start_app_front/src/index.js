
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import { OfferTile } from './offer_tile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);