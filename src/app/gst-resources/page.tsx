import { FileText, CheckCircle, ArrowRight, Building2, User, Briefcase, Download, Table } from "lucide-react"
import Link from "next/link"

const documentCategories = [
  {
    category: "Sole Proprietorship",
    icon: User,
    description: "For independent retailers, freelancers, and single-owner practices",
    documents: [
      "PAN Card of the Proprietor",
      "Aadhaar Card of the Proprietor",
      "Passport-size Photograph",
      "Business Address Proof (Electricity Bill / Rent Agreement / Property Tax)",
      "NOC from Property Owner (if premises are rented)",
      "Cancelled Cheque or Bank Statement (first page)",
      "Valid Mobile Number & Email ID",
    ],
  },
  {
    category: "Partnership / LLP",
    icon: Briefcase,
    description: "For co-owned firms, professional partnerships, and limited liability structures",
    documents: [
      "PAN Card of the Partnership Firm or LLP",
      "Registered Partnership Deed or LLP Agreement",
      "PAN & Aadhaar of All Partners",
      "Photographs of All Partners",
      "Business Address Proof (utility bill less than 2 months old)",
      "Certificate of Incorporation (mandatory for LLPs)",
      "Board Resolution nominating authorised signatory",
      "Cancelled Cheque of the business account",
    ],
  },
  {
    category: "Private Limited Company",
    icon: Building2,
    description: "For startups, manufacturing entities, and corporates seeking investment",
    documents: [
      "Certificate of Incorporation (COI) issued by MCA",
      "PAN Card of the Company",
      "Memorandum & Articles of Association (MOA & AOA)",
      "PAN & Aadhaar of All Directors",
      "Photographs of All Directors",
      "Board Resolution for GST Registration",
      "Business Address Proof (electricity bill / lease deed / NOC)",
      "Digital Signature Certificate (DSC) of Authorised Signatory",
      "Cancelled Cheque of the company's current account",
    ],
  },
]

const complianceNotes = [
  {
    number: "01",
    title: "Fresh Address Proofs",
    description:
      "Utility bills (electricity, water, telephone) submitted as address proof must be dated within two months of the application date. Older documents will be rejected.",
  },
  {
    number: "02",
    title: "Business-Matched Bank Account",
    description:
      "The bank account used for GST registration must be in the exact legal name of the entity. Personal accounts are not accepted for proprietorships registered in a business name.",
  },
  {
    number: "03",
    title: "Digital Signatures Requirement",
    description:
      "Class 2 or Class 3 Digital Signature Certificates (DSC) are mandatory for company and LLP filings. Ensure your DSC is valid and linked to the authorised signatory.",
  },
]

const returnTypes = [
  { name: "GSTR-1", description: "Outward supply details — invoices and sales", frequency: "Monthly / Quarterly", due: "11th of following month" },
  { name: "GSTR-3B", description: "Summary return with tax payment", frequency: "Monthly", due: "20th of following month" },
  { name: "GSTR-9", description: "Annual consolidated return", frequency: "Annually", due: "31st December of the fiscal year" },
  { name: "GSTR-9C", description: "Audited reconciliation statement", frequency: "Annually", due: "31st December of the fiscal year" },
]

export default function GSTResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Resource Centre
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              GST Registration & Compliance Guide
            </h1>
            <p className="text-lg leading-relaxed text-white/70 lg:text-xl">
              Comprehensive documentation requirements and filing deadlines for GST registration across all business entity types. Prepare your application with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Document Checklists
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Requirements by Entity Type
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Select your business structure to view the specific documentation required for GST registration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {documentCategories.map((category, index) => (
              <div key={index} className="rounded-xl bg-secondary p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary">{category.category}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Deadlines */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Deadlines
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              GST Return Filing Schedule
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stay compliant by tracking your filing obligations. Missing deadlines can result in penalties and ledger blockages.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Return</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold">Frequency</th>
                  <th className="px-6 py-4 font-semibold">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {returnTypes.map((r, i) => (
                  <tr key={i} className="transition-colors hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-primary">{r.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.description}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {r.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-crisis">{r.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Notes */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Important
            </span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary lg:text-4xl">
              Mandatory Compliance Notes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ensure these requirements are satisfied before submission to avoid application rejection or delay.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {complianceNotes.map((note, index) => (
              <div key={index} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                  {note.number}
                </span>
                <h3 className="mb-3 font-heading font-bold text-primary">{note.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{note.description}</p>
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
              <Download className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
              Need Assistance With GST Registration?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Our compliance team manages the entire registration process — from document collation to final certification — so you can focus on your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services#tax"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Tax Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
