'use client'
import Image from "next/image";
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from "motion/react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
      const previous = scrollY.getPrevious() ?? 0
      if (current > previous && current > 150) {
          setHidden(true)
      } else {
          setHidden(false)
      }
  })
  return (
    <>
    <motion.header 
      animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="font-sans top-0 z-50 bg-white/10 backdrop-blur-lg fixed w-full">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <a href="/">
                <Image
                    src="/logo.png"
                    alt="POS Integrated Logo"
                    width={237}
                    height={60}
                    loading="eager"
                />
            </a>
        </div>

        <div className="hidden lg:flex gap-8 items-center font-sans font-[750] text-sm uppercase">
          <Link href="#services" className="text-white hover:text-primary transition-colors  ">Services</Link>
          <Link href="#posSystems" className="text-white hover:text-primary transition-colors ">POS Systems</Link>
          <Link href="#industries" className="text-white hover:text-primary transition-colors ">Industries</Link>
          <Link href="#why" className="text-white hover:text-primary transition-colors ">Why Us</Link>
          <a href="tel:888-770-1008" className="px-6 py-3 bg-primary text-white text-sm rounded-md font-[750] hover:bg-accent/100 transition-bg uppercase">
            Call Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors bg-white/70 border border-primary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link href="#services" className="block text-sm text-white hover:text-accent transition-colors">Services</Link>
            <Link href="#posSystems" className="block text-sm text-white hover:text-accent transition-colors">POS Systems</Link>
            <Link href="#industries" className="block text-sm text-white hover:text-accent transition-colors">Industries</Link>
            <Link href="#why" className="block text-sm text-white hover:text-accent transition-colors">Why Us</Link>
            <a href="tel:888-770-1008" className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:opacity-90 transition-opacity">
              Call Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
    </>
  )
}