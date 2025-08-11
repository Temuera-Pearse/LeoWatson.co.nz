import React, { useEffect, useState } from 'react'
import { Home, Mail, Briefcase, User, Menu } from 'lucide-react'

const menuItems = [
  { name: 'Welcome', href: '#landing', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Expertise', href: '#expertise', icon: <Briefcase size={18} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
]

const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // NEW: controls mobile menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top py-2 py-md-3 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      style={{
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Branding and Hamburger in a row */}
        <div className="d-flex align-items-center">
          <h1
            className={`fw-bold mb-0 lh-1 fs-6 fs-md-5 me-2 ${
              scrolled ? 'text-transparent' : 'text-white'
            }`}
          >
            LEO WATSON BARRISTER AND SOLICITOR
          </h1>
          {/* Hamburger Toggle */}
          <button
            className="navbar-toggler ms-2 d-md-none"
            aria-expanded={open}
            aria-controls="navbarMenu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={20} color={scrolled ? '#000' : '#fff'} />
          </button>
        </div>
        {/* Subtitle below branding, only on md+ screens */}
        <div className="d-none d-md-block ms-3">
          <p
            className={`text-uppercase small fst-italic mb-0 ${
              scrolled ? 'text-transparent' : 'text-white'
            }`}
          >
            · Specialising in Indigenous Law Solutions ·
          </p>
        </div>
        {/* Desktop Nav */}
        <div className="d-none d-md-flex align-items-center gap-3 ms-auto">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className={`nav-link d-flex align-items-center gap-1 ${
                scrolled ? 'text-transparent' : 'text-white'
              }`}
              href={item.href}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <a
            href="#contactForm"
            className="btn btn-success btn-sm"
            style={{
              backgroundColor: '#28e070',
              borderColor: '#28e070',
            }}
          >
            Contact Now
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          id="navbarMenu"
          className={`d-md-none ${scrolled ? 'bg-white' : 'bg-transparent'}`}
        >
          <div className="container py-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className={`nav-link py-2 d-flex align-items-center gap-2 ${
                  scrolled ? 'text-transparent' : 'text-white'
                }`}
                href={item.href}
                onClick={() => setOpen(false)} // closes menu after click
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="#contactForm"
              className="btn btn-success btn-sm mt-3"
              style={{
                backgroundColor: '#28e070',
                borderColor: '#28e070',
              }}
              onClick={() => setOpen(false)}
            >
              Contact Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Topbar
