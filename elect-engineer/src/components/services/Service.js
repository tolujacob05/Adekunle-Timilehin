import React from "react";
import "./Service.css";
import pic12 from "../../img/pic12.png";
import pic13 from "../../img/pic13.png";
import pic14 from "../../img/pic14.png";


const Service = () => {
    return (
        <>
            <section className="service-section">
                <div className="service-text">
                    <span>
                        our services
                    </span>
                    <span>
                        We specialize in house wiring, 
                        solar installation and distribution of solar 
                        and electrical compartments.
                    </span>
                </div>
                <div className="service-types">
                    <div className="types">
                        <img src={pic12} alt="" />
                        <span>
                            House wiring
                        </span>
                        <span>
                            We offer wiring serivices for homes, schools, offices, business organizations e.t.c.
                            Just name it and we will make our services available.
                        </span>
                    </div>
                    <div className="types">
                        <img src={pic13} alt="" />
                        <span>
                            House wiring
                        </span>
                        <span>
                            We offer wiring serivices for homes, schools, offices, business organizations e.t.c.
                            Just name it and we will make our services available.
                        </span>
                        {/* <span>
                            read more {">"}
                        </span> */}
                    </div>
                    <div className="types">
                        <img src={pic14} alt="" />
                        <span>
                            House wiring
                        </span>
                        <span>
                            We offer wiring serivices for homes, schools, offices, business organizations e.t.c.
                            Just name it and we will make our services available.
                        </span>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Service;