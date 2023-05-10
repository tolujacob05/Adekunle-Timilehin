 import { React, useState } from "react";
 import "./FrontPage.css";
 import pic3 from "../../img/pic3.jpg";
import Service from "../services/Service";
import Logo from "../../logo/Logo";
import About from "../about/About";
import Project from "../projects/Project";
import Popup1 from "../../modal/Popup1";
import Footer from "../footer/Footer";

 const FrontPage = () => {
    const [ openModal, setOpenModal ] = useState(false);


    return (
        <>
            <div className="nav-container">
                <nav>
                    <div className="logo">
                            <Logo />
                    </div>
                    <div className="nav-logo">
                        <div className="links">
                            <ul>
                                <li>Home</li>
                                <li>projects</li>
                                <li>contact us</li>
                                <li>about us</li>
                            </ul>
                        </div>
                        <div className="btn1">
                            <button onClick={() => setOpenModal(true)}>request service</button>
                            <Popup1  open={openModal} onClose={() => setOpenModal(false)}/>
                        </div>
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
                        {/* <div className="btn2">
                            <button>explore</button>
                        </div> */}
                    </div>
                    <div className="nav-text-img">
                        <img src={pic3} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <About />
                <Service />
                <Project />
                <Footer />
            </div>

        </>
    )
 }

 export default FrontPage;