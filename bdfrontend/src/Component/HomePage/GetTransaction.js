// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function GetTransaction() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get("https://localhost:7169/api/Transactions"); // Adjust the URL accordingly
//       setTransactions(response.data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Transactions</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Amount</th>
//             <th>Customer ID</th>
//             <th>Date</th>
//             <th>Payment Mode ID</th>
//             <th>Transaction Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.id}</td>
//               <td>{transaction.amount}</td>
//               <td>{transaction.customerId}</td>
//               <td>{transaction.date}</td>
//               <td>{transaction.paymentModeId}</td>
//               <td>{transaction.transactionNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default GetTransaction;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("https://localhost:7169/api/Transactions"); // Adjust the URL accordingly
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Transactions</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Customer ID</th>
            <th>Date</th>
            <th>Payment Mode ID</th>
            <th>Transaction Number</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.customer.fname}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.paymentMode.paymentMode1}</td>
              <td>{transaction.transactionNumber || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
