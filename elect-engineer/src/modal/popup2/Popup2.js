import React from "react";
import "./Popup2.css";
import pic1 from "../../img/pic1.jpeg"
import pic3 from "../../img/pic3.jpg"
import pic8 from "../../img/pic8.jpg"
import pic10 from "../../img/pic10.jpg"

const Popup2 = ({open, onClose}) => {
    if(!open) return null;


    return (
        <>
            <section className="pop2" >
                <span onClick={onClose}>close</span>
                <div className="pop-img1">
                    <img src={pic3} alt="" />
                </div>
                <div className="pop-img1">
                    <img src={pic8} alt="" />
                </div>
                <div className="pop-img1">
                    <img src={pic1} alt="" />
                </div>
                <div className="pop-img1">
                    <img src={pic10} alt="" />
                </div>
                <div className="pop-img1">
                    <img src={pic1} alt="" />
                </div>
            </section>
        </>
    )
}

export default Popup2;