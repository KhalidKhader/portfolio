import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Khalidalkhader@gmail.com</h5>
            <a href='mailto:khalidalkhader@gmail.com' target='_blank'>Send a Email</a>
          </article>

          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Khalid Khader</h5>
            <a href='https://m.me/khalidalkhader2000/' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+972568807701</h5>
            <a href='https://wa.me/972568807701' target='_blank'>Send a Message</a>
          </article>
          </div>

          <form action=''>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send a Message</button>

          </form>
          
      </div>


    </section>
  )
}

export default Contact
