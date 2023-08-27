import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ViewServiceCenter() {
    let index = 0;
    const [allarea, setAllarea] = useState([]);
    const [allcities, setAllcities] = useState([]);
    const [allservicecenter, setAllservicecenter] = useState([]);
    const [allRatings, setAllRatings] = useState([]);
    const [isServiceCenterAvailable, setIsServiceCenterAvailable] = useState(true); // New state for availability check

    const getAreas = (id) => {
        fetch("http://localhost:8080/getAreaByCityId?id=" + id)
            .then((resp) => resp.json())
            .then((a) => setAllarea(a));
    };

    const getServicecenterid = (id) => {
        fetch("http://localhost:8080/getAvgRating?id=" + id)
            .then((resp) => resp.json())
            .then((a) => setAllRatings(a));
    };

    const getServiceCenter = (id) => {
        fetch("http://localhost:8080/getServiceCenterByAreaId?id=" + id)
            .then((resp) => resp.json())
            .then((a) => {
                setAllservicecenter(a);
                setIsServiceCenterAvailable(a.length > 0); // Set availability based on response length
            });
    };

    useEffect(() => {
        fetch("http://localhost:8080/getCities")
            .then((resp) => resp.json())
            .then((c) => setAllcities(c));
    }, []);

    return (
        <div style={{ backgroundColor: "white" }} className="container-fluid p-3 mb-3 text-black shadow rounded-4">
            <div className="container-fluid">
                <form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                                    <h3>Service Center</h3><hr />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="form-group">
                                <td>
                                    <label htmlFor="cityid"> Select City</label>
                                </td>
                                <td>
                                    <select
                                        className="form-group"
                                        id="cityid"
                                        name="cityid"
                                        onChange={(e) => {
                                            getAreas(e.target.value);
                                        }}
                                    >
                                        <option>Select One</option>
                                        {allcities.map((city) => {
                                            return (
                                                <option value={city.id} key={city.id}>
                                                    {city.city}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <td>
                                    <label htmlFor="areaid"> Select Area</label>
                                </td>
                                <td>
                                    <select
                                        className="form-group"
                                        id="areaid"
                                        name="areaid"
                                        onChange={(e) => {
                                            getServiceCenter(e.target.value);
                                        }}
                                    >
                                        <option>Select One</option>
                                        {allarea.map((area) => {
                                            return (
                                                <option value={area.id} key={area.id}>
                                                    {area.area}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 style={{ textAlign: 'center' }}>Service Center Details</h4>
                    {isServiceCenterAvailable ? ( // Check if service center is available
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="id">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">E-mail</th>
                                    {/* <th scope="col">FeedBack</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {allservicecenter.map((service_centre) => (
                                    <tr>
                                        <td scope="row">{++index}</td>
                                        <td>{service_centre.name}</td>
                                        <td>{service_centre.phone}</td>
                                        <td>{service_centre.email}</td>
                                        {/* <td><a href="/#">Click</a></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p style={{ color: 'blue', textAlign: 'center' }}>Service center is not available.</p>
                    )}
                </form>
            </div>
        </div>
    );
}
