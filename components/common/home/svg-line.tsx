'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SVGLineView = ({ className }: {
    className: string;
}) =>
{
    // Ref to track when the SVG enters the viewport
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

    return (
        <motion.svg
            ref={ref}
            width="1435"
            height="525"
            className={className}
            viewBox="0 0 1435 525"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate when in view
        >
            <motion.path
                d="M-24.9019 516.642C416.448 201.708 182.939 -80.3013 142.355 33.312C92.7306 172.231 295.911 375.433 577.048 185.031C745.965 70.6312 818.275 166.433 941.202 227.429C1074.95 293.793 1112.95 2.91093 1435.9 28.4773"
                stroke="#F4BDFC"
                strokeWidth="15"
                strokeLinecap="round"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 2, ease: "easeInOut" }} // 2-second smooth animation
            />
        </motion.svg>
    );
};

export default SVGLineView;