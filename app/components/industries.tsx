"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Industries(){
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })
    
    


    const items = [
        { id: 1, icon: '🛒', label: "Grocery", description: "Full-service & self-checkout", image: "/Grocery.jpg" },
        { id: 2, icon: '🍽️', label: "Restaurant", description: "Fine dining to quick service", image: "/Restaurant.jpg" },
        { id: 3, icon: '👗', label: "Apparel & Retail", description: "Boutiques to multi-location chains", image: "/Apparel-Retail.jpg" },
        { id: 4, icon: '⛽', label: "Convenience Stores", description: "C-stores with fuel integration", image: "/Convenience-Stores.jpg" },
        { id: 5, icon: '🍺', label: "Bars & Nightlife", description: "Tab management & speed", image: "/Bars-Nightlife.jpg" },
        { id: 6, icon: '💆', label: "Salon & Spa", description: "Appointment & retail POS", image: "/Salon-Spa.jpg" },
        { id: 7, icon: '💊', label: "Pharmacy", description: "Prescription & OTC retail", image: "/Pharmacy.jpg" },
        { id: 8, icon: '🏨', label: "Hospitality", description: "Hotel F&B and gift shops", image: "/Hospitality.jpg" },
        { id: 9, icon: '🌿', label: "Natural & Specialty", description: "Health food & organic", image: "/Natural-Specialty.jpg" },
        { id: 10, icon: '📦', label: "Wholesale & Distributor", description: "Inventory-heavy operations", image: "/Wholesale-Distributor.jpg" },
    ]
    const ITEM_WIDTH = 400
    const GAP = 30

    // Move from first item centered to last item centered
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

    return (
        
        <section id="industries" className="bg-white py-16 relative isolate">
            
            <div className="mx-auto">
                
    
                <div ref={containerRef} className="scroll-container">
                    <div className="sticky-wrapper h-[100vh] max-w-[100%] lg:max-w-[800px] 2xl:max-w-[760px] w-full mx-auto py-24 sm:py-24 overflow-hidden lg:overflow-visible">
                        <div className="flex flex-col gap-12 mb-10  px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <div className="font-sans [font-variation-settings:'wdth'_105] font-[850] text-primary">
                                        Who We Serve
                                </div>
                                <h2 className="font-sans mt-0 text-4xl tracking-normal sm:text-7xl text-pretty text-black font-extrabold [font-variation-settings:'wdth'_75] mb-3 uppercase">
                                    Industries We Specialize In
                                </h2>
                                <p className="font-sans mt-1 text-md font-medium text-pretty text-black/70 sm:text-lg/8 mb-0 max-w-3xl mx-auto">
                                    Our solutions are configured for the real-world demands of your industry — not generic, one-size-fits-all setups.
                                </p>
                            </div>
                        </div>

                        <motion.div className="gallery gap-8" style={{ x }}>
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="gallery-item w-[300px] h-[350px] lg:w-[400px] h-[350px] 2xl:w-[450px] 2xl:h-[550px] rounded-2xl relative overflow-hidden"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.label}
                                        height={550}
                                        width={450}
                                        loading="lazy"
                                        className="absolute top-0 left-0 -z-10 w-full h-full"
                                        />
                                    <span className="font-sans font-[700] text-xl w-[45px] h-[45px] bg-primary text-white flex items-center justify-center rounded-4xl ml-4 mt-4">{item.id < 10 ? `0${item.id}` : item.id}</span>
                                    <div className="item-content absolute p-8 bottom-0 left-0 right-0">
                                        <h2 className="font-sans font-[900] text-3xl text-white mb-2">{item.label}</h2>
                                        <p className="font-sans font-[400] text-1xl text-white mb-4">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}