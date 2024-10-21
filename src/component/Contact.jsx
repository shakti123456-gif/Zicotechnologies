import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h1>Our Contact Address Here.</h1>
      <div className="card-container">
        <div className="card">
          <h3>
            <span role="img" aria-label="phone">🎧</span> Contact Phone Number
          </h3>
          <p>+444 555 666 777</p>
          <p>+222 222 222 333</p>
        </div>

        <div className="card">
          <h3>
            <span role="img" aria-label="email">📧</span> Our Email Address
          </h3>
          <p>admin@gmail.com</p>
          <p>example@gmail.com</p>
        </div>

        <div className="card">
          <h3>
            <span role="img" aria-label="location">📍</span> Our Location
          </h3>
          <p>5678 Bangla Main Road, cities</p>
          <p>580 GBnagla, example 54786</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Phone Number" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>
      </form>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.081151848701!2d-0.11809248423045368!3d51.50339917963488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603514bf14ff1%3A0x73063b5b3e8f6b0a!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1603116511444!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
