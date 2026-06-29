import Link from "next/link"
import { Scale, Phone, Mail, MapPin, ChevronRight } from "lucide-react"

const footerLinks = {
  quick: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/services" },
    { name: "Cyber Defense", href: "/cyber-defense" },
    { name: "GST Resources", href: "/gst-resources" },
    { name: "Our Firm", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Legal Advocacy", href: "/services#legal" },
    { name: "Tax & GST Compliance", href: "/services#tax" },
    { name: "Business Incorporation", href: "/services#incorporation" },
    { name: "Accounting & Bookkeeping", href: "/services#accounting" },
    { name: "Regulatory Compliance", href: "/services#compliance" },
    { name: "Cyber Threat Response", href: "/cyber-defense" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const contactInfo = {
  phone: "+91 9563712462",
  email: "adv.saad.hc@gmail.com",
  address: "Office No. A-5, Jiwan Market, Thana More, Jamuria Main Road, Asansol 713336",
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", initials: "in" },
  { name: "Instagram", href: "https://instagram.com", initials: "ig" },
  { name: "Facebook", href: "https://facebook.com", initials: "fb" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight">Saad & Associates</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/60">ADVOCATES & CONSULTANTS</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              A distinguished multi-disciplinary chamber bridging traditional legal advocacy with contemporary forensic defense, strategic tax planning, and corporate compliance solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80 transition-all hover:bg-accent hover:text-white"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.initials}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Navigate</h3>
            <ul className="space-y-3.5">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 text-accent opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Practice Areas</h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 text-accent opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Contact</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium text-white/60">Emergency Support</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-white hover:text-accent transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium text-white/60">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-white hover:text-accent transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium text-white/60">Chamber</p>
                  <p className="text-sm text-white leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Saad & Associates. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs text-white/50 transition-colors hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
