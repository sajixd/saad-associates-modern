import { Scale, FileText, AlertCircle, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

const sections = [
  {
    icon: Scale,
    title: "Acceptance of Terms",
    content:
      "By engaging Saad & Associates for legal, tax, or compliance services, you agree to be bound by these terms. These terms constitute a binding agreement between you and our chamber. If you do not agree with any provision, please refrain from using our services.",
  },
  {
    icon: FileText,
    title: "Scope of Services",
    content:
      "Our chamber provides legal advocacy and representation, tax planning and compliance, company incorporation and registration, accounting and bookkeeping, regulatory compliance management, and cyber defense and digital forensic services. The specific scope of each engagement will be detailed in a separate engagement letter or service agreement.",
  },
  {
    icon: AlertCircle,
    title: "Client Responsibilities",
    content:
      "Clients are expected to provide accurate, complete, and timely information; submit required documents promptly; respond to communications within reasonable timeframes; pay agreed fees per the payment schedule; maintain confidentiality of our strategies and advice; and follow legal and ethical guidance provided by our counsel.",
  },
  {
    icon: CheckCircle,
    title: "Fees and Payment",
    content:
      "Fee structures are communicated clearly in engagement agreements. Professional fees are based on service complexity and scope. Payment terms and milestones are specified in contracts. Additional costs such as filing fees, court fees, and third-party charges are billed separately. Late payments may incur interest as specified in the engagement agreement.",
  },
  {
    icon: CheckCircle,
    title: "Confidentiality",
    content:
      "All client information is protected by attorney-client privilege and strict confidentiality protocols extending beyond the termination of our engagement. We do not disclose client information to third parties except as required by law or with explicit client authorization. This commitment survives the conclusion of our professional relationship.",
  },
  {
    icon: CheckCircle,
    title: "Limitation of Liability",
    content:
      "While we exercise the highest standards of professional care, specific legal outcomes, tax savings, or business results cannot be guaranteed. Legal proceedings involve inherent uncertainties. Our liability is limited to professional negligence as determined under applicable laws and professional standards.",
  },
]

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Legal
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Terms of Service
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              These terms govern the provision of professional services by Saad & Associates. Please read them carefully before engaging our chamber.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 rounded-xl bg-secondary p-4">
            <p className="text-xs text-muted-foreground">
              Last Updated: January 2026
            </p>
          </div>

          <div className="space-y-14">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-4 flex items-center gap-3 font-heading text-2xl font-bold text-primary">
                  <section.icon className="h-6 w-6 text-accent" />
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">{section.content}</p>
              </div>
            ))}

            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">Governing Law & Dispute Resolution</h2>
              <p className="leading-relaxed text-muted-foreground">
                These terms are governed by the laws of India. Disputes shall first be addressed through good-faith negotiations. If unresolved, matters may be referred to the appropriate courts in Asansol, West Bengal, or to professional regulatory bodies as applicable.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">Contact Information</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                For questions regarding these terms or your engagement:
              </p>
              <div className="rounded-xl bg-secondary p-5 space-y-2">
                <p className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:adv.saad.hc@gmail.com" className="font-semibold text-primary hover:text-accent transition-colors">
                    adv.saad.hc@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+919563712462" className="font-semibold text-primary hover:text-accent transition-colors">
                    +91 9563712462
                  </a>
                </p>
                <p className="flex items-start gap-2 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">
                    Office No. A-5, Jiwan Market, Thana More, Jamuria Main Road, Asansol 713336
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
