import logo from './logo.svg';
import './App.css';
import React from 'react';
import TransactionForm from './scripts/transactionForm';
import TransactionList from './scripts/transactionList';

function App() {
    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            <TransactionForm />
            <TransactionList/>
        </div>
        
    );
}

export default App;
