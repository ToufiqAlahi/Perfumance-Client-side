import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete?");
        if (proceed) {
            const url = `https://enigmatic-savannah-26668.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = services.filter((service) => service._id !== id);
                    setServices(remaining);
                });
        }
    };
    return (
        <div className="w-50 mx-auto">
            <h2>Manage the Perfumes</h2>
            <div>
                {services.map((service) => (
                    <div key={service._id}>
                        {/* <h5>{service.name} </h5> */}
                        <img className="w-25" src={service.img} alt="" />
                        <h2>{service.name}</h2>
                        <p>Price: {service.price}</p>
                        <p>
                            <small>{service.description}</small>
                        </p>
                        <p className="fw-bold">Supplier: {service.supplier}</p>
                        <h5>Available: {service.quantity} sets</h5>
                        <button
                            className="m-4 btn btn-warning py-2 px-4"
                            onClick={() => handleDelete(service._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-secondary">Add a new Perfume</h1>
                <Link to="/addservice" className="btn btn-warning p-4 text-center my-5">
                    {" "}
                    Add a New Perfume
                </Link>
            </div>
        </div>
    );
};

export default ManageServices;
