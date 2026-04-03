"use client";
import Image from "next/image";
import ButtonFill from "../modules/button-fill";
import ButtonOutline from "../modules/button-outline";
import { motion, useScroll, useTransform } from "motion/react";

import { useState } from "react"
import Modal from "../modules/modal"

import { useRef } from "react";
import ServicesForm from "../modules/servicesForm";
export default function Hero2() {
    const [open, setOpen] = useState(false)

    const scrollRef = useRef(null)
        //const { scrollYProgress } = useScroll()
        const { scrollYProgress } = useScroll({
            target: scrollRef,
            offset: ["start end", "end start"], 
        });
        const blurFilter = useTransform(
            scrollYProgress,
            [0.5, 1],
            ["blur(0px)", "blur(10px)"]
        )
        const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(2px)"])
        const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    return (
        <>
        <section 
            ref={scrollRef}
            className="bg-black py-20 h-[100vh] relative overflow-hidden flex items-center justify-center">
            <motion.div
                initial={{ scale: 1.9, opacity: 0 }}
                whileInView={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
                viewport={{ once: true, root: scrollRef }} 
                style={{ scale: scale, filter: filter }}
                className="absolute w-full h-full top-0"
            >
                <Image
                    src="/point-of-sale-system.jpg"
                    alt="Business Technology Solutions"
                    fill={true}
                    className="object-cover object-center opacity-100 hidden"
                    loading="eager"
                />
                <video
                    src="/45056-441212901.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full top-0 left-0 object-cover object-center opacity-40"
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, translateY: "60px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true, root: scrollRef }} 
                style={{filter: blurFilter}}
                className="max-w-4xl mx-auto px-4 text-center z-10 relative">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-[900] mb-4 text-white [font-variation-settings:'wdth'_75] uppercase text-shadow-lg">Complete Business Technology Solutions</h1>
                <p className="text-md leading-relaxed text-white font-sans [font-variation-settings:'wdth'_105] max-w-2xl mx-auto mb-8">From Point of Sale systems and credit card processing to CCTV security, digital signage, and website development — POS Integrated is your single-source technology partner for retail, restaurant, grocery, and beyond.</p>
                <div className="flex gap-4 justify-center">
                    <motion.a
                        initial={{ opacity: 0, translateY: "60px" }}
                        animate={{ opacity: 1, translateY: "0" }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex font-sans font-[300] tracking-wide text-md px-8 py-4 border-2 border-primary bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center uppercase cursor-pointer`}
                        onClick={() => setOpen(true)}>
                        <span>Get Started</span> 
                    </motion.a>

                    <ButtonOutline 
                        borderColor="white" 
                        link="#contact" 
                        label="Contact Us" 
                        className="px-8 py-4 text-md font-[300] uppercase"/>
                </div>
            </motion.div>
        </section>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div className="flex justify-between gap-4 mb-6">
                <h2 className="text-4xl lg:text-6xl text-white font-sans font-[700] mb-2 [font-variation-settings:'wdth'_75] uppercase">Get Quote</h2>
                <button
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-white rounded-lg cursor-pointer "
                > X </button>
            </div>
            <ServicesForm/>
        </Modal>
        </>
    )
}