import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
<Navbar />
            <Hero
                cName="about-hero"
                herotext="hero-text"
                heroImg="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                title="Contact US for Queries"
                text="Feedbacks are Welcome"
                btnClass="hide"
                
            />
            <Form/>

            <Footer/>
             </> )
}

export default Contact