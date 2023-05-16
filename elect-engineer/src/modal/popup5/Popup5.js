import React, { useRef, useState} from "react";
import "./Popup5.css";
import Logo from "../../logo/Logo";

const Popup5 = ({open, onClose}) => {

    const form = useRef();


    if(!open) return null;
    return (
        <>
            <section>
                <div className="pop5">
                    <span onClick={onClose}>close</span>
                    <div className="pop5-cont">
                        <div className="pop5-txt">
                            <h1>Let's work together</h1>
                            <span>Let us help you make your home shine brighter when you're and when you're not there</span>
                            <span>Fill out the following form and we will get back to you in the next 24hours</span>
                        </div>
                        <div className="pop5-logo">
                            <Logo />
                        </div>
                    </div>
                    <div className="pop5-form">
                        <form>
                            <span>Enter your name</span>
                            <input type="text" id="name" name="user_name" placeholder="Enter your Name" />
                            <span>Enter email address</span>
                            <input type="text" id="email" name="email" placeholder="example@gmail.com" />
                            <span>Enter your phone number</span>
                            <input type="text" id="phonenumber" name="user_phonenumber" placeholder="+23481223344" />
                            <span>What services are you looking for</span>
                            <select className="option">
                                <option></option>
                                <option>House wiring</option>
                                <option>Solar installation</option>
                                <option>Fixing of electrical issues e.g spoilt socket, spoilt appliances e.t.c</option>
                                <option>Buy electrical and solar accesories</option>
                            </select>
                            <span>What have you budgeted for this project/service</span>
                            <select className="option">
                                <option></option>
                                <option>₦10,000 - ₦50,000</option>
                                <option>₦50,000 - ₦100,000</option>
                                <option>₦100,000 - ₦500,000</option>
                                <option>₦,000,000 - others</option>
                            </select>
                            <span>Give a brief detail about the project/work</span>
                            <textarea type="text" id="project" name="project" placeholder="Please type your project description" />

                            <div className="btn7">
                                <button>send message</button>
                                <div className="pop-msg">
                                    <span></span>
                                </div>
                            </div>
                        </form>
                        <div className="pop5-contact">
                            <div className="pop5-dial">
                                <p>reach us</p>
                                <span>08132029294</span>
                                <span>timmyelectrical94@gmail.com</span>
                            </div>
                            <div className="pop5-address">
                                <p>address</p>
                                <span>Behind AMAC market Lugbe, Abuja.</span>
                            </div>
                            <div className="pop5-socials"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popup5;