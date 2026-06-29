"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Cyber Defense", href: "/cyber-defense" },
  { name: "GST Resources", href: "/gst-resources" },
  { name: "Our Firm", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8" aria-label="Global">
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-500",
                scrolled
                  ? "bg-primary group-hover:bg-accent"
                  : "bg-accent/20 backdrop-blur-sm group-hover:bg-accent/30"
              )}>
                <Scale className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-heading text-lg font-bold leading-tight whitespace-nowrap tracking-wide transition-colors duration-500",
                  scrolled ? "text-primary" : "text-white"
                )}>
                  SAAD & ASSOCIATES
                </span>

              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 py-1 relative group",
                  !scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-accent",
                  pathname === item.href && (
                    scrolled ? "text-accent" : "text-white"
                  )
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300",
                  pathname === item.href
                    ? "w-full bg-accent"
                    : "w-0 group-hover:w-full",
                  !scrolled ? "bg-accent" : "bg-accent"
                )} />
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden lg:inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300",
                scrolled
                  ? "bg-accent text-white shadow-accent/25 hover:bg-accent/90"
                  : "bg-accent text-white shadow-accent/20 hover:bg-accent/90"
              )}
            >
              Book Consultation
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2.5 transition-colors lg:hidden",
                scrolled
                  ? "text-foreground hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0F1C] transition-all duration-300",
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
            className="mt-4 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </>
  )
}
