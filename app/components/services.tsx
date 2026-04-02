"use client";
import { motion, scale } from "motion/react"
import ServiceCard from "../modules/service-card";
const services = [
  { image:'/point-of-sale-system.jpg', subtitle: 'Retail · Restaurant · Grocery · Hospitality', title: 'Point of Sale Systems', description: 'Advanced POS software for retail and restaurants with inventory management, reporting, and analytics.' },
  { image:'/payment-processing.jpg', subtitle: 'Integrated · Competitive · Reliable', title: 'Credit Card Processing', description: 'Secure credit card processing with multiple payment methods and real-time transaction tracking.' },
  { image:'/mobile-ready-pos-system.jpg', subtitle: 'Full-Service · Self-Checkout · Express', title: 'Checkout Lanes', description: 'Professional surveillance solutions with cloud backup and remote monitoring capabilities.' },
  { image:'/cctv-systems.jpg', subtitle: 'Surveillance · Loss Prevention · Remote Monitoring', title: 'CCTV Security Systems', description: 'Eye-catching digital displays and menu boards with remote content management.' },
  { image:'/digital-signage.jpg', subtitle: 'Menu Boards · Promotions · Customer Displays', title: 'Digital Signage', description: 'Custom website solutions to enhance your online presence and reach more customers.' },
  { image:'/web-devlopment.jpg', subtitle: 'Professional · SEO-Ready · Mobile-First', title: 'Website Development', description: 'Mobile-ready POS systems and apps for on-the-go management and payments.' },
  
]
export default function Services() {
    return (
        <motion.section 
            initial={{ opacity: 0, translateY: "60px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            viewport={{ once: true, amount: 0.3 }}
            id="services"
            className="py-16 bg-black">
            <div className="container mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, translateY: "60px" }}
                    animate={{ opacity: 1, translateY: "0" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mx-auto"
                >
                    <h2 className="font-sans mt-0 text-4xl tracking-normal sm:text-7xl text-pretty text-white font-extrabold [font-variation-settings:'wdth'_75] uppercase mb-3 uppercase">
                        Comprehensive POS Services
                    </h2>
                    <div className="font-sans mt-1 text-md font-medium text-pretty text-white sm:text-lg/8  mb-16">
                        A comprehensive suite of technology solutions designed to power every aspect of your business operations.
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> 
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, translateY: "60px" }}
                            animate={{ opacity: 1, translateY: "0" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-white"
                        >
                            <ServiceCard key={service.title} subtitle={service.subtitle} title={service.title} description={service.description} image={service.image} index={services.indexOf(service) + 1}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}