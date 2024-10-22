import ReactDOM from 'react-dom/client';
import React, {useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import OfferGrid from "./components/OfferGrid";
import Hero from "./components/Hero";
import Footer from './components/footer';

function App() {
    const [showApp, setShowApp] = React.useState(false);
    const [prompt, setPrompt] = React.useState('');

  return (
    <div className="App">
        <Hero setShowApp={setShowApp} setPrompt={setPrompt}/>
        { showApp && (
            <>
                <Header />
                <OfferGrid prompt={prompt}/>
                {/*<SearchBar setPromt={setPrompt} />*/}
                <Footer/>
            </>
        )}
    </div>
  );
}

// Initialize and render the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default App;
