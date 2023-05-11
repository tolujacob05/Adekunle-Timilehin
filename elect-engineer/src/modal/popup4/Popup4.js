import React from "react";
import "./Popup4.css";
import vid1 from "../../img/vid1.mp4";
import vid2 from "../../img/vid2.mp4";

const Popup4 = ({open, onClose}) => {
    if(!open) return null;


    return (
        <>
            <section className="pop4">
                <span onClick={onClose}>close</span>
                <div className="pop4-img">
                    <video src={vid1} autoPlay loop muted />
                </div>
                <div className="pop4-img">
                    <video src={vid2} autoPlay loop muted />
                </div>
            </section>
        </>
    )
}

export default Popup4;