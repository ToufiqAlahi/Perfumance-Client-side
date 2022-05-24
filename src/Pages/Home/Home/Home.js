import React from "react";
import { Link } from "react-router-dom";
import Comment from "../../Comment/Comment";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import './Home.module.css'

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <div className="my-5 container text-center">
                <Link to="/manageinventory" className="btn btn-warning p-4 mx-2 fw-bold">
                    Show All Perfumes
                </Link>
                <Link to="/manage" className="btn btn-warning p-4 fw-bold">
                    Manage the Inventory
                </Link>
            </div>
            <Experts></Experts>
            <Comment></Comment>

            <div className="personal-note bg-danger p-3 my-5 fs-5 fw-bold" >
                <p>Personal Note:-  It's been around 20 days, I have been suffering from Typhoid Fever. My average marks was 59.2 ! I have submitted all the previous assignment on time. But because of my illness I have lagged behind. I am still recovering and trying to give my best. Please Pray for my quick recovery and for my SCIC journey. Thank you !  </p>
            </div>
        </>
    );
};

export default Home;
