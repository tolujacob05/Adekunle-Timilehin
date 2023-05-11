import React, { useState, useRef } from "react";
import "./Popup1.css";
import EmailJS from '@emailjs/browser';

const Popup1 = ({open, onClose}) => { 

    const form = useRef();

    const [ done, setDone ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        EmailJS.sendForm( 'service_0tm0e5m', 'template_wbetp1o', form.current, 'v3p2euTutYT7-oTpJ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

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
                    <form className="message"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input type="text" id="name" name="user_name" placeholder="Enter your Name" />
                        <input type="email" id="email" name="user_email" placeholder="johndoe@gmail.com" />
                        <input type="phonenumber" id="number" name="user_phonenumber" placeholder="08011223344" />
                        <textarea type="text" id="message" name="message" placeholder="I will like to hire you for a job 
                            on electrical and solar installation in my newly acquired apartment" 
                        />
                        {/* <input type="submit" value="send" className="button" /> */}
                        <div className="btn6">
                            <button>send message</button>
                            <div className="pop-msg">
                                <span>{done && "Thanks for contacting Timmy Electrical. We're to serve and give the best customer service ever experienced"  }</span>
                            </div>
                        </div>
                        
                    </form>
                    {/* <div className="btn6">
                            <button>send message</button>
                            <span>{done && "Thanks for contacting me! I'll be in touch"}</span>
                        </div> */}
                </div>
            </section>
        </>
    )
};

export default Popup1;