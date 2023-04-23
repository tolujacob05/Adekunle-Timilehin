import React from "react";
import "./Onboard.css";
import { Link } from 'react-router-dom'
import vid3 from "../../img/vid3.mp4";
// import Loader from "../loader/Loader";
import Typical from "react-typical";
import Logo from "../../logo/Logo";
// import Logo from "../../logo/Logo";


const Onboard = () => {
    return (
        <>
            <section className="onboard-container">
                <div className='vid'>
                    <div className='overlay'></div>
                    <video src={vid3} autoPlay loop muted />
                </div>
                <div className='text'>
                    <div className="timi">
                        {/* <span>
                            Timi - electrical
                        </span> */}
                        <div>
                            <Logo />
                        </div>
                        
                        <span>
                            welcomes you
                        </span>
                    </div>
                    
                    <p>
                        Here, we offer {''}
                        <Typical 
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'installation services',
                                1000,
                                'wiring services',
                                1000,
                                'distribution of',
                                1000,
                                'solar power compartments and',
                                1000,
                                'parts'
                            ]}
                        />
                    </p>
                </div>
                {/* <div className="yoyo">
                    <Loader />
                </div> */}
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
