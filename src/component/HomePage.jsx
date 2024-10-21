import './HomePage.css';
import ZicoLogo from '../logo/Zico-logo.png';
import React, { useState, useEffect, useRef } from "react";
// import testimonialsData from src/component/Testomonial.js;


const HomePage = () => {

  const testimonialsData = [
    {
      name: "Sr Janen Sara",
      job: "Sr. Web Developer",
      feedback:
        "Proin libero vel lorem dui. Lorem est aliquet luctus purus justo eget libero sed lorem.",
      imageUrl: "path_to_image_1.jpg",
    },
    {
      name: "Afsana Nila",
      job: "App Developer",
      feedback:
        "Wow, but really wow... The template is nice, but it had some challenges.",
      imageUrl: "path_to_image_2.jpg",
    },
    {
      name: "Afanan Sifa",
      job: "Accounts Manager",
      feedback:
        "Proin libero vel lorem dui. Lorem est aliquet luctus purus justo eget libero sed lorem.",
      imageUrl: "path_to_image_3.jpg",
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

    {/* <header className="navbar">
      <div className="logo">
        <img
          src={ZicoLogo}  // Replace with your logo's URL
          alt="Logo"
          className="logo-img"
        />
      </div>
      <nav className="nav-links">
        <a href="#about" className='linksButton'>about</a>
        <a href="#contact" className='linksButton'>Contact</a>
      </nav>
      <div className="nav-actions">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" className='Buynow' >BUY NOW</button>

        <button className="toggle-theme">
          <span role="img" aria-label="toggle-light-mode">☀️</span>
        </button>
      </div>
    </header> */}
  
  {/*  */}
    {/* <section className="hero">
      <div className="hero-text">
        <h5>Meet Consulting</h5>
        <h1>
          Financial Analysis <br />
          Developing Meeting.
        </h1>
      </div>
      <div className="hero-image">
        <img
          src="https://via.placeholder.com/500" // Replace with the correct image path
          alt="Person reading documents"
        />
      </div>
    </section> */}

  {/*  */}
  
  <header className="header-banner">
            <nav className="navbar">
                <div className="navbar-logo">
                    <h2>DOOB</h2>
                </div>
                <ul className="navbar-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/elements">Elements</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="buy-now">Buy Now</button>
                    <button className="settings-btn"><i className="fa fa-cog"></i></button>
                </div>
            </nav>

            <div className="banner-content">
                <h5>MEET CONSULTING</h5>
                <h1>Financial Analysis <br />Developing Meeting.</h1>
                <button className="banner-button">BUY DOOB NOW</button>
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
        <span className="section-tag">Corporate About.</span>
        <h2 className="section-title">About Our Business.</h2>
        <p className="section-description">
          Lorem ipsum dolor, sit amet consectetur adipiscing elit. Sed quod autem sequi 
          reprehenderit labore consequuntur excepturi. Voluptatibus omnis similique qui unde
          eligendi tempora, ea at, laudantium nostrum minus pariatur quasi!
        </p>

        <ul className="feature-list">
          <li>- Track your teams progress with mobile app.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipiscing.</li>
          <li>- Ipsum dolor sit amet consectetur adipiscing.</li>
          <li>- Your teams progress with mobile app.</li>
        </ul>

        <button className="more-button">More About Us →</button>
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
                    <i className="fa fa-heartbeat service-icon blue"></i>
                    <h3>Awarded Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div className="service-card">
                    <i className="fa fa-pencil-alt service-icon red"></i>
                    <h3>Design & Creative</h3>
                    <p>Passages there are many variations of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div className="service-card">
                    <i className="fa fa-mobile-alt service-icon purple"></i>
                    <h3>App Development</h3>
                    <p>Variations there are many passages of Lorem Ipsum available, but the majority have suffered.</p>
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
              <img src={testimonial.imageUrl} alt={testimonial.name} />
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
                <h2 className="footer-logo">DOOB</h2>
                <button className="footer-contact-btn">CONTACT US</button>
            </div>
           
            <div className="footer-legal">
                <p>
                    Privacy Policy | Terms And Condition | Contact Us
                </p>
                <p>Copyright © 2024 Doob WordPress Theme.</p>
            </div>
        </footer>



    </>

  )
};


export default HomePage;
