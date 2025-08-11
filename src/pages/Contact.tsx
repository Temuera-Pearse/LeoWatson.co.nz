import MapEmbed from '../components/Map/MapEmbed'

function Contact() {
  return (
    <section
      id="contact"
      className="text-dark pt-5 d-flex align-items-center"
      style={{
        backgroundColor: '#E2E8F0', // Light gray/blue
        minHeight: '100vh',
      }}
    >
      <div className="container py-5">
        <h2 className="mb-5 text-center">Contact Details</h2>

        <div className="row">
          {/* Contact Details */}
          <div className="col-lg-6 mb-4">
            <div className="mb-4">
              <h5 className="fw-bold">Physical Office & Courier:</h5>
              <p>
                342 Gloucester Street
                <br />
                Taradale
                <br />
                Napier 4112
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Postal:</h5>
              <p>
                342 Gloucester Street
                <br />
                Taradale
                <br />
                Napier 4112
                <br />
                Aotearoa / New Zealand
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Telephone:</h5>
              <p>
                Office: <a href="tel:(+64)066507119">(+64) 06 - 650 7119</a>
                <br />
                Mobile: <a href="tel:0272749068">027 274 9068</a>
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Email:</h5>
              <p>
                <a href="mailto:leo@leowatson.co.nz">leo@leowatson.co.nz</a>
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Fax:</h5>
              <p>(+64) 06 - 650 7120</p>
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

          {/* Contact Form */}
          <div className="col-lg-6">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
