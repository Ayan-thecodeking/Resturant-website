import React from 'react'
import './hero.css';
const Hero = (props) => {
  return (
<div className={props.cName}>
    <img src={props.heroImg} alt="img" />
    <div className={props.herotext}>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
</div>  )
}

export default Hero