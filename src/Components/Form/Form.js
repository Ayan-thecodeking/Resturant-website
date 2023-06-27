import React from 'react'
import './form.css'
const Form = () => {
  return (
<div className="form-con">

  <h1>We'd love to hear from you!</h1>
  <p>Whether you have a question, feedback, or simply want to say hello, our team is here to assist you.</p>
  <form action="Fill">
    <input type="text" placeholder='name' />
    <input type="text" placeholder='Email' />
    <input type="text" placeholder='Subject' />
    <textarea placeholder='message' rows="4"></textarea>
   <button>Send Message</button>
  </form>
</div>  )
}

export default Form