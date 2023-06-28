import React,{useEffect} from 'react'
import './hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = (props) => {
  useEffect(()=> {
    AOS.init({duration:2000})
  },[]);
  return (
<div data-aos="fade-down" className={props.cName}>
    <img src={props.heroImg} alt="img" />
    <div  className={props.herotext}>
    <h1 data-aos="zoom-in">{props.title}</h1>
    <p data-aos="zoom-in">{props.text}</p>
    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
</div>  )
}

export default Hero