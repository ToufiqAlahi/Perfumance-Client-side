import React from "react";
// import notfound from "../../../images/notfound.jpg";
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            {/**<img className="w-50 p-4 mx-auto d-block" src={notfound} alt="" />**/}
            <div className='container-404'>
                <div className="page_404 justify-center content-center self-center ">
                    <div className=" grid grid-cols justify-center">
                        <div className="justify-center content-center  ">
                            <div className="  ">
                                <div className=" w-screen text-center content-center ">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center text-404 ">404</h1>

                                    </div>

                                    <div className="contant_box_404">
                                        <h3 className="h2 text-5xl font-bold">
                                            Looks like you're lost...
                                        </h3>

                                        <p className="h2 text-5xl font-bold my-10">The page you are looking for is not available!</p>

                                        <a className="mt-10 text-5xl btn-text font-bold link_404 text-bold p-8 rounded-2xl" href="/" >Go to Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
