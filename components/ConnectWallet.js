// src/components/ConnectWallet.js
import React, { useState } from 'react';
import web3 from '..src/web3';

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting to MetaMask', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Connected Account: {account}</p>}
        </div>
    );
};

export default ConnectWallet;
