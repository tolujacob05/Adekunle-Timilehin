import React from "react";
import "./Loader.css";
import { easeIn, motion } from "framer-motion";

const loaderVariants = {
    animateOne: {
        x: [-20, 20],
        y: [10, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

const Loader = () => {
    return (
        <>
            <motion.div
                className="loader"
                variants={loaderVariants}
                animate="animateOne"
            >
               
            </motion.div>
        </>
    )
}

export default Loader;