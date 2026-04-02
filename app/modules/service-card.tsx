import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, scale } from "motion/react";
import { useState } from "react"
import ServicesForm from "../modules/servicesForm";
import Modal from "./modal";

type Props = {
  index: number;
  subtitle?: string;
  title: string;
  description: string;
  image: string | StaticImageData;
};
const cardVariants = {
  hover: {
    scale: 1.05,
  },
};

const imageVariants = {
  hover: {
    scale: 1.2,
  },
};

export default function ServiceCard({ title, description, image, index, subtitle }: Props) {
    const [open, setOpen] = useState(false)
    const [selectedService, setSelectedService] = useState("")
    return (
        <>
        <motion.div 
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="bg-white/10 backdrop-blur-lg flex flex-col items-center text-center relative overflow-hidden font-sans">
            <motion.div
                className="absolute top-0 left-0 text-primary text-left lg:max-w-[70%] z-10 p-6"
            >
                <div className="font-sans [font-variation-settings:'wdth'_75] mb-2 text-white text-md font-[500] uppercase tracking-wider">0{index} {subtitle}</div>
                <h3 className="text-4xl font-[850] mb-2 text-white [font-variation-settings:'wdth'_100]">{title}</h3>
            </motion.div>
            
            <div
            className="overflow-hidden">
                <motion.div
                    variants={{
                    rest: { scale: 1.1, filter: "brightness(0.4)" },
                    hover: { scale: 1.3, filter: "brightness(0.7)" },
                    }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="filter "
                >
                    <Image
                        src={image}
                        alt={title}
                        width={625}
                        height={400}
                        className="h-100 object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>
            <motion.div
                className="p-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white z-10 text-left"
            >
                <motion.p 
                    variants={{
                    rest: { opacity: "0" },
                    hover: { opacity: "1" },
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-white duration-300 transition-opacity text-lg">
                        {description}                    
                </motion.p>
                <motion.button 
                    variants={{
                    rest: { padding: "10px 20px" },
                    hover: { padding: "10px 50px" },
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-blue-500 hover:text-blue-700 px-6 py-3 hover:px-10 bg-primary text-white rounded-lg mt-4 inline-flex items-center gap-2 cursor-pointer"
                    data-service={title}
                    onClick={(e) => {
                        const service = (e.currentTarget as HTMLButtonElement).dataset.service
                        setSelectedService(service || "")
                        setOpen(true)
                    }}>
                    <ArrowRight className="text-white" />
                </motion.button>
            </motion.div>
        </motion.div>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div className="flex justify-between gap-4 mb-6">
                <h2 className="text-4xl lg:text-6xl text-white font-sans font-[700] mb-2 [font-variation-settings:'wdth'_75] uppercase">Get Quote</h2>
                <button
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-white rounded-lg cursor-pointer "
                > X </button>
            </div>
            <ServicesForm  selectedService={selectedService}/>
        </Modal>
    </>
    );
}