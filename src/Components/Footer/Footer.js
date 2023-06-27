import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
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
                            href="" target='_food'>
                            <FaInstagramSquare fontSize={34} color='black' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="" target='_food'>
                            <FaYoutubeSquare fontSize={34} color='black' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="" target='_food'>
                            <FaTwitterSquare fontSize={34} color='black' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Footer