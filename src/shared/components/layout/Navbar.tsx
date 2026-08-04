'use client'

import React from 'react'
import Link from 'next/link'

export type NavLink = { label: string; href: string }

type Props = {
  links?: NavLink[]
  logo?: React.ReactNode
  variant?: 'transparent' | 'solid'
  appointmentHref?: string
}

export default function Navbar({
  links = [
    { label: 'Product', href: '/product' },
    { label: 'Project', href: '/project' },
    { label: 'Service', href: '/service' },
    { label: 'Industry', href: '/industry' },
    { label: 'Career', href: '/career' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
  ],
  logo,
  variant = 'transparent',
  appointmentHref = '/appointment'
}: Props) {
  const [open, setOpen] = React.useState(false)

  const isTransparent = variant === 'transparent'

  return (
    <nav
      className={`w-full z-50 top-0 left-0 transition-colors duration-200 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-background text-foreground shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              {logo ?? (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <rect width="24" height="24" rx="6" fill="var(--color-primary)" />
                  <path d="M6 12h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </Link>
          </div>

          {/* Center: desktop links */}
          <div className="hidden md:flex md:space-x-6 md:items-center">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`text-sm font-medium hover:underline ${isTransparent ? 'opacity-95' : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: appointment button + mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href={appointmentHref} className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-150 border ` +
                    (isTransparent
                      ? 'bg-white text-primary border-white/30 hover:bg-white/95'
                      : 'bg-primary text-white border-primary hover:brightness-90')}
              >
                Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} px-4 pb-4`}>
        <div className={`space-y-2 ${isTransparent ? 'text-white' : 'text-foreground'}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2 text-base font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}

          <Link href={appointmentHref} className={`block w-full text-center mt-2 px-4 py-2 rounded-full font-semibold border ` +
                (isTransparent
                  ? 'bg-white text-primary border-white/30'
                  : 'bg-primary text-white border-primary')}
          >
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  )
}
