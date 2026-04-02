'use client'

import { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });

            if (res.ok) {
            setSubmitted(true);
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setSubmitted(false);
            }, 3000);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <section id="contact" className="font-sans relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20">
            <div
                className="absolute inset-0 -z-10 size-full bg-gray-900/50"
                >
                <Image
                    src={'/pexels-anntarazevich-5242829.jpg'}
                    alt=''
                    fill={true}
                    placeholder="blur" 
                    loading="lazy"
                    blurDataURL="..."
                    className="object-cover object-center opacity-100"
                />
            </div>
            <div className="mx-auto px-6 lg:px-12">
                <h2 className="text-white text-4xl sm:text-7xl font-extrabold text-center mb-4 max-w-xl mx-auto [font-variation-settings:'wdth'_75] uppercase text-shadow-lg">Ready to Transform Your Business?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 align-center">
                    
                    

                    <div className="form-container">
                        <div className="lg:max-w-2xl  text-left mb-10">
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Get in Touch</h3>
                            <form onSubmit={handleSubmit} className="">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="text-white text-4xl mb-4">✓</div>
                                    <h4 className="text-white text-xl font-bold mb-2">Thank You!</h4>
                                    <p className="text-white">We'll be in touch shortly.</p>
                                </div>
                                ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-md font-[400] mb-2 text-white">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4  text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-white">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4  text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-white">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4  text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4  text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                                            placeholder="Your business"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-6 py-4  text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                                            placeholder="Tell us about your needs..."
                                        ></textarea>
                                    </div>
                                    
                                    <div className='text-right'>
                                        <button
                                        type="submit"
                                        className="px-6 py-4 bg-accent text-sm text-white rounded-4xl font-semibold hover:opacity-90 uppercase transition-opacity"
                                        >
                                        Send Message
                                        </button>
                                    </div>
                                </div>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="text-left flex flex-col justify-end items-end">
                        
                        
                        <div className="my-0 md:my-10 flex flex-col gap-6 w-full md:w-auto">
                            <div className="flex align-center gap-x-2 px-10 py-3 rounded-4xl bg-white/30 hover:bg-white/40 transitin-all">
                                <Phone className="stroke-white/80 w-9 h-9 text-gray-300 mr-2 mt-1"/>
                                <a href="tel:888-770-1008" className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
                                    <div className="text-sm text-white/50">Phone</div> 888-770-1008
                                </a>
                            </div>
                            <div className="flex align-center gap-x-2 px-10 py-3 rounded-4xl bg-white/30 hover:bg-white/40">
                                <Mail className="stroke-white/80 w-9 h-9 text-gray-300 mr-2 mt-1"/>
                                <a href="mailto:sales@posintegrated.com" className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
                                    <div className="text-sm text-white/50">Email Us</div> Sales@PosIntegrated.com
                                </a>
                            </div>
                            <div className="flex align-center gap-x-2 px-10 py-3 rounded-4xl bg-white/30 hover:bg-white/40">
                                <MapPin className="stroke-white/80 w-9 h-9 text-gray-300 mr-2 mt-1"/>
                                <a href="#" className="text-md font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
                                    <div className="font=sans text-sm text-white/50">Locate us</div> Syracuse, NY 13210
                                </a>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    )
}