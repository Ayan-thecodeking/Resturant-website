import React from 'react'
import './dishes.css'
import DishData from './DishData'
const Dishes = () => {
    return (
        <>
            <div className="dish">
                <h1>Delight Your Palate with Our Menu</h1>
                <p>Where Flavor Takes Center Stage . So Explore our menu</p>
                <div className="dishcard">

                    <DishData
                        img="https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"
                        heading="Pasta"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                    <DishData
                        img="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        heading="Pizza"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                    <DishData
                        img="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                        heading="Burger"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
{/* -------------------------------------------------------- */}

                    <DishData
                        img="https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80"
                        heading="Noodles"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                    <DishData
                        img="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                        heading="Momo"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                    <DishData
                        img="https://images.unsplash.com/photo-1639667852145-466e29aa49fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        heading="Sandwhich"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                    {/* ------------------------------------------------------------ */}
                    <DishData
                        img="https://images.unsplash.com/photo-1601091581856-07d8bd49e47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        heading="Soda"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                      <DishData
                        img="https://images.unsplash.com/photo-1524156868115-e696b44983db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
                        heading="Mango Juice"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />
                      <DishData
                        img="https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                        heading="Oreo Shake"
                        text="This is the special italian pasta we serve to make your day bright and healthy"
                        price="120/-"

                    />

                </div>
            </div>
        </>)
}

export default Dishes