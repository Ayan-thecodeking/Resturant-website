import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Detail from '../DetailFood/Detail'
import Team from '../Team/Team'


const About = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="about-hero"
                herotext="hero-text"

                heroImg="https://images.unsplash.com/photo-1651978595432-905a420b879d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                title="About FoodOmania"
                text="Check about us"
                btnClass="hide"
                
            />
            <Detail/>
            <Team/>
        </>)
}

export default About