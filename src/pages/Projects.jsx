import React from 'react';
import './Projects.css';
import Img2 from '../assets/dashboard.png';
import Img3 from '../assets/s2dashboard.png';

export default function Projects() {
  return (
    <div className="projects-container">
      <section className="edtech-section">
        <h2>My Digital Technologies: Ed-Tech Solutions</h2>
        <img src={Img2} alt="School Management Dashboard" className="project-image" />
        <p>
          My Digital Technologies is a leading Ed-tech solutions provider. We help schools streamline operations and enhance student experiences through our innovative school management software.
        </p>
        <h3>Our School Management Software (SMS) includes:</h3>
        <ul>
          <li>Automated administrative tasks</li>
          <li>Enhanced teacher-parent communication</li>
          <li>Student performance and attendance tracking</li>
          <li>Secure online fee payment</li>
          <li>Mobile app for on-the-go access</li>
        </ul>
        <p>
          Interested in learning more? <a href="mailto:hr@digitech.com">Schedule a demo</a> to see how our solution can benefit your institution.
        </p>
        <p>
          Contact us at: <a href="mailto:hr@digitech.com">hr@digitech.com</a> | <a href="tel:+918957463210">+91 8957463210</a>
        </p>
      </section>

      <section className="technician-service-section">
        <h2>My Digital Technologies: Technician Service Solutions</h2>
        <img src={Img3} alt="Technician Service Dashboard" className="project-image" />
        <p>
          My Digital Technologies is a product-based company dedicated to transforming the way technician service providers connect with their customers. We specialize in developing cutting-edge mobile and web applications tailored to meet the unique needs of service professionals across industries.
        </p>
        <p>
          Our platform, <strong>S2S (My Services)</strong>, empowers service providers to manage appointments, track job progress, receive real-time updates, and communicate seamlessly with customers.
        </p>
        <h3>Features of the My Technician Service Mobile App for Customers:</h3>
        <ul>
          <li>Easy service request with preferred time</li>
          <li>Real-time updates on technician's arrival and service status</li>
          <li>Direct communication with technicians via chat or call</li>
          <li>Access to service history and invoices</li>
          <li>Secure and convenient payment options with digital receipts</li>
        </ul>
        <p>
          For more details, reach out to us at: <a href="mailto:hr@digitech.com">hr@digitech.com</a> | <a href="tel:+918957463210">+91 8957463210</a>
        </p>
      </section>
    </div>
  );
}
