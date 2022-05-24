import React, { useEffect, useState } from "react";
import Service from "../Pages/Home/Service/Service";

const ManageInventory = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="container my-5" >
            <h1 className="text-warning mx-auto text-center my-5" > All available Perfumes </h1>
            <div className="row mt-4">
                <div className="services-container">
                    {services.map((service) => (
                        <Service key={service._id} service={service}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;
