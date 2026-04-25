"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import { OliveLogo } from "./olive-logo"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Solutions", hasDropdown: true },
  { label: "Features", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "Blog", hasDropdown: true },
  { label: "Restaurants", hasDropdown: false },
  { label: "Food", hasDropdown: true },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Olive home">
          <OliveLogo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="#"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            Sign in
          </Link>
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#">
              Get Olive
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  className="flex items-center justify-between py-2 text-sm text-foreground/80"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <Link href="#" className="text-sm text-foreground/80">
                Sign in
              </Link>
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#">
                  Get Olive
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
