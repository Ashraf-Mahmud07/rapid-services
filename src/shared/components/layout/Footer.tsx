import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Home">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="var(--color-primary)" />
                <path d="M6 12h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>

            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Rapid ERP — reliable, fast, and extensible enterprise resource planning platform that adapts to
              your workflow.
            </p>

            <div className="mt-4 flex items-center gap-3">
              {/* Social placeholders */}
              <a aria-label="facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a aria-label="twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 5.5A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/blogs" className="hover:underline">Blogs</Link>
              </li>
              <li>
                <Link href="/media" className="hover:underline">Media</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">Terms &amp; Condition</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Opening Hours</h4>
            <div className="text-sm text-white/70 space-y-2">
              <div>
                <strong className="text-white/90">Saturday-Thursday</strong>
                <div>8:00 am - 9:00 pm</div>
              </div>
              <div>
                <strong className="text-white/90">Break</strong>
                <div>1:30 pm - 3:30 pm</div>
              </div>
              <div>
                <strong className="text-white/90">Friday</strong>
                <div>Closed</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Contact Info</h4>
            <div className="text-sm text-white/70 space-y-3">
              <div>
                <div>Industrial Area No 5, Sharjah, UAE</div>
              </div>
              <div>
                <div>+971564406456</div>
                <div>+971557636994</div>
              </div>
              <div>
                <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
              </div>
              <div>
                <div>Saturday-Thursday</div>
                <div>8:00 am - 9:00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Rapid ERP. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
