import React, { useEffect, useState } from 'react'
import { Home, Mail, Briefcase, User } from 'lucide-react'

const menuItems = [
  { name: 'Welcome', href: '#landing', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Expertise', href: '#expertise', icon: <Briefcase size={18} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
]

const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed-top py-3 transition ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      style={{
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Side: Branding */}
        <div className="d-flex align-items-center gap-3">
          <div className={scrolled ? 'text-dark' : 'text-white'}>
            <h1 className="fw-bold mb-0 fs-4">
              LEO WATSON BARRISTER AND SOLICITOR
            </h1>
            <p className="text-uppercase small fst-italic mb-0">
              · Specialising in Indigenous Law Solutions ·
            </p>
          </div>

          {/* Green Button */}
          <a
            href="#contactForm"
            className="btn btn-success btn-sm"
            style={{
              backgroundColor: '#28e070', // bright green
              borderColor: '#28e070',
            }}
          >
            Contact Now
          </a>
        </div>

        {/* Right Side: Nav Links */}
        <div className="d-flex gap-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className={`nav-link d-flex align-items-center gap-1 ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
              href={item.href}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Topbar
