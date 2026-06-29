import { Shield, Eye, Lock, UserCheck, Mail, Phone, MapPin } from "lucide-react"

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content:
      "We collect information necessary to deliver our legal, tax, and compliance services. This includes personal identification details (name, address, contact information), professional and business records, case-related documentation, communication history, and billing information. All collection is proportionate to the service being provided.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "Your data is used exclusively for service delivery: legal consultation and representation, tax and GST compliance management, company incorporation and business registration, cyber defense and digital forensic services, case communication, billing, and regulatory compliance. We do not use client data for marketing or analytics without explicit consent.",
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content:
      "We maintain robust security controls including encrypted storage systems, restricted access protocols, regular security audits, secure communication channels, and strict compliance with applicable data protection regulations. Our systems are designed to prevent unauthorized access, alteration, or disclosure.",
  },
  {
    icon: UserCheck,
    title: "Client Privilege & Confidentiality",
    content:
      "All communications and materials shared with our chamber are protected by attorney-client privilege. We do not disclose information to third parties without explicit authorization unless required by law. Confidential documents are stored securely and disposed of appropriately. Our team is bound by strict confidentiality obligations.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content:
      "You have the right to access your personal information, request corrections to inaccurate data, request deletion where legally permissible, opt out of non-essential communications, and withdraw consent for data processing where applicable. To exercise these rights, please contact us using the details below.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Legal
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              Your privacy is fundamental to our practice. This policy outlines how we collect, use, and protect your personal information in compliance with applicable laws.
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
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">Contact Us</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                For privacy-related inquiries or to exercise your data rights, please reach out to us:
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
