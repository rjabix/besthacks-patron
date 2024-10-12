// Import necessary packages
import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import OfferTile from './offer_tile.js';
import sampleImage from './sample.svg';
import { Carousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';

// Sample data for carousel
const items = ['item1', 'item2', 'item3', 'item4'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Carousel slideSize="70%" height={200} slideGap="md" orientation="horizontal">
        <div className="flex" style={{ gap: '20px' }}>
          {items.map((item, index) => ( 
            <Carousel.Slide key={index}>
              <OfferTile pic={sampleImage} jobTitle={`Job Title ${index + 1}`} jobRequirements={items} />
            </Carousel.Slide>
          ))}
        </div>
      </Carousel>
    </div>
  );
}

// Initialize and render the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);

export default App;
