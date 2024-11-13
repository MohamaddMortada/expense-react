import logo from './logo.svg';
import './App.css';
import React from 'react';
import TransactionForm from './scripts/transactionForm';


function App() {
    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            <TransactionForm />
        </div>
        
    );
}

export default App;
