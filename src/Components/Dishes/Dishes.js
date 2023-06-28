import React,{useEffect} from 'react'
import './dishes.css'
import DishData from './DishData'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Dishes = () => {
    useEffect(()=> {
        AOS.init({duration:2000})
      },[]);
    return (
        <>
            <div className="dish wrapper" data-aos="zoom-in">
                <h1>Delight Your Palate with Our Menu</h1>
                <p>Where Flavor Takes Center Stage . So Explore our menu</p>

                <DishData />
            </div>
            <Footer />
        </>)
}

export default Dishes