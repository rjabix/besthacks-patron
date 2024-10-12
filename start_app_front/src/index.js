import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import OfferGrid from "./components/OfferGrid";

function App() {
  return (
    <div className="App">
        <Header/>
        <OfferGrid offers={''}/>
        <SearchBar />
    </div>
  );
}

// Initialize and render the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default App;
