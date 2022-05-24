import React from "react";
import "./Footer.module.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer-container" >
            <div className="d-flex flex-column h-100 bg-dark">
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <h4 className="h1 text-white">Perfumance</h4>
                                <p className="small text-muted">Pefumance L.L.C is a multinational fragrance company incorporated in winter 2013, under commercial registry No. 596781, in Sylhet, Bangladesh, by Mr. Toufiq Alahi.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Get started</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <h5 className="text-white mb-3">Search More</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Blogs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
