import React from "react";
import "./Project.css";
import pic1 from "../../img/pic1.jpeg";
import pic2 from "../../img/pic2.jpg";
import pic9 from "../../img/pic9.jpg";

const Project = () => {
    return (
        <>
            <section className="project-section">
                <div className="pr-head">
                    <span>some of our works</span>
                    <span>Along the years since operation, starting from small commercial building
                        owners like shops, kiosks, etc to wiring homes like bungalow, duplex, 2-3 storey 
                        buildings to working with companies and estate agencies below are 
                        our few clients from the many clients that couldn't be mentioned.
                    </span>
                    <span>our clients</span>
                </div>
                <div className="pr-work">
                    <div className="pr1">
                        <span>florish home and blossom estate</span>
                        <span>This project was based on wiring of the whole house 
                            and installation of few electrical appliances.
                        </span>
                        <span>see pictures</span>
                    </div>
                    <div className="pr-img">
                        <img src={pic1} alt="" />
                    </div>
                </div>
                <div className="pr-work">
                    <div className="pr1">
                        <span>bancom estate</span>
                        <span> Here, the job done was a easy one as what the client wanted was just wiring 
                            of the house and supply of electrical appliances.
                        </span>
                        <span>see pictures</span>
                    </div>
                    <div className="pr-img">
                        <img src={pic2} alt="" />
                    </div>
                </div>
                <div className="pr-work">
                    <div className="pr1">
                        <span>EFAB metropolis estate</span>
                        <span>On this project we worked on the installation of solar panel, inverter, wiring of 
                            the whole house and supply of electrical appliances.
                        </span>
                        <span>see pictures</span>
                    </div>
                    <div className="pr-img2">
                        <img src={pic9} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;