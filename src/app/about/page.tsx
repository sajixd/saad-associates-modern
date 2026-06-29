import { Users, Target, Eye, Award, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Adv. Mohammed Saad",
    role: "Founder & Senior Advocate",
    initials: "MS",
    description:
      "Over eight years of experience navigating civil and criminal litigation, property title audits, and corporate legal strategy across multiple High Courts and subordinate tribunals.",
  },
  {
    name: "CA Fatima Khan",
    role: "Taxation & Audit Partner",
    initials: "FK",
    description:
      "Chartered Accountant specialising in corporate tax restructuring, complex GST reconciliations, direct tax representation, and statutory audit compliance.",
  },
  {
    name: "Adv. Rahul Sharma",
    role: "Corporate Counsel",
    initials: "RS",
    description:
      "Advisor on startup structuring, DPIIT recognition, intellectual property filings, commercial contract negotiation, and corporate dispute resolution.",
  },
  {
    name: "Amit Verma",
    role: "Cyber Forensic Consultant",
    initials: "AV",
    description:
      "Digital forensic specialist managing ransomware containment, financial fraud tracing, online extortion response, and evidence preservation for cyber crime litigation.",
  },
]

const milestones = [
  {
    year: "2022",
    title: "Chamber Established",
    description:
      "Founded the primary practice in Asansol, concentrating on civil property disputes and criminal defense representation across local jurisdictions.",
  },
  {
    year: "2023",
    title: "Tax & Compliance Division",
    description:
      "Expanded into corporate incorporation, GST advisory, and income tax planning, bringing on board qualified CA partners for integrated service delivery.",
  },
  {
    year: "2024",
    title: "National Advisory Reach",
    description:
      "Extended startup compliance and intellectual property services to over 50 clients across major technology and business hubs nationwide.",
  },
  {
    year: "2025",
    title: "Cyber Forensics Launch",
    description:
      "Launched a dedicated 24/7 digital forensic response unit in collaboration with cybersecurity professionals, addressing ransomware and financial fraud emergencies.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              About the Chamber
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              A Practice Built on Precision and Trust
            </h1>
            <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
              Bridging traditional courtroom advocacy with contemporary forensic capability and strategic fiscal counsel for a new generation of clients.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Firm Profile
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold text-primary lg:text-4xl">
                Multi-Disciplinary Counsel
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Saad & Associates is a distinguished chamber established to simplify complex regulatory ecosystems. We serve as both courtroom advocates and strategic corporate advisors, supporting startups, enterprises, property owners, and individuals facing legal or digital threats.
                </p>
                <p>
                  Our philosophy is rooted in the belief that professional representation must be transparent, methodical, and secure. By integrating classical jurisprudence with modern financial analysis and forensic technology, we identify and neutralise exposure before it escalates into protracted dispute.
                </p>
                <p>
                  Every engagement is managed by a principal who maintains direct client accountability, ensuring consistency, discretion, and uncompromised quality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-secondary p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">Our Mission</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Deliver accessible, definitive legal advocacy and tax compliance services that empower clients to operate and transact with absolute confidence in an increasingly complex regulatory environment.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">Our Vision</h3>
                <p className="leading-relaxed text-muted-foreground">
                  To be recognised as India&apos;s most trusted professional services chamber, distinguished by legal integrity, uncompromising client privilege, and excellence in digital security and compliance management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Milestones
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tracing the evolution of our practice and the expansion of our capabilities.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-accent/30 md:block" />
            <div className="space-y-12">
              {milestones.map((m, index) => (
                <div key={index} className="relative flex gap-8 md:gap-16">
                  <div className="hidden w-16 flex-shrink-0 justify-center md:flex">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md">
                      {m.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-4 md:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                        {m.year}
                      </div>
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-primary">{m.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our People
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Lead Advisors
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principals and consultants who direct your matters with experience and attention.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl bg-secondary p-6 text-center transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mb-1 font-heading text-lg font-bold text-primary">{member.name}</h3>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
              Discuss Your Matter With Us
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Schedule a confidential consultation with senior counsel. Initial meetings are complimentary with no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
