import React, { useRef, useState} from "react";
import "./Popup5.css";
import Logo from "../../logo/Logo";
import EmailJS from '@emailjs/browser';
import { UilWhatsapp } from '@iconscout/react-unicons'

const Popup5 = ({open, onClose}) => {

    const form = useRef();

    const [ emaildone, setEmaildone ] = useState(false);

    const email = (e) => {
        e.preventDefault();

        EmailJS.sendForm( 'service_0tm0e5m', 'template_gyex77f', form.current, '-Umlp0pGn66KJvkD9')
        .then((result) => {
            console.log(result.text);
            setEmaildone(true);
            // form.location.reload();
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    }

    const [ textareaheight, setTextareaheight] = useState(1);

    const handleChange = (event) => {
        console.log(event.target.rows);
        const height = event.target.scrollHeight;
        const rowHeight = 15;
        const trows = Math.ceil(height / rowHeight) - 1;
        
        if (trows, textareaheight ) {
            setTextareaheight(trows);
        }
    }


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
                        <form ref={form} onSubmit={email}>
                            <span>Enter your name</span>
                            <input type="text" id="name" name="user_name" placeholder="Enter your Name" />
                            <span>Enter email address</span>
                            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com" />
                            <span>Enter your phone number</span>
                            <input type="text" id="phonenumber" name="user_phonenumber" placeholder="+23481223344" />
                            <span>What services are you looking for</span>
                            <select className="option" id="service" name="user_service">
                                <option></option>
                                <option>House wiring</option>
                                <option>Solar installation</option>
                                <option>Fixing of electrical issues e.g spoilt socket, spoilt appliances e.t.c</option>
                                <option>Buy electrical and solar accesories</option>
                            </select>
                            <span>What have you budgeted for this project/service</span>
                            <select className="option" id="price" name="user_price">
                                <option></option>
                                <option>₦10,000 - ₦50,000</option>
                                <option>₦50,000 - ₦100,000</option>
                                <option>₦100,000 - ₦500,000</option>
                                <option>₦1,000,000 - others</option>
                            </select>
                            <span>Give a brief detail about the project/work</span>
                            <textarea rows={textareaheight} onChange={handleChange} type="text" id="project" name="project" placeholder="Please type your project description" />

                            <div className="btn7">
                                <button>send message</button>
                                <div className="pop-msg">
                                    <span>{emaildone && "Thanks for contacting Timmy Electrical. We're to serve and give the best customer service ever experienced"}</span>
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
                            <div className="pop5-socials">
                                <p>socials</p>
                                <a rel="#" href="https://wa.me/2348132029294">
                                    <UilWhatsapp color='#25D366'/>
                                </a>
                                <a rel="#" href="https://www.tiktok.com/MOSESTIMILEYIN">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popup5;