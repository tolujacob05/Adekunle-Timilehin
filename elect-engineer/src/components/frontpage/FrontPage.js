 import { React, useState } from "react";
 import "./FrontPage.css";
 import pic3 from "../../img/pic3.jpg";
import Service from "../services/Service";
import Logo from "../../logo/Logo";
import About from "../about/About";
import Project from "../projects/Project";
import Popup1 from "../../modal/popup1/Popup1";
import Footer from "../footer/Footer";
import { UilAlignCenterAlt } from '@iconscout/react-unicons';
import { UilTimesCircle } from '@iconscout/react-unicons';
import { Link } from "react-scroll";

 const FrontPage = () => {
    const [ openModal, setOpenModal ] = useState(false);

    const [ isMobile, setIsMobile ] = useState(false);

    return (
        <>
            <div className="nav-container">
                <nav>
                    <div className="logo">
                            <Logo />
                    </div>
                    <div className="nav-logo">
                        <div  
                            className={ isMobile? "links-mobile":"links"}
                            onClick={() => setIsMobile(false)}
                        >
                            <ul className="links">
                                <Link activeClass="active" to="Home" spy={true} smooth={true} className="logo-link">
                                    <li>Home</li>
                                </Link>
                                <Link activeClass="active" to="Projects" spy={true} smooth={true} className="logo-link">
                                    <li>projects</li>
                                </Link>
                                <Link activeClass="active" to="Contact us" spy={true} smooth={true} className="logo-link">
                                    <li>contact us</li>
                                </Link>
                                <Link activeClass="active" to="About us" spy={true} smooth={true} className="logo-link">
                                    <li>About us</li>
                                </Link>
        
                                <button onClick={() => setOpenModal(true)}>request service</button>
                            </ul>

                            
                        </div>

                        <div
                            className="mobile-menu-icon"
                            onClick={() => setIsMobile(!isMobile)}
                        >
                        { isMobile ?
                            (  
                                <UilTimesCircle />
                            ): (
                                <UilAlignCenterAlt />
                            )
                        }
                        </div>
                    </div>
                    <Popup1 open={openModal} onClose={() => setOpenModal(false)}/>
                </nav>

                {/* Brief intro on what the company is about  */}
                <div className="nav-text" id="Home">
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
            {/* <div className="mobile-screen" id="mobile">
                <UilAlignCenterAlt />
                <UilTimesCircle />
            </div> */}
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