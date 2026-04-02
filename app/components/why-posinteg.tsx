"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export default function WhyPosinteg() {
    const scrollRef = useRef(null)
    //const { scrollYProgress } = useScroll()
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end start"], 
    });

    const filter = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    return (
        <section 
            id="why"
            ref={scrollRef}
            className="py-16 bg-background relative overflow-hidden lg-12 md:my-0">
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
                viewport={{ once: true, root: scrollRef }} 
                //style={{ scale: scrollYProgress, originY: 1, originX: 1 }}
                style={{ scale: scale }}
                className="absolute lg:relative h-full -z-10 lg:z-10 top-0 left-0 min-h-[700px] container mx-auto px-16 bg-black  rounded-4xl overflow-hidden w-full">
                <video
                    src="/6683945-hd_1920_1080_25fps.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
            </motion.div>
            <div className="static lg:absolute inset-0 z-10 py-0 lg:py-32 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="flex flex-col gap-4 md:gap-8">
                        <motion.div 
                            initial={{ opacity: 0, translateY: "60px" }}
                            animate={{ opacity: 1, translateY: "0" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            className="whyposinteg_top  space-between">
                            <div className="font-sans [font-variation-settings:'wdth'_105] font-[850] text-accent">
                                Why POS Integrated
                            </div>
                            <h2 className="font-sans mt-0 text-4xl tracking-normal sm:text-7xl text-pretty text-white font-extrabold [font-variation-settings:'wdth'_75] mb-3 uppercase">
                                Your All-In-One Technology Partner
                            </h2>
                            <p className="font-sans mt-1 text-md font-normal text-pretty text-white/70 sm:text-lg/8 mb-0 md:mb-16 max-w-3xl">
                                We don't just sell hardware. We design, install, configure, and support complete business technology ecosystems — so you can focus on running your business.
                            </p>
                        </motion.div>

                        <div className="whyposinteg_bottom mt-0 md:mt-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-sans font-semibold mb-2">End-to-End Solutions</h3>
                                    <p className="text-gray-600 font-sans">One vendor for POS, payments, security cameras, signage, and your website. Fewer calls, faster resolutions, lower overhead.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-sans font-semibold mb-2">Expert Configuration</h3>
                                    <p className="text-gray-600 font-sans">We configure every system to your exact business workflow — not a generic out-of-the-box setup that leaves you guessing.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-sans font-semibold mb-2">Trusted Brands</h3>
                                    <p className="text-gray-600 font-sans">We partner with industry leaders like RMH, Aldelo, Clover, and Advantech-Aures — proven platforms with deep functionality.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-sans font-semibold mb-2">Ongoing Support</h3>
                                    <p className="text-gray-600 font-sans">Our relationship doesn't end at installation. We're here with training, troubleshooting, and upgrades whenever you need us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}