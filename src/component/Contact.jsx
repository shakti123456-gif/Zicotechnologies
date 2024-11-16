import React, { useRef,useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lapmb9e', // Replace with your service ID
        'template_unsoecf', // Replace with your template ID
        form.current,
        'qP88Mh0_4WBv68KYN' // Replace with your publicKey (User ID)
      )
      .then(
        () => {
          setMessage('Your response has been successfully added.');
          form.current.reset();

          // Redirect to home after 3 seconds
          setTimeout(() => {
            navigate('/'); 
          }, 500); 
        },
        (error) => {
          setMessage('Failed to send email, please try again.');
        }
      );
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="card-container">
        <div className="card">
          <h3>🎧 Contact Phone Number</h3>
          <p>+444 555 666 777</p>
          <p>+222 222 222 333</p>
        </div>

        <div className="card">
          <h3>📧 Our Email Address</h3>
          <p>admin@gmail.com</p>
          <p>example@gmail.com</p>
        </div>

        <div className="card">
          <h3>📍 Our Location</h3>
          <p>5678 Bangla Main Road, cities</p>
          <p>580 GBnagla, example 54786</p>
        </div>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>

      {message && <p className="response-message">{message}</p>}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.081151848701!2d-0.11809248423045368!3d51.50339917963488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603514bf14ff1%3A0x73063b5b3e8f6b0a!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1603116511444!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
