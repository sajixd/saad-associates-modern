"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Shield, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Get in Touch
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Schedule a Consultation
            </h1>
            <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
              Connect with our team for a confidential discussion about your legal, tax, or compliance requirements. We respond to all inquiries within two business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8 font-heading text-2xl font-bold text-primary">Direct Contact Channels</h2>

              <div className="space-y-5">
                <div className="rounded-xl bg-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading font-bold text-primary">Telephone</h3>
                      <a href="tel:+919563712462" className="mb-2 text-lg font-bold text-primary hover:text-accent transition-colors">
                        +91 9563712462
                      </a>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Monday – Saturday: 9:30 AM – 6:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                      <Shield className="h-6 w-6 text-crisis" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading font-bold text-crisis">24/7 Cyber Emergency</h3>
                      <div className="flex flex-wrap gap-3 mb-2">
                        <a href="tel:+919563712462" className="text-lg font-bold text-crisis hover:text-crisis/80 transition-colors">
                          +91 9563712462
                        </a>
                        <a
                          href="https://wa.me/919563712462"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white hover:bg-green-700 transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-crisis">
                        Available 24/7 for Digital Threats
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading font-bold text-primary">Email</h3>
                      <a href="mailto:adv.saad.hc@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors">
                        adv.saad.hc@gmail.com
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground">For case documentation and general inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading font-bold text-primary">Chamber Location</h3>
                      <p className="leading-relaxed text-muted-foreground">
                        Office No. A-5, Jiwan Market
                        <br />
                        Thana More, Jamuria Main Road
                        <br />
                        Asansol 713336, West Bengal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mb-2 font-heading text-2xl font-bold text-primary">Thank You</h3>
                    <p className="max-w-sm text-muted-foreground">
                      Your inquiry has been received. A member of our team will contact you within two business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="mb-6 font-heading text-2xl font-bold text-primary">Submit Your Inquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-primary">
                            Full Name <span className="text-crisis">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-primary">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary">
                          Email Address <span className="text-crisis">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-primary">
                          Subject <span className="text-crisis">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="Legal representation, tax filing, company registration..."
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary">
                          Your Message <span className="text-crisis">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full resize-none rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="Briefly describe your matter, including relevant context and your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90"
                      >
                        <Send className="h-4 w-4" />
                        Submit Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7640698188167!2d87.07923767597148!3d23.64860479261771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7158fcd12be43%3A0x6b6df525b6c2cb4e!2sThana%20More%2C%20Jamuria%2C%20Asansol%2C%20West%20Bengal%20713336!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chamber Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
