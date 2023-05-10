import React from "react";
import "./Popup1.css";

const Popup1 = ({open, onClose}) => {
    if(!open) return null;


    return (
        <>
            <section onClick={onClose} className="overlay">
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="pop-container">
                    <span onClick={onClose}>X</span>
                    <div className="main">
                        <span>What do you want done?</span>
                        <span>wiring?</span>
                        <span>electricity or solar installation?</span>
                        <span>suppply of electrical or solar accessories?</span>
                        <span>We are here to provide that at every working hour
                            of the day.
                        </span>
                    </div>
                    <span>get in touch with us </span>
                    <div className="message">
                        <input type="text" id="name" placeholder="Enter your Name" />
                        <input type="email" id="email" placeholder="johndoe@gmail.com" />
                        <input type="phonenumber" id="number" placeholder="08011223344" />
                        <input type="text" id="message" placeholder="I will like to hire you for a job 
                            on electrical and solar installation in my newly acquired apartment" />
                    </div>
                    <div className="btn6">
                        <button>send message</button>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Popup1;