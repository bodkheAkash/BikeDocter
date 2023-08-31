// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function GetTransaction() {
// //   const [transactions, setTransactions] = useState([]);

// //   useEffect(() => {
// //     fetchTransactions();
// //   }, []);

// //   const fetchTransactions = async () => {
// //     try {
// //       const response = await axios.get("https://localhost:7169/api/Transactions"); // Adjust the URL accordingly
// //       setTransactions(response.data);
// //     } catch (error) {
// //       console.error("Error fetching transactions:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Transactions</h1>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Amount</th>
// //             <th>Customer ID</th>
// //             <th>Date</th>
// //             <th>Payment Mode ID</th>
// //             <th>Transaction Number</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {transactions.map((transaction) => (
// //             <tr key={transaction.id}>
// //               <td>{transaction.id}</td>
// //               <td>{transaction.amount}</td>
// //               <td>{transaction.customerId}</td>
// //               <td>{transaction.date}</td>
// //               <td>{transaction.paymentModeId}</td>
// //               <td>{transaction.transactionNumber}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default GetTransaction;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col } from "react-bootstrap";

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);
//   const [startdate, setStartDate] = useState('');
//   const [enddate, setEndDate] = useState('');
//   const[amount,setAmount]=useState('');

//   const handelStartDateChange=(event) =>{
//      setStartDate(event.target.value);

//   };
//   const handelEndDateChange=(event) =>{
//     setEndDate(event.target.value);

//  };
 
//  const handelAmountChange=(event) =>{
//     setAmount(event.target.value);

//  };


//   useEffect(() => {
//     fetchTransactions();
//   }, []);

  


//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get("https://localhost:7109/api/Transactions"); // Adjust the URL accordingly
//       setTransactions(response.data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   const handelSearchClick=()=>{
//     fetch("https://localhost:7109/api/Transactions/ondate?startdate="+startdate+"&enddate="+enddate)
//     .then(resp=>resp.json())
//     .then(transaction=>setTransactions(transaction))
//   }

//    const handelAmountClick=() =>{
//     fetch("https://localhost:7109/api/Transactions/onAmount?amount="+amount)
//     .then(resp=>resp.json())
//     .then(amount=>setTransactions(amount))
//   }
    

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Transactions</h1>
//       <Row>
//         <Col>
//           <table><tr>
//               <td><label>Start Date :</label></td>
//               <td><input type="date" value={startdate} onChange={handelStartDateChange}></input></td>
//               <td><label>End Date :</label></td>
//               <td><input type="date" value={enddate} onChange={handelEndDateChange}></input></td>
//               <td><button onClick={handelSearchClick}>Search </button></td>
//               <br/>
//               <td><label>Enter Amount</label></td>
//               <td><input type="number" value={amount} onChange={handelAmountChange}></input></td>
//               <td><button onClick={handelAmountClick}>Enter</button></td>


//           </tr></table>
//         </Col>
//       </Row>
//       <table className="table">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Amount</th>
//             <th>Customer ID</th>
//             <th>Date</th>
//             <th>Payment Mode ID</th>
//             <th>Booking By </th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.id}</td>
//               <td>{transaction.amount}</td>
//               <td>{transaction.customer.fname}</td>
//               <td>{new Date(transaction.date).toLocaleDateString()}</td>
//               <td>{transaction.paymentMode.paymentMode1}</td>
//               {/* <td>{transaction.transactionNumber || "-"}</td> */}
//               <td>{transaction.booking.customer.fname}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Transactions;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("https://localhost:7109/api/Transactions"); // Adjust the URL accordingly
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleSearchClick = () => {
    fetch(
      `https://localhost:7109/api/Transactions/ondate?startdate=${startDate}&enddate=${endDate}`
    )
      .then((resp) => resp.json())
      .then((transaction) => setTransactions(transaction));
  };

  const handleAmountClick = () => {
    fetch(
      `https://localhost:7109/api/Transactions/onAmount?amount=${amount}`
    )
      .then((resp) => resp.json())
      .then((amount) => setTransactions(amount));
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Transactions</h1>
      <Row>
        <Col>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Col>
              <Col>
                <Button variant="primary" onClick={handleSearchClick}>
                  Search
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Col>
              <Col>
                <Button variant="primary" onClick={handleAmountClick}>
                  Enter
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Payment Mode</th>
            <th>Booking By</th>
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
              <td>{transaction.booking.customer.fname}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Transactions;
