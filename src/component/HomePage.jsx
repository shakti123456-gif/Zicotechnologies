import './HomePage.css';
import ZicoLogo from '../logo/Zico-logo.png';
import  Consult from '../logo/Consult.png';
import  Design from '../logo/Implement.png';
import  Support from '../logo/support.png';
import Train from '../logo/Train.png';
import MemberImage from '../logo/member.png';
import React, { useState, useEffect, useRef } from "react";
// import testimonialsData from src/component/Testomonial.js;


const HomePage = () => {

  const testimonialsData = [
    {
      name: "Ricardo's Feedback - PHARMAVISE",
      job: "Licel Joy Hontalba Manager",
      feedback:"With the invaluable support of the team at Zico Technologies, we have successfully transitioned from manually handling our activities in Zoho to implementing automated workflows that significantly enhance our business operations and sales processes. The team is highly collaborative and adept at tailoring workflows to meet our specific needs, ensuring a seamless experience. Their expertise and dedication have truly made a positive impact on our operational efficiency.",
      // imageUrl: {member},
    },
    {
      name: "Ricardo's Feedback - PHARMAVISE",
      job: "Licel Joy Hontalba Manager",
      feedback:"With the invaluable support of the team at Zico Technologies, we have successfully transitioned from manually handling our activities in Zoho to implementing automated workflows that significantly enhance our business operations and sales processes. The team is highly collaborative and adept at tailoring workflows to meet our specific needs, ensuring a seamless experience. Their expertise and dedication have truly made a positive impact on our operational efficiency.",
      // imageUrl: {member},
    },
    {
      name: "Ricardo's Feedback - PHARMAVISE",
      job: "Licel Joy Hontalba Manager",
      feedback:"With the invaluable support of the team at Zico Technologies, we have successfully transitioned from manually handling our activities in Zoho to implementing automated workflows that significantly enhance our business operations and sales processes. The team is highly collaborative and adept at tailoring workflows to meet our specific needs, ensuring a seamless experience. Their expertise and dedication have truly made a positive impact on our operational efficiency.",
      // imageUrl: {member},
    },
  ];
  
  const services = [
    { icon: '', title: 'Awarded Design', description: 'There are many variations of passages of Lorem Ipsum available.' },
    { icon: '📡', title: 'Design & Creative', description: 'Passages there are many variations available in different ways.' },
    { icon: '📱', title: 'App Development', description: 'Variations of passages available, the majority have suffered alteration.' },
  ];

  const [counters, setCounters] = useState({
    clients: 0,
    employees: 0,
  });

  useEffect(() => {
    // Start the counters when the component loads
    const incrementCounters = () => {
      setCounters(prevCounters => {
        const newClients = Math.min(prevCounters.clients + 1, 199);
        const newEmployees = Math.min(prevCounters.employees + 3, 575);
        
        return {
          clients: newClients,
          employees: newEmployees,
        };
      });
    };

    // Increment the numbers gradually over time
    const intervalId = setInterval(incrementCounters, 50); // Adjust speed here

    // Stop when the numbers reach their targets
    return () => clearInterval(intervalId);
  }, []);
  
  
  return (
    <>
  <header className="header-banner">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img className="ZicoLogo" src={ZicoLogo} alt="Zico Logo" />
                </div>
                <ul className="navbar-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/elements">Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/testimonial">Testimonial</a></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="buy-now">Buy Now</button>
                    <button className="settings-btn"><i className="fa fa-cog"></i></button>
                </div>
            </nav>

            <div className="banner-content">
                {/* <h5>MEET CONSULTING</h5> */}
                <p className='heading'>Maximize your business potential  with <br/>expert zoho consultancy and Development.</p>
                <button className="banner-button">Contact Us</button>
                <button className="banner-button">Services</button>
            </div>
        </header> 

  {/*  */}

  <section className="about-section">
      <div className="image-container">
        <div className="background-layer"></div>
        <img
          src="https://via.placeholder.com/600x400" // Replace with your actual image
          alt="Business"
          className="foreground-image"
        />
      </div>

      <div className="content-container">
        {/* <span className="section-tag">Corporate About.</span> */}
        <h2 className="section-title"> Welcome to ZICO Technologies</h2>
        <p className="section-description">
          At ZiCO Technologies, We Specialize In offering Comprehensive Zoho Implementation and Consulting<br/> 
          Services catered to the particular requirements of your business. Our dedicated team of professionals is committed to helping organizations streamline their processes, enhance productivity, and achieve sustainable growth through the powerful capabilities of the Zoho suite.
        </p>

        <ul className="feature-list">
          <li>- Join us in transforming your business with innovative solutions that unlock your full potential.
          Together, we can pave the way for a future of excellence!</li>
        </ul>

        <button className="banner-button">More About Us →</button>
      </div>
    </section>

{/*  */}
    
<section className="services-section">
            <div className="services-header">
                <h5>What We Can Do For You</h5>
                <h2>Services provide for you.</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                </p>
            </div>
            <div className="services-container">
                <div className="service-card">
                <img src={Consult} alt="Consult" className="service-icon" />
                    <h3>Consult</h3>
                    <p>We conduct a thorough analysis of your business processes, identifying key pain points and gaps. Our experts evaluate your company need to develop tailored strategies and solutions that will enhance efficiency, streamline operations, and align Zoho with your unique goals.</p>
                </div>
                <div className="service-card">
                <img src={Design} alt="Consult" className="service-icon" />
                    <h3>Design & Creative</h3>
                    <p>With years of experience in Zoho, our developers ensure a seamless implementation of your Zoho applications. We prioritize quality by conducting multiple rounds of testing and quality assurance, guaranteeing a tailored solution that effectively addresses your unique challenges. </p>
                </div>
                <div className="service-card">
                <img src={Support} alt="Consult Icon" className="service-icon" />
                    <h3>Support</h3>
                    <p>We are dedicated to ensuring a smooth transition to Zoho. We provide ongoing assistance, addressing any questions or concerns your team may have as they adapt to the new system. we are here to help you fully leverage Zoho’s capabilities for optimal performance and continuous improvement.</p>
                </div>
                <div className="service-card">
                <img src={Train} alt="Consult Icon" className="service-icon" />
                    <h3>Train</h3>
                    <p>Our training is designed to ensure that your team fully understands and effectively utilizes the platform. This includes hands-on sessions, and practical guidance tailored to your specific business processes. Our goal is to empower your team with the skills needed to leverage Zoho for enhanced productivity and collaboration.</p>
                </div>

            </div>
        </section>

    <div className="testimonials-container">
      <h2 className="section-title">What People Say About Us.</h2>
      <p className="section-subtitle">
        We provide company and finance service for startups and company business.
      </p>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={MemberImage} alt={testimonial.name} />
              <div className="quote-icon">“</div>
            </div>
            <div className="card-content">
              <p className="feedback">"{testimonial.feedback}"</p>
              <h3 className="name">{testimonial.name}</h3>
              <p className="job">{testimonial.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>  

    <footer className="footer">
            <div className="footer-top">
                <h2 className="footer-logo">ZICO Technologies</h2>
                <button className="footer-contact-btn">CONTACT US</button>
            </div>
           
            <div className="footer-legal">
                <p>
                    Privacy Policy | Terms And Condition | Contact Us
                </p>
                <p>
            <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a> 
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a> 
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </p>
                {/* <p>Copyright © 2024 Doob WordPress Theme.</p> */}
            </div>
        </footer>



    </>

  )
};


export default HomePage;
