"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Legal Advocacy", href: "/services#legal" },
      { name: "Tax & GST", href: "/services#tax" },
      { name: "Business Setup", href: "/services#incorporation" },
      { name: "Accounting", href: "/services#accounting" },
      { name: "Compliance", href: "/services#compliance" },
    ],
  },
  { name: "Cyber Defense", href: "/cyber-defense" },
  { name: "GST Resources", href: "/gst-resources" },
  { name: "Our Firm", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-colors group-hover:bg-accent">
              <Scale className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-primary leading-tight">Saad & Associates</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-muted">ADVOCATES & CONSULTANTS</span>
            </div>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden lg:flex lg:items-center lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors py-1",
                  pathname === item.href
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen overlay — outside header to avoid stacking issues */}
      <div
        className={cn(
          "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a] transition-all duration-300",
          mobileMenuOpen ? "pointer-events-auto opacity-100 visible" : "pointer-events-none opacity-0 invisible"
        )}
      >
        <button
          type="button"
          className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl font-medium tracking-wide transition-colors",
                pathname === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xl font-medium tracking-wide text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </>
  )
}
