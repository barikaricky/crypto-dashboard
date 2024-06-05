// src/App.js
import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Crypto Dashboard</h1>
                <ConnectWallet />
            </header>
        </div>
    );
}

export default App;
