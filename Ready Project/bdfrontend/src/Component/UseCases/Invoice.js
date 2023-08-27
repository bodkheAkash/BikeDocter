import { useEffect, useState } from "react";
export default function Invoice() {
    const [invoiceData, setInvoiceData] = useState({});
    const cid = localStorage.getItem("custmerid");
    const bid = localStorage.getItem("bookingid");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/getInvoice?cid=" + cid + "&bid=" + bid)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Failed to fetch data");
                }
                return resp.json();
            })
            .then((i) => setInvoiceData(i))
            .catch(() => setError(true)); 

    }, []);

    return (
        <div>
            <h4 style={{ textAlign: 'center' }}>Invoice</h4>
            {error ? (
                <p style={{ color: 'blue', textAlign: 'center' }}>Payment is Not Allowed</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Total Amount</th>
                            <th scope="col">Payment Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{invoiceData.booking?.id}</td>
                            <td scope="row">{invoiceData.booking?.booking_date}</td>
                            <td scope="row">{invoiceData.customer?.fname + " " + invoiceData.customer?.lname}</td>
                            <td scope="row">{invoiceData.amount}</td>
                            <td scope="row">{invoiceData.modes?.payment_mode}</td>
                        </tr>
                    </tbody>
                </table>
                
            )}
            <a href="/customerhome">Back</a>
        </div>
    )
}