import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer
      className="text-dark mt-auto py-4 px-3 "
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="container text-center small">
        <p className="mb-2">
          Click <strong>Contact Page</strong> for Site Map to Office
        </p>
        <p className="mb-2">
          342 Gloucester Street · Taradale · Napier 4112 · Aotearoa/New Zealand
        </p>
        <p className="mb-1">
          Tel: <a href="tel:066507119">06 - 650 7119</a> &nbsp;·&nbsp; Mobile:{' '}
          <a href="tel:0272749068">027 274 9068</a> &nbsp;·&nbsp; Email:{' '}
          <a href="mailto:leo@leowatson.co.nz">leo@leowatson.co.nz</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
