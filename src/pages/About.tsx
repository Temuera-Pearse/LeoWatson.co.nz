import React from 'react'

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="align-items-center justify-content-center text-white"
      style={{
        backgroundColor: '#4A5568',
        minHeight: '100vh',
      }}
    >
      {' '}
      <div className="container py-5">
        <div className="mb-4">
          <h4 className="fw-semibold">Leo Watson — Barrister and Solicitor</h4>
          <p className="fst-italic small">
            Bachelor of Laws (First Class Hons) · Bachelor of Arts (Māori
            Language and Customs)
          </p>
        </div>

        <p>
          Leo is a legal practitioner with over{' '}
          <strong>21 years’ experience</strong> in Indigenous Law including
          Treaty of Waitangi claims, Māori land, compulsory acquisition and
          public works, administrative law, fisheries, traditional knowledge and
          Intellectual Property, employment and environmental law.
        </p>

        <p>
          Leo represents a range of clients in the Courts and Tribunals,
          mediation, facilitated hui, and commercial negotiations. Clients
          include Trusts, claimants in the Waitangi Tribunal in historical and
          contemporary claims, Rūnanga, local government, and both Māori and
          non-Māori businesses in the private sector.
        </p>

        <blockquote className="blockquote mt-4">
          <p className="mb-0">
            "...My practice is focused on finding solutions; empathy for our
            whenua and natural resources; and a passion for justice..."
          </p>
        </blockquote>

        <div className="mt-4">
          <a href="#contact" className="btn btn-outline-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
