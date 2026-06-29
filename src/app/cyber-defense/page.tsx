import {
  Shield,
  AlertTriangle,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
  Lock,
  FileWarning,
  Globe,
  UserX,
  Siren,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Lock,
    title: "Ransomware Containment",
    description:
      "Immediate system isolation, forensic analysis of attack vectors, and coordinated recovery protocols. We work alongside your IT team to neutralise threats and restore operations.",
  },
  {
    icon: FileWarning,
    title: "Financial Fraud Recovery",
    description:
      "Rapid account freeze procedures, transaction chain tracing, and coordinated liaison with banking institutions and cyber cells to maximise fund recovery prospects.",
  },
  {
    icon: Globe,
    title: "Online Extortion Defense",
    description:
      "Strategic response to blackmail and sextortion threats including digital evidence preservation, cease-and-desist issuance, and coordinated law enforcement engagement.",
  },
  {
    icon: UserX,
    title: "Identity Theft Resolution",
    description:
      "Comprehensive identity restoration encompassing fraudulent account closure, credit bureau notifications, legal documentation, and reputation management support.",
  },
]

const protocol = [
  {
    step: "01",
    title: "Initial Triage",
    description:
      "Rapid threat assessment within 15 minutes of contact. We classify severity, identify compromised systems, and initiate containment protocols immediately.",
  },
  {
    step: "02",
    title: "Forensic Capture",
    description:
      "Secure collection and hashing of digital evidence — logs, transaction records, communications — preserving evidentiary integrity for criminal proceedings.",
  },
  {
    step: "03",
    title: "Containment & Freeze",
    description:
      "Implementation of emergency security measures: account freezes, system isolation, domain takedown requests, and beneficiary account blocking.",
  },
  {
    step: "04",
    title: "Legal Escalation",
    description:
      "Preparation and filing of formal complaints with cyber crime cells, financial regulators, and relevant authorities. Coordination with in-house or external counsel.",
  },
  {
    step: "05",
    title: "Restoration & Hardening",
    description:
      "Systematic data recovery, security infrastructure review, and implementation of enhanced protocols to prevent recurrence. Post-incident reporting for insurance and compliance.",
  },
]

export default function CyberDefensePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.04]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1.5">
              <Siren className="h-3.5 w-3.5 text-red-300" />
              <span className="text-xs font-bold tracking-wide text-red-300">PRIORITY RESPONSE UNIT — 24/7</span>
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Digital Threat Emergency Response
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-red-100/80 lg:text-xl">
              Ransomware, financial fraud, online extortion, or identity theft. Our forensic team mobilises within 30 minutes to contain, preserve, and escalate.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+919563712462"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-red-900 shadow-lg transition-all hover:bg-gray-100"
              >
                <Phone className="h-4 w-4" />
                +91 9563712462 — Emergency Line
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Submit Emergency Request
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "< 30 min", label: "Average Response" },
              { value: "94%", label: "Recovery Rate" },
              { value: "500+", label: "Threats Neutralised" },
              { value: "24/7", label: "Emergency Availability" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-1 font-heading text-3xl font-bold text-crisis">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Capabilities
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Emergency Response Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Purpose-built digital defense capabilities for immediate threat containment and comprehensive recovery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
                  <service.icon className="h-7 w-7 text-crisis" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Methodology
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Incident Response Protocol
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A systematic, proven approach to digital threat management from initial alert through to full recovery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {protocol.map((step, index) => (
              <div key={index} className="relative">
                <div className="h-full rounded-xl bg-secondary p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
                {index < protocol.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-red-100 bg-white p-8 shadow-lg lg:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-crisis" />
                  <span className="text-xs font-bold tracking-wide text-crisis">ACTIVE EMERGENCY?</span>
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-primary lg:text-3xl">
                  Every Minute Counts
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  If your organisation is currently under digital attack, contact our emergency response unit immediately. Time is the critical variable in containment and recovery outcomes.
                </p>
                <a
                  href="tel:+919563712462"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-crisis px-8 py-4 text-sm font-bold text-white shadow-lg shadow-crisis/25 transition-all hover:bg-crisis/90"
                >
                  <Phone className="h-4 w-4" />
                  +91 9563712462
                </a>
              </div>

              <div className="rounded-xl bg-secondary p-6">
                <h3 className="mb-4 flex items-center gap-2 font-heading font-bold text-primary">
                  <Clock className="h-5 w-5 text-accent" />
                  What Happens When You Call
                </h3>
                <ul className="space-y-3">
                  {[
                    "Immediate triage within 30 minutes",
                    "Forensic evidence preservation",
                    "Account freeze & containment coordination",
                    "Formal cyber cell complaint preparation",
                    "End-to-end recovery assistance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
