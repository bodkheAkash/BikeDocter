import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const init = {
        amount: 0,
        customer_id: localStorage.getItem("custmerid"),
        date: new Date(),
        payment_mode_id: 0,
        bookingid:0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                return { ...state, [action.fld]: action.value };
            case "reset":
                return init;
            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const [allModes, setAllModes] = useState([]);
    const [allbookingdetails, setAllbookingdetails] = useState({}); 
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const bookingdetails = (id) => {
        console.log(id);
        localStorage.setItem("bookingid", id);
        fetch("http://localhost:8080/getByBookingId?id=" + id)
            .then((resp) => resp.json())
            .then((b) => setAllbookingdetails(b)); // Set as object
    };

    useEffect(() => {
        fetch("http://localhost:8080/getAllPaymentModes")
            .then((resp) => resp.json())
            .then((m) => setAllModes(m));
    }, []);
    const senddata = (e) => {
        e.preventDefault();
        const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        };
        fetch("http://localhost:8080/saveTransaction", reqOptions)
          .then((resp) => {
            if (resp.status === 200) {
              navigate("/invoice");
            } else {
              setErrorMsg("Error: Payment failed. Please try again."); 
              window.location.reload();
            }
            return resp.json(); 
          })
          .catch((e) => {
            setErrorMsg("Error: Server error. Please try again later."); 
            console.log(e);
            window.location.reload();
          });
      };

    return (
        <div
            style={{ backgroundColor: "white" }}
            className="container-fluid p-3 mb-3 text-black shadow rounded-4"
        >
            <div className="container-fluid">
                <form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                                    <h3>Billing</h3>
                                    <hr />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="form-group">
                                <td>
                                    <label htmlFor="payment_mode_id"> Select Payment Mode</label>
                                </td>
                                <td>
                                    <select
                                        className="form-group"
                                        id="payment_mode_id"
                                        name="payment_mode_id"
                                        onChange={(e) => {
                                            dispatch({
                                                type: "update",
                                                fld: "payment_mode_id",
                                                value: e.target.value,
                                            });
                                        }}
                                    >
                                        <option>Select One</option>
                                        {allModes.map((Payment_modes) => (
                                            <option
                                                value={Payment_modes.id}
                                                key={Payment_modes.id}
                                            >
                                                {Payment_modes.payment_mode}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <td>
                                    <label>Enter Booking Id:</label>
                                </td>
                                <td>
                                    <input
                                        className="form-control"
                                        type="number"
                                        id="bike_reg_no"
                                        placeholder="Enter Booking Id "
                                        onChange={(e) => {
                                            bookingdetails(e.target.value);
                                            dispatch({
                                                type: "update",
                                                fld: "bookingid",
                                                value: e.target.value,
                                              });
                                            
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr className="form-group">
                                <td>
                                    <label htmlFor="areaid">Total Amount</label>
                                </td>
                                <td>
                                    <select
                                        className="form-group"
                                        id="amount"
                                        name="amount"
                                        onChange={(e) => {
                                            const selectedBooking = allbookingdetails;
                                            const selectedPrice =
                                                selectedBooking.estimated_price;
                                            dispatch({
                                                type: "update",
                                                fld: "amount",
                                                value: selectedPrice,
                                            });
                                        }}
                                    >
                                        <option>Select One</option>
                                        <option
                                            value={allbookingdetails.id}
                                            key={allbookingdetails.id}
                                        >
                                            {allbookingdetails.estimated_price}
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                    type="submit"
                    className="btn btn-primary mb-3"
                     onClick={(e) => {
                      senddata(e); 
                    }}
                    
                  >
                    Pay Now
                  </button>
                </form>
                {/* <p>{JSON.stringify(info)}</p> */}
                {errorMsg && <p className="text-danger">{errorMsg}</p>}
            </div>
        </div>
    );
}
