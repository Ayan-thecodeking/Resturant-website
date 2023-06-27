import React from 'react'
import './menu.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Dishes from '../Dishes/Dishes'
const Menu = () => {
  return (
    <>
    <Navbar />
                <Hero
                    cName="about-hero"
                    herotext="hero-text"

                    heroImg="https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="Explore our Delicious"
                    text="So yummy yummy"
                    btnClass="hide"
                    
                    /> 
                    <Dishes/>
                    </>
 )
}

export default Menu