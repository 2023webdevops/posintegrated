"use client"
import Image from "next/image";
import { motion, scale } from "motion/react"
import { useRef, useEffect, useState } from "react";
import { useAffix } from "../hooks/useAffix";
const navItems = [
  {
    id: "expertImplementation",
    title: "Expert Implementation",
    description:
      "Our team of certified professionals ensures a smooth deployment tailored to your business needs.",
    image: "/john-FlPc9_VocJ4-unsplash.jpg",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support to keep your business running without interruption.",
    image: "/support.jpg",
  },
  {
    id: "provenTrackRecord",
    title: "Proven Track Record",
    description:
      "Over 25 years of serving retail and restaurant businesses with reliable solutions.",
    image: "/john-FlPc9_VocJ4-unsplash.jpg",
  },
  {
    id: "integratedSolutions",
    title: "Integrated Solutions",
    description:
      "Single vendor for POS, payments, CCTV, signage, and web development—simplifying your operations.",
    image: "/john-FlPc9_VocJ4-unsplash.jpg",
  },
  {
    id: "localExpertise",
    title: "Local Expertise",
    description:
      "Based in Syracuse, NY with deep knowledge of local market needs and regulations.",
    image: "/john-FlPc9_VocJ4-unsplash.jpg",
  },
  {
    id: "futureReady",
    title: "Future-Ready",
    description:
      "Modern technology platforms that scale with your business growth and evolving needs.",
    image: "/john-FlPc9_VocJ4-unsplash.jpg",
  },
];
export default function WhyChooseUs() {
    const ref = useRef<HTMLDivElement>(null);
    const isAffixed = useAffix(100); // trigger after 200px
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const sections = navItems.map((item) =>
            document.getElementById(item.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                const index = navItems.findIndex(
                    (item) => item.id === entry.target.id
                );
                if (index !== -1) setActiveIndex(index);
                }
            });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
    return (
        <motion.section 
            initial={{ opacity: 0, translateY: "60px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.1 }}
            className="py-16 font-sans bg-white"
            >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  flex flex-col gap-8">
                <header>
                    <h2 className="text-6xl font-extrabold mb-6">Why Choose<span className="text-secondary"> Integrated</span> POS</h2>
                    <p className="text-lg text-black-300 mb-6">Partner with a trusted leader in point of sale solutions.</p>
                </header>
            </div>
            <div className="grid grid-cols-[1fr_96rem_1fr] lg:grid-cols-[1fr_80rem_1fr] md:grid-cols-[1fr_48rem_1fr] overflow-hidden">
                <div className="w-full col-start-2 col-end-4 grid grid-cols-[25%_1fr] gap-4 lg:gap-10 xl:gap-[100px] mx-auto pl-4 sm:pl-6 lg:pl-8  flex flex-col">
                    <div 
                        ref={ref}
                        className={`sticky top-24 self-start ${isAffixed ? "bg-white" : ""} rounded-lg transition-all duration-300`}>
                        <nav className="whyusnav flex flex-col">
                        {navItems.map((item, index) => (
                            <div
                            key={item.id}
                            className={`whyusnav-item py-5 border-b border-gray-200 cursor-pointer ${
                                activeIndex === index ? "active" : ""
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);

                                document
                                .getElementById(item.id)
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            >
                            <a
                                href={`#${item.id}`}
                                className={`text-2xl transition-colors ${
                                activeIndex === index
                                    ? "font-semibold text-secondary"
                                    : "text-foreground hover:text-secondary/70"
                                }`}
                            >
                                {item.title}
                            </a>

                            <p
                                className={`mt-2 transition-all duration-300 ${
                                activeIndex === index ? "block" : "hidden"
                                }`}
                            >
                                {item.description}
                            </p>
                            </div>
                        ))}
                        </nav>
                    </div>
                    <div className="scroll-container h-full">
                        {navItems.map((item) => (
                            <motion.div
                            key={item.id}
                            id={item.id}
                            initial={{ opacity: 0, translateY: "60px" }}
                            whileInView={{ opacity: 1, translateY: "0" }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="snap-start h-screen relative"
                            >
                            <Image
                                alt={item.title}
                                src={item.image}
                                fill
                                className="object-cover"
                            />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}