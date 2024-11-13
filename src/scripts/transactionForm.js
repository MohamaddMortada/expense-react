import React, { useState } from 'react';

function TransactionForm() {
    const [formData, setFormData] = useState({
        type: 'income',
        source: '',
        amount: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/my-app/back-end/insert_expense.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message || 'Error submitting transaction');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type:
                <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </label>
            <label>
                Source:
                <input type="text" name="source" value={formData.source} onChange={handleChange} required />
            </label>
            <label>
                Amount:
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </label>
            <label>
                Date:
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
