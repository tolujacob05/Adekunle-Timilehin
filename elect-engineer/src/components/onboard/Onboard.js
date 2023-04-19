import React from "react";
import "./Onboard.css";
import { Link } from 'react-router-dom'
import vid3 from "../../img/vid3.mp4";
import Loader from "../loader/Loader";
import Logo from "../../logo/Logo";


const Onboard = () => {
    return (
        <>
            <section className="onboard-container">
                <div className='vid'>
                    <div className='overlay'></div>
                    <video src={vid3} autoPlay loop muted />
                </div>
                <div className="logo">
                    <Logo />
                </div>
                <div className="yoyo">
                    <Loader />
                </div>
                <Link to={"/frontpage"}>
                    <div className="btn3">
                        <button>
                            click me
                        </button>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Onboard;
