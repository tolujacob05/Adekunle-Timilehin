import React from "react";
import "./Logo.css";
import vector7 from "..//img/vector7.png"
import vector5 from "..//img/vector5.png";
// import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <>
        <div>
            {/* <Link to={"/frontpage"}> */}
                <div className="logo-cont">
                    <div className="logo-img">
                        <img src={vector7} alt="" />
                    </div>
                    <div className="logo-text">
                        <div className="logo-name">
                            <span>
                                timmy
                            </span>
                            <div className="logo-vector">
                                <img src={vector5} alt="" />
                            </div>
                        
                        </div>
                        <span>electrical</span>
                    </div>
                </div>
            {/* </Link> */}
        </div>
        </>
    )
}

export default Logo;