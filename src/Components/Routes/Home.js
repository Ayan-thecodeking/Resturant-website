import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './home.css'
const Home = () => {
  return (
    
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
    title="The Key To Fine Dinning"
    text="Choose your favourite meal"
    buttonText="Explore Meal"
    url="/"
    btnClass="show"
    />
    <Footer/>
    </>
  )
}

export default Home