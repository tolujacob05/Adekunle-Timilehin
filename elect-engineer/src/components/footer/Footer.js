import React from "react";
import "./Footer.css";
import Logo from "../../logo/Logo";
import { UilMapPin } from '@iconscout/react-unicons';
import { UilMobileAndroid } from '@iconscout/react-unicons';
import { UilEnvelopeAlt } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <Logo />
                    <span></span>
                </div>
                <div className="footer-contact">
                    <span>contact us</span>
                    <div className="footer-address">
                        {/* <span>address</span> */}
                        <span>
                            <UilMapPin />
                        </span>
                        {/* <span>:</span> */}
                        <span>
                            Behind AMAC market Lugbe, Abuja.
                        </span>
                    </div>
                    <div className="footer-phone">
                        {/* <span>phone</span> */}
                        <span>
                            <UilMobileAndroid />
                        </span>
                        {/* <span>:</span> */}
                        <span>08132029294</span>
                    </div>
                    <div className="footer-mail">
                        {/* <span>e-mail</span> */}
                        <span>
                            <UilEnvelopeAlt />
                        </span>
                        {/* <span>:</span> */}
                        <span>
                            timmyelectrical94@gmail.com
                        </span>
                    </div>
                </div>
                <div className="footer-service">
                    <span>our services</span>
                    <div className="footer-srv">
                        <span>House wiring</span>
                        <span>Solar installations</span>
                        <span>Parts supply</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;