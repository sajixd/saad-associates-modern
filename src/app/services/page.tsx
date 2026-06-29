import { Gavel, Calculator, Landmark, FileText, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const practiceAreas = [
  {
    id: "legal",
    icon: Gavel,
    title: "Legal Advocacy",
    description:
      "Complete litigative representation and strategic counsel across civil, criminal, and corporate matters. Our advocates prepare every case with rigorous attention to procedural detail and substantive law.",
    services: [
      "Civil Litigation & Property Disputes",
      "Criminal Defense & Bail Proceedings",
      "Family Law & Succession Matters",
      "Property Title Verification & Due Diligence",
      "Commercial Contract Drafting & Review",
      "Corporate Legal Advisory & Governance",
    ],
  },
  {
    id: "tax",
    icon: Calculator,
    title: "Tax & GST Services",
    description:
      "Strategic tax planning and compliance management designed to optimise liability while ensuring full regulatory adherence. Our tax desk handles matters from routine filings to complex litigation.",
    services: [
      "GST Registration & Ongoing Compliance",
      "Monthly & Annual Return Preparation (GSTR-1, 3B, 9)",
      "Income Tax Return Filing (ITR) & Planning",
      "Tax Audit Representation & Defense",
      "Tax Optimisation & Structuring Advice",
      "Appeals & Tribunal Representation",
    ],
  },
  {
    id: "incorporation",
    icon: Landmark,
    title: "Business Incorporation",
    description:
      "End-to-end company formation services from entity selection through to statutory registrations and post-incorporation compliance, tailored to your commercial objectives.",
    services: [
      "Private Limited Company Registration",
      "Limited Liability Partnership (LLP) Formation",
      "One Person Company (OPC) Setup",
      "Partnership Deed Drafting & Registration",
      "Startup India DPIIT Recognition",
      "MSME Udyam Registration",
    ],
  },
  {
    id: "accounting",
    icon: FileText,
    title: "Accounting & Bookkeeping",
    description:
      "Professional financial management services ensuring clean, audit-ready records. We implement systems that provide clarity and control over your financial position.",
    services: [
      "Monthly Bookkeeping & Bank Reconciliation",
      "Financial Statement Preparation (P&L, Balance Sheet)",
      "Payroll Processing & Compliance",
      "Audit Preparation & Liaison Support",
      "Accounts Receivable & Payable Management",
      "Customised Management Information Reports",
    ],
  },
  {
    id: "compliance",
    icon: CheckCircle,
    title: "Regulatory Compliance",
    description:
      "Comprehensive compliance management covering employee benefits, intellectual property, industry licensing, and statutory filings to keep your business in good standing.",
    services: [
      "PF & ESI Registration, Filings & Compliance",
      "ROC Annual Filings (AOC-4, MGT-7)",
      "FSSAI License Registration & Renewal",
      "Trademark Search, Filing & Registration",
      "ISO Certification Preparation Support",
      "Labour Law Compliance Audits",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Practice Areas
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Comprehensive Professional Services
            </h1>
            <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
              Integrated legal, tax, and compliance solutions delivered with the precision expected of a top-tier chamber. Each practice area is staffed by specialists with deep domain experience.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {practiceAreas.map((area, index) => (
            <div key={area.id} id={area.id} className="mb-24 last:mb-0">
              <div className="mb-10 flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mb-4 font-heading text-3xl font-bold text-primary">{area.title}</h2>
                  <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{area.description}</p>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start gap-3 rounded-lg bg-secondary p-4">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < practiceAreas.length - 1 && <hr className="border-gray-100" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-primary p-12 text-center text-white lg:p-16">
            <h2 className="mb-4 font-heading text-3xl font-bold">
              Need Specialised Counsel or Compliance Support?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Whether you require litigation representation, tax structuring, or regulatory guidance, our team has the expertise to advise and execute.
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
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
