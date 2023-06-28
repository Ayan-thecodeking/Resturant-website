import React from 'react'
import './detail.css'
const Detail = () => {
    return (
        <div className="detail wrapper">
            <h1 className='fancy-underline' >Discover Our Roots</h1>
            <p className='main-para'>This heading emphasizes the <span>FoodOmania</span> cultural or culinary roots. It can showcase the influences, traditions, or regional flavors that inspire the restaurant's cuisine.</p>

            <div className="first-about">
                <div className="about-text">
                    <h2>Since 2019</h2>
                    <p>Welcome to <b>FoodOmania</b>, where culinary excellence meets a warm and inviting ambiance. We are a passionate team of food enthusiasts dedicated to creating unforgettable dining experiences. Step into our world and allow us to share our story with you.
<br />
<br />
                        At <b>FoodOmania</b>, we believe that dining is more than just a meal—it's an opportunity to embark on a sensory journey. Our culinary artists meticulously craft each dish with the finest ingredients, combining flavors, textures, and aromas to create a symphony of tastes that will tantalize your palate.!</p>
                </div>
                <div className="image-about">
                    <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    <img src="https://images.unsplash.com/photo-1653291341270-911a6ab1bb83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" alt="img" />
                </div>
            </div>

{/* --------------------------------------------------------- */}

            <div className="first-about-reverse">
                <div className="about-text">
                    <h2>We Deliver</h2>
                    <ul className='points'>
                        <li>Unforgettable flavors crafted with passion.</li>
                        <li>Seasonal delights showcasing local ingredient</li>
                        <li>Handcrafted beverages for a perfect pairing.</li>
                        <li>Enchanting ambiance for an extraordinary dining experience.</li>
                        <li>Enchanting ambiance for an extraordinary dining experience.
                        </li>
                    </ul>
                </div>
                <div className="image-about">
                    <img src="https://images.unsplash.com/photo-1669283714145-f97867f6c238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="img" />
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1681&q=80" alt="img" />
                </div>

                
            </div>
        </div>
    )
}

export default Detail