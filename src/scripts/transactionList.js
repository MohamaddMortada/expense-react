import React, { useEffect, useState } from "react";
import axios from "axios";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost/my-app/back-end/fetch_expenses.php");
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Type: {transaction.type}</p>
            <p>Source: {transaction.source}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
