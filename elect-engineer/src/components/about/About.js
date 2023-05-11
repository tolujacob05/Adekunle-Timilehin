import React from "react";
import "./About.css";
import pic9 from "../../img/pic9.jpg";
import pic19 from "../../img/pic19.png"
// import pic18 from "../../img/pic18.png";
import Dots from "../Dots/Dots";
import vector2 from "../../img/vector2.png";
import pic20 from "../../img/pic20.png";
import { UilCheck } from '@iconscout/react-unicons'

const About = () => {
    return (
        <>
            <section className="about-cont" id="About us">
                <div className="about-content">
                    <div className="abt-vector">
                        <div className="abt-img1">
                            <img src={pic19} alt="" />
                        </div>
                        {/* <div className="abt-img2">
                            <img src={pic18} alt="" />
                        </div> */}
                    </div>
                    <div className="abt-dot1">
                        <Dots />
                    </div>
                    <div>
                        <div className="abt-text">
                        
                            <div className="abt-img3">
                                < img src={pic9} alt="" />
                            </div>
                            <div className="abt-exp-cont">
                                <div className="abt-exp">
                                    <span>13</span>
                                    <span>years</span>
                                    <div className="abt-exp2">
                                        <span>Experience in the electrical field</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="abt-dot2">
                            <Dots />
                        </div>
                    </div>
                    <div>
                        <div className="abt-elect">
                            <span>about us</span>
                            <span>residential & commercial electrical services</span>
                            <span>At <span>Timi-Electrical,</span> we are dedicated to providing high-quality electrical services to homeownwers,
                                    commercial clients, and industrial customers as we have been doing for several years. We have a team of highly
                                    highly skilled electricians who have the knowledge and expertise to handle all of your electrical needs.  
                            </span>
                        </div>
                        <div className="abt-info">
                            <div className="abt-repair">
                                <div className="abt-img4">
                                    <img src={vector2} alt="" />
                                </div>
                                <span>emergency repairs</span>
                            </div>
                            <div className="abt-wiring">
                                <div className="abt-img5">
                                    <img src={pic20} alt="" />
                                </div>
                                <span>rewiring and check up</span>
                            </div>
                        </div>
                        <div className="abt-info2">
                            <div className="abt-icons">
                                <UilCheck />
                                <UilCheck />
                                <UilCheck />
                                <UilCheck />
                            </div>
                            <div className="abt-check">
                                <span>Available at hours of the day to respond to 
                                    all your electrical needs.
                                </span>
                                <span>Electrical repairs, installations, upgrades
                                    and maintainance services.
                                </span>
                                <span>High standards of safety, quality, and professionalism.</span>
                                <span>Provision of exceptional customer service.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;