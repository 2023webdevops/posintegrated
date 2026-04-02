"use client";
import { motion, scale } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  label: string;
  link: string;
  bgColor: string;
  className: string
  icon?: string;
};
export default function ButtonFill({ label, link, bgColor, className, icon }: Props) {
    const colors = {
        primary: "primary",
        accent: "accent",
        pretty: "pretty",
    };
    

    return (
        <motion.a
            initial={{ opacity: 0, translateY: "60px" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{ scale: 1.05 }}
            className={`inline-flex font-sans font-[400] tracking-wide text-md px-6 py-3 border-2 border-${bgColor} bg-${bgColor} text-white rounded-lg hover:bg-${bgColor}/90 transition-colors text-center ${className}`}
            href={link}>
            <span>{!label || label.trim() === "" ? "Contact Us" : label}</span> {icon} 
        </motion.a>
    );
}