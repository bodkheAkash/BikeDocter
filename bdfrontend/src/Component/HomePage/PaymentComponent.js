import React, { useState } from "react";
import axios from "axios";

function PaymentComponent({ basePrice, totalPrice, customerId, paymentModes }) {
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = async () => {
    try {
      // Send payment request to backend to create transaction
      const response = await axios.post("http://localhost:8080/api/transactions", {
        amount: totalPrice,
        customerId,
        paymentModeId: paymentMode,
      });

      if (response.status === 201) {
        setPaymentSuccessful(true);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <p>Base Price: ${basePrice}</p>
      <p>Total Price: ${totalPrice}</p>

      {paymentSuccessful ? (
        <div className="payment-success">Payment Successful!</div>
      ) : (
        <div className="payment-form">
          <label>Select Payment Mode:</label>
          <select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="">Select Payment Mode</option>
            {paymentModes.map((mode) => (
              <option key={mode.id} value={mode.id}>
                {mode.paymentMode}
              </option>
            ))}
          </select>

          <button onClick={handlePayment}>Make Payment</button>
        </div>
      )}
    </div>
  );
}

export default PaymentComponent;
