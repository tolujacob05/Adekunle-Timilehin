import React from "react";
import "./Popup3.css";
import pic2 from "../../img/pic2.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";
import pic7 from "../../img/pic7.jpg";

const Popup3 = ({open, onClose}) => {
    if(!open) return null;


    return (
        <>
            <section className="pop3">
                <span onClick={onClose}>close</span>
                <div className="pop3-img">
                    <img src={pic2} alt="" />
                </div>
                <div className="pop3-img">
                    <img src={pic4} alt="" />
                </div>
                <div className="pop3-img">
                    <img src={pic5} alt="" />
                </div>
                <div className="pop3-img">
                    <img src={pic6} alt="" />
                </div>
                <div className="pop3-img">
                    <img src={pic7} alt="" />
                </div>
            </section>
        </>
    )


}

export default Popup3;