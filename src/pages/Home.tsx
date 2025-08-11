import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm/ContactForm'
import Expertise from './Expertise'
import Landing from './Landing'
import Contact from './Contact'
import About from './About'

const Home: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Expertise />
      <Contact />

      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
