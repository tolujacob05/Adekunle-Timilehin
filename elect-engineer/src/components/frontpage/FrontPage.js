 import React from "react";
 import "./FrontPage.css";
 import pic3 from "../../img/pic3.jpg";

 const FrontPage = () => {
    return (
        <>
            <div className="nav-container">
                <nav>
                    <div className="logo">
                        <ul>
                            <li>
                                timi-electrical
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            <li>Home</li>
                            <li>projects</li>
                            <li>contact us</li>
                            <li>about us</li>
                        </ul>
                    </div>
                    <div className="btn1">
                        <button>request service</button>
                    </div>
                </nav>

                {/* Brief intro on what the company is about  */}
                <div className="nav-text">
                    <div className="text">
                        <div className="text-about">
                            <span>"Making both electrical and solar services more accessible to all" </span>
                            <span> We specify in every electrical field available. 
                                We do house wiring, installation of electrical devices in houses. 
                                we also specify in both installation and distribution of solar and its compartments. 
                                We make sure we do our possible best there is to satisfy our customers
                            </span>
                        </div>
                        <div className="btn2">
                            <button>explore</button>
                        </div>
                    </div>
                    <div className="nav-text-img">
                        <img src={pic3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default FrontPage;