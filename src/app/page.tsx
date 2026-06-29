"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Scale,
  FileText,
  Building2,
  Calculator,
  CheckCircle,
  Star,
  Clock,
  Phone,
  ChevronDown,
  Gavel,
  Landmark,
  Award,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    icon: Gavel,
    title: "Legal Advocacy",
    description: "Strategic representation across civil litigation, criminal defense, property disputes, and corporate law with meticulous case preparation.",
    href: "/services#legal",
  },
  {
    icon: Calculator,
    title: "Tax & GST Compliance",
    description: "Comprehensive tax planning, GST registration and filing, income tax returns, and audit defense to ensure full regulatory adherence.",
    href: "/services#tax",
  },
  {
    icon: Landmark,
    title: "Business Incorporation",
    description: "End-to-end company formation including Pvt Ltd, LLP, OPC, and partnership registration with complete startup compliance setup.",
    href: "/services#incorporation",
  },
  {
    icon: FileText,
    title: "Accounting & Bookkeeping",
    description: "Professional financial management spanning monthly reconciliations, payroll administration, and tailored management reporting.",
    href: "/services#accounting",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Compliance",
    description: "Complete compliance management covering PF/ESI, trademark registration, FSSAI licensing, ROC filings, and ISO certification.",
    href: "/services#compliance",
  },
  {
    icon: Shield,
    title: "Cyber Threat Defense",
    description: "24/7 emergency response for ransomware, financial fraud, online extortion, and identity theft with forensic investigation protocols.",
    href: "/cyber-defense",
  },
]

const stats = [
  { value: "500+", label: "Matters Resolved" },
  { value: "8+", label: "Years of Practice" },
  { value: "1,000+", label: "Clients Represented" },
  { value: "24/7", label: "Crisis Response" },
]

const testimonials = [
  {
    name: "Rajesh Malhotra",
    role: "CEO, Malhotra Exports",
    content:
      "Their counsel on LLP formation and cross-border tax implications was instrumental in launching our export venture. Thorough, precise, and commercially astute.",
    initials: "RM",
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    content:
      "After a sophisticated phishing attack compromised our business accounts, their cyber response team contained the breach within hours and coordinated fund recovery.",
    initials: "PS",
  },
  {
    name: "Mohit Bansal",
    role: "Partner, MB Audits",
    content:
      "Their corporate advisory team operates as a seamless extension of our firm. Complex GST reconciliations and annual filings handled with absolute precision.",
    initials: "MB",
  },
]

