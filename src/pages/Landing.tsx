import React from 'react'

const Landing: React.FC = () => {
  return (
    <section
      id="landing"
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/background.png")', // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // You can make this lighter/darker
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 2 }} className="container px-4">
        <h1 className="display-4 fw-bold mb-3">Nau mai, Whakatau mai</h1>
        <p className="lead fst-italic mb-4">
          "Kia rongo i te hā o te whenua, kia ora i te tai o te ao, tihei mauri
          ora...!"
        </p>
      </div>
    </section>
  )
}

export default Landing
