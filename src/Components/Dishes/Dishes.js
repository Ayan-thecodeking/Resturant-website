import React from 'react'
import './dishes.css'
import DishData from './DishData'
import Footer from '../Footer/Footer'
const Dishes = () => {
    return (
        <>
            <div className="dish">
                <h1>Delight Your Palate with Our Menu</h1>
                <p>Where Flavor Takes Center Stage . So Explore our menu</p>

<DishData/>


            </div>
            <Footer/>
        </>)
}

export default Dishes