import React, { useState } from 'react';

function TransactionForm() {
    
    return (
        <form>
            <label>
                Type:
                <select name="type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </label>
            <label>
                Source:
                <input type="text" name="source" required />
            </label>
            <label>
                Amount:
                <input type="number" name="amount" required />
            </label>
            <label>
                Date:
                <input type="date" name="date" required />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
