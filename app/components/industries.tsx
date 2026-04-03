"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useEffect, useState } from "react"

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [scrollDistance, setScrollDistance] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Dynamic calculation based on actual width
  useEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return

      const totalWidth = trackRef.current.scrollWidth
      const viewportWidth = window.innerWidth

      const distance = totalWidth - viewportWidth
      setScrollDistance(distance > 0 ? distance : 0)
    }

    calculate()
    window.addEventListener("resize", calculate)

    return () => window.removeEventListener("resize", calculate)
  }, [])

  // Horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  // Dynamic height (important)
  const containerHeight = scrollDistance + (typeof window !== "undefined" ? window.innerHeight : 0)

  const items = [
    { id: 1, label: "Grocery", description: "Full-service & self-checkout", image: "/Grocery.jpg" },
    { id: 2, label: "Restaurant", description: "Fine dining to quick service", image: "/Restaurant.jpg" },
    { id: 3, label: "Apparel & Retail", description: "Boutiques to chains", image: "/Apparel-Retail.jpg" },
    { id: 4, label: "Convenience Stores", description: "C-stores with fuel", image: "/Convenience-Stores.jpg" },
    { id: 5, label: "Bars & Nightlife", description: "Fast tab handling", image: "/Bars-Nightlife.jpg" },
    { id: 6, label: "Salon & Spa", description: "Appointments & POS", image: "/Salon-Spa.jpg" },
    { id: 7, label: "Pharmacy", description: "Prescription & retail", image: "/Pharmacy.jpg" },
    { id: 8, label: "Hospitality", description: "Hotels & shops", image: "/Hospitality.jpg" },
    { id: 9, label: "Natural & Specialty", description: "Organic & health", image: "/Natural-Specialty.jpg" },
    { id: 10, label: "Wholesale", description: "Inventory heavy", image: "/Wholesale-Distributor.jpg" },
  ]


  const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

  return (
    <section id="industries" className="bg-white py-16 relative isolate">
      <div
        ref={containerRef}
        style={mounted ? { height: containerHeight } : undefined}
        className="relative"
      >
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

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

          {/* Horizontal Scroll Track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 px-6"
          >
            {items.map((item) => (
                <div
                    key={item.id}
                    className="gallery-item w-[300px] h-[350px] lg:w-[350px] h-[400px] 2xl:w-[450px] 2xl:h-[550px] rounded-2xl relative overflow-hidden"
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
    </section>
  )
}