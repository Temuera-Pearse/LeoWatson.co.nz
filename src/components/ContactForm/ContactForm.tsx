import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: connect to email API / backend service
    alert('Message sent!')
  }

  return (
    <form
      id="contactForm"
      onSubmit={handleSubmit}
      className="container my-4 py-4 bg-light rounded shadow-sm"
      style={{
        backgroundColor: '#2D3748', // Darker gray
        minHeight: '100vh',
      }}
    >
      <h4 className="mb-4">Send a Message</h4>
      <div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="organisation" className="form-label">
            Organisation
          </label>
          <input
            type="text"
            className="form-control"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
