import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps {
    as?: any;
    animationNum: number;
    timelineRef?: React.RefObject<HTMLElement>;
    customVariants?: any;
    className?: string;
    children: React.ReactNode;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
    as: Component = "div",
    animationNum,
    timelineRef,
    customVariants,
    className,
    children,
}) => {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            variants={customVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: timelineRef, once: true, margin: "-100px" }}
            custom={animationNum}
            className={className}
        >
            {children}
        </MotionComponent>
    );
};