const faqs = [
  {
    q: "What jurisdictions does your chamber practice in?",
    a: "We practice across civil and criminal courts in West Bengal, with particular concentration in Asansol, Durgapur, and Bardhaman jurisdictions. For corporate and tax matters, we represent clients nationwide through our network of affiliated counsel.",
  },
  {
    q: "How quickly can you respond to a cyber incident?",
    a: "Our Priority Response Unit mobilises within 30 minutes of an emergency call. We operate a dedicated 24/7 hotline staffed by forensic specialists who initiate evidence preservation, account freeze protocols, and legal documentation simultaneously.",
  },
  {
    q: "What is the typical timeline for company registration?",
    a: "Private Limited incorporation generally completes within 10-15 working days, LLPs within 7-10 days, and OPC registrations within 8-12 business days, subject to MCA processing times and document accuracy.",
  },
  {
    q: "Do you offer initial consultation at no charge?",
    a: "Yes, preliminary consultations are complimentary. During this meeting we assess your requirements, outline the legal framework, and provide a transparent fee structure with no obligation to proceed.",
  },
  {
    q: "Can you assist with recovering funds lost to online fraud?",
    a: "Time is critical. We immediately coordinate with banking institutions to freeze beneficiary accounts, file formal complaints with cyber crime cells, and initiate legal proceedings. Success rates are significantly higher when contacted within the first 24 hours.",
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col">

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B14]">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0F1C] via-[#0A0B14] to-[#06070E]" />

        {/* Gold radial orbs */}
        <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent/4 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left Column */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-5 py-2 backdrop-blur-sm">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-accent/90">
                    TRUSTED BY 1,000+ CLIENTS
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em]"
              >
                <span className="text-white">Where Legal Rigour Meets</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-[#D4B85C] bg-clip-text text-transparent">
                  Strategic Counsel
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-10 text-base leading-relaxed text-white/50 lg:text-lg lg:leading-relaxed max-w-lg"
              >
                A multi-disciplinary chamber delivering sophisticated legal advocacy, tax optimisation, corporate compliance, and digital forensic defense. Your interests, meticulously protected.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-accent/20 transition-all duration-300 hover:shadow-accent/30 hover:brightness-110"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  Explore Practice Areas
                </Link>
              </motion.div>

              {/* Trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12 flex items-center gap-6 text-xs text-white/30"
              >
                <div className="flex -space-x-2">
                  {["RM", "PS", "MB", "AD"].map((init, i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A0B14] bg-primary text-[9px] font-bold text-white"
                    >
                      {init}
                    </div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A0B14] bg-accent text-[9px] font-bold text-white">
                    +
                  </div>
                </div>
                <span>Trusted by corporate leaders &amp; entrepreneurs</span>
              </motion.div>
            </div>

            {/* Right Column — Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:block"
            >
              <div className="animate-float">
                <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                  {/* Subtle inner glow */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-50 blur-sm" />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#D4B85C] shadow-lg shadow-accent/20">
                        <Scale className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Saad & Associates</h3>
                        <p className="text-sm text-white/40">Advocates | Tax Advisors | Forensic Consultants</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { icon: Scale, text: "Qualified Tax Advisory & Audit Support" },
                        { icon: Shield, text: "24/7 Digital Forensic Response Unit" },
                        { icon: Users, text: "Strict Attorney-Client Privilege" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                            <item.icon className="h-4 w-4 text-accent" />
                          </div>
                          <span className="text-sm text-white/70">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-white/[0.06] pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <StarRating />
                        <span className="text-xs font-medium text-accent">4.9</span>
                      </div>
                      <p className="text-xs text-white/30">
                        <span className="font-semibold text-white/60">4.9 / 5.0</span> — Independently rated by clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0B14] to-transparent" />
      </section>

      {/* ========== STATS ========== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-1 font-heading text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Practice Areas
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Comprehensive Legal & Corporate Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Expert counsel across six core practice verticals, serving businesses, professionals, and individuals with precision and integrity.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-primary">{service.title}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EMERGENCY BANNER ========== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-8 lg:p-12"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5">
                  <Shield className="h-3.5 w-3.5 text-red-600" />
                  <span className="text-xs font-bold tracking-wide text-red-700">PRIORITY RESPONSE UNIT</span>
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-primary lg:text-3xl">
                  Active Cyber Threat or Digital Fraud?
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Every moment counts. Our forensic team provides immediate containment, evidence preservation, and legal escalation for ransomware attacks, financial scams, identity theft, and online extortion.
                </p>
                <div className="mb-6 flex gap-8">
                  <div>
                    <div className="font-heading text-2xl font-bold text-crisis">&lt; 30 min</div>
                    <div className="text-xs text-muted-foreground">Average Response</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-crisis">94%</div>
                    <div className="text-xs text-muted-foreground">Recovery Rate</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-crisis">500+</div>
                    <div className="text-xs text-muted-foreground">Threats Neutralised</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919563712462"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-crisis px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-crisis/25 transition-all hover:bg-crisis/90"
                >
                  <Phone className="h-4 h-4" />
                  +91 9563712462 — Emergency Hotline
                </a>
                <Link
                  href="/cyber-defense"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-gray-50"
                >
                  View Response Protocol
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Why engage us
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold text-primary lg:text-4xl">
                Rigorous Preparation. Uncompromising Standards.
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                We combine deep legal expertise with financial acumen and forensic capability to deliver outcomes that withstand scrutiny. Every engagement benefits from structured methodology and personalised attention.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Leadership",
                    desc: "Over eight years of practice handling complex commercial litigation, tax audits, and cyber crime investigations.",
                  },
                  {
                    title: "Integrated Approach",
                    desc: "Seamless coordination between legal, tax, and forensic verticals eliminates silos and accelerates resolutions.",
                  },
                  {
                    title: "Transparent Engagement",
                    desc: "Milestone-based fee structures with no hidden charges. Initial consultations are always complimentary.",
                  },
                  {
                    title: "Client-First Ethics",
                    desc: "Every case receives a dedicated principal advisor who maintains direct accountability and accessibility.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <StarRating />
              <p className="mt-3 font-heading text-3xl font-bold text-primary">4.9 / 5.0</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Rated by entrepreneurs, corporate leaders, and individuals we have represented.
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="italic leading-relaxed text-muted-foreground">
                  &ldquo;The speed with which Adv. Saad&apos;s team contained a sophisticated ransomware attack on our servers and coordinated with law enforcement was remarkable. They transformed a crisis into a managed resolution.&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-primary">— Amit Deshmukh, Tech Horizon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Client Voices
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real outcomes from matters we have handled across litigation, compliance, and crisis response.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-secondary p-6"
              >
                <StarRating />
                <p className="mt-4 leading-relaxed text-muted-foreground">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-200/50 pt-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Clarifications
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-gray-100 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50/50"
                  aria-expanded={openFaq === index}
                >
                  <span className="pr-4 font-heading font-bold text-primary">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-100 px-6 py-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 font-heading text-3xl font-bold text-white lg:text-4xl">
              Ready to Secure Your Position?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
              Speak directly with senior counsel. Initial consultations are complimentary, with clear fee structures and no pressure to proceed.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
