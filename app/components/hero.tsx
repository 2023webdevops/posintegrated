"use client";
import { motion, scale } from "motion/react"
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Retail & Restaurant Locations', value: '50+' },
  { name: 'Years of Experience', value: '25+' },
  { name: 'Technical Support', value: '24/7' },
  { name: 'Uptime Guarantee', value: '100%' },
]

export default function Hero() {
  return (
    <motion.div
      className="font-sans relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20" 
      data-bgcolor="black" 
      data-textcolor="white" 
      data-accentcolor="accent">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgb(255 85 0 / 6%) 60px, rgb(255 85 0 / 6%) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgb(255 85 0 / 6%) 60px, rgb(255 85 0 / 6%) 61px)` }}
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full bg-gray-900/50"
      >
      </div>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />

      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto container px-6 lg:px-8">
        <div
            className="mx-auto max-w-xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, translateY: "60px" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
            }} 
            className="mt-2 text-4xl tracking-tight sm:text-6xl text-pretty text-white font-extrabold">Enterprise POS Solutions Built for Your Business</motion.h2>
          <motion.p 
            initial={{ opacity: 0, translateY: "60px" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-8 text-md font-medium text-pretty text-gray-300 sm:text-lg/8">
            Trusted by retail and restaurant businesses across New York. Integrated point of sale systems with hardware, payment processing, and digital signage all in one platform.
          </motion.p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <motion.a
                initial={{ opacity: 0, translateY: "60px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-accent text-white  rounded-lg hover:bg-primary/90 transition-colors text-center"
                href="tel:888-770-1008">
                Get Started
            </motion.a>
            <motion.a
                initial={{ opacity: 0, translateY: "60px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-transparent text-white border-2  rounded-lg hover:bg-white/90 hover:text-black transition-colors text-center"
                href="/contact/">
                Learn More
            </motion.a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, translateY: "60px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="flex flex-col-reverse gap-1"
              >
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  )
}
