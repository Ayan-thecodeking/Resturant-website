import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    useEffect(()=> {
        AOS.init({duration:2000})
      },[]);
    return (
        <div className="footer" data-aos="zoom-in">
            <div className="top">
                <h1 className='title'>
                    FoodOmania
                </h1>
                <p>Choose your favourite meal</p>
            </div>
            <div className="social">
                <ul className="social-media">

                    <li>
                        <a
                            href="" target='_food'>
                            <FaFacebookSquare fontSize={34} color='black' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/" target='_food'>
                            <FaInstagramSquare fontSize={34} color='black' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/" target='_food'>
                            <FaYoutubeSquare fontSize={34} color='black' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/" target='_food'>
                            <FaTwitterSquare fontSize={34} color='black' />
                        </a>
                    </li>
                </ul>
            </div>
               
        </div>

    )
}

export default Footer