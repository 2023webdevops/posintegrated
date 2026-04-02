'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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
        <div className="text-center py-12">
          <div className="text-white text-4xl mb-4">✓</div>
          <h4 className="text-white text-xl font-bold mb-2">Thank You!</h4>
          <p className="text-white">We'll be in touch shortly.</p>
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-md font-[400] mb-2 text-white">Name</label>
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
              <label className="block text-sm font-medium mb-2 text-white">Email</label>
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
              <label className="block text-sm font-medium mb-2 text-white">Phone</label>
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

          {/* Company */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-6 py-4 text-sm bg-white/90 rounded-4xl text-black placeholder-black/100 focus:outline-none"
              placeholder="Your business"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Message</label>
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