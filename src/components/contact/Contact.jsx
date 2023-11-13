import React, { useState } from "react";
import "./contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import AlertTitle  from "@mui/material/AlertTitle";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rfd05zg', 'template_176evqa', e.target,'sIY1d9ALoqDRyU_eO')
      .then((result) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        console.log('Email sent successfully:', result.text);
        return(
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Email sent successfully
          </Alert>
        );
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        return(
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error sending email
          </Alert>
        );
      });
      setTimeout(() => {
        setSubmissionMessage({
          type: 'success',
          message: 'Email sent successfully!',
        });
      }, 1000);
  };
  

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Khalidalkhader@gmail.com</h5>
            <a href="mailto:khalidalkhader@gmail.com" target="_blank">
              Send a Email
            </a>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Khalid Khader</h5>
            <a href="https://m.me/khalidalkhader2000/" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+972568807701</h5>
            <a href="https://wa.me/972568807701" target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
          {submissionMessage.type && (
        <Alert severity={submissionMessage.type}>
          <AlertTitle>{submissionMessage.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
          {submissionMessage.message}
        </Alert>
      )}
        </form>
         
      </div>
    </section>
  );
};

export default Contact;
