import './dishes.css'


import React from 'react'

const DishData = (props) => {
  return (
    <div className="cards">
        <div className="image">
            <img src={props.img} alt="img" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <span className="price">{props.price}</span>

    </div>
  )
}

export default DishData