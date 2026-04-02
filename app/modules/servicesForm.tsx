'use client'

import { useState } from 'react'
type Props = {
    selectedService?: string
}
export default function ServicesForm({ selectedService }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: selectedService || '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          })
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }
    

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div className="font-sans text-center py-12">
          <div className="text-white text-4xl mb-4">✓</div>
          <h4 className="text-white text-xl font-bold mb-2">Thank You!</h4>
          <p className="text-white">We'll be in touch shortly.</p>
        </div>
      ) : (
        <div className="font-sans text-left font-[650] space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-md font-[400] mb-2 text-white pl-4">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white pl-4">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white pl-4">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          
          {/* Company + Service Required */}
          <div className="grid grid-cols-2 gap-4">
            {/* Company */}
            <div>
                <label className="block text-sm font-medium mb-2 text-white pl-4">Company</label>
                <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
                placeholder="Your business"
                />
            </div>

            {/* Service Required (NEW) */}
            <div>
                <label className="block text-sm font-medium mb-2 text-white pl-4">Service Required</label>
                <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black focus:outline-none"
                >
                <option value="">Select a service</option>
                <option>Point of Sale Systems</option>
                <option>Credit Card Processing</option>
                <option>Checkout Lanes</option>
                <option>CCTV Security Systems</option>
                <option>Digital Signage</option>
                <option>Website Development</option>
                </select>
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white pl-4">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>

          {/* Submit */}
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
  )
}