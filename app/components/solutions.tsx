"use client"
import { MoveRight } from "lucide-react";
import ButtonFill from "../modules/button-fill";
import { motion, scale } from "motion/react"
import Image from "next/image";
import { linearGradient, mask } from "motion/react-client";
export default function Solutions() {
    return (
        <motion.section
            initial={{ opacity: 0, translateY: "60px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.3 }}
            className="py-16 bg-gray-100 relative overflow-hidden"
            id="posSystems"
            >
            
            <div className="container mx-auto px-2">
                <div className="flex flex-col gap-12">
                    <div className="">
                        <div className="font-sans [font-variation-settings:'wdth'_105] font-[850] text-black">
                                POS Software We Deploy
                        </div>
                        <h2 className="font-sans mt-0 text-4xl tracking-normal sm:text-7xl text-pretty text-primary font-extrabold [font-variation-settings:'wdth'_75] mb-3 uppercase">
                            Best-in-Class POS Platforms
                        </h2>
                        <p className="font-sans mt-1 text-md font-medium text-pretty text-black/70 sm:text-lg/8 mb-0 max-w-3xl">
                            We are certified partners for three of the most powerful and proven POS platforms available — each purpose-built for specific business environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <div className="basis-1/2 bg-white/90 border-bs-2 border-primary backdrop-blur-lg p-6 text-left">
                            <h3 className="font-sans text-4xl [font-variation-settings:'wdth'_95] font-[900] mb-2 text-black uppercase">RMH POS</h3>
                            <div className="font-sans [font-variation-settings:'wdth'_85] font-[550] text-lg text-primary mb-4">
                                Retail Management Hero
                            </div>
                            
                            <ul className="list-style-box font-[540] font-sans text-black text-base/6 tracking-wide">
                                <li>Deep inventory management with purchase orders and receiving</li>
                                <li>Customer loyalty programs and gift card management</li>
                                <li>Multi-store and headquarters management capabilities</li>
                                <li>Robust reporting and analytics dashboard</li>
                                <li>Wide range of peripheral hardware compatibility</li>
                                <li>Ideal for specialty retail, apparel, convenience, and grocery</li>
                            </ul>
                        </div>
                        <div className="basis-1/2 bg-white/90 border-bs-2 border-primary backdrop-blur-lg p-6 text-left">
                            <h3 className="font-sans text-4xl [font-variation-settings:'wdth'_95] font-[900] mb-2 text-black uppercase">Aldelo POS</h3>
                            <div className="font-sans [font-variation-settings:'wdth'_85] font-[550] text-lg text-primary mb-4">
                                Cloud · Mobile · AI-Powered Restaurant POS
                            </div>
                            
                            <ul className="list-style-box font-[540] font-sans text-black text-base/6 tracking-wide">
                                <li>Cloud-based platform — access data from anywhere, anytime</li>
                                <li>Mobile POS on iPad and Android for tableside ordering</li>
                                <li>Online ordering, delivery, and QR code menu integration</li>
                                <li>AI-powered customer engagement and loyalty tools</li>
                                <li>Kitchen display system (KDS) integration</li>
                                <li>Ideal for restaurants, bars, cafes, and food trucks</li>
                            </ul>
                        </div>
                        <div className="basis-1/2 bg-white/90 border-bs-2 border-primary backdrop-blur-lg p-6 text-left">
                            <h3 className="font-sans text-4xl [font-variation-settings:'wdth'_95] font-[900] mb-2 text-black uppercase">Clover</h3>
                            <div className="font-sans [font-variation-settings:'wdth'_85] font-[550] text-lg text-primary mb-4">
                                POS Solutions for Food & Beverage and Retail
                            </div>
                            
                            <ul className="list-style-box font-[540] font-sans text-black text-base/6 tracking-wide">
                                <li>Sleek, modern hardware: Station, Mini, Flex, and Go options</li>
                                <li>Integrated payment processing built into the ecosystem</li>
                                <li>Extensive app marketplace for custom functionality</li>
                                <li>Employee management, scheduling, and tip tracking</li>
                                <li>Real-time sales reporting and analytics</li>
                                <li>Ideal for restaurants, cafes, food trucks, and retail boutiques</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}