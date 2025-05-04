import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../assets/background.jpg';
import Img2 from '../assets/home1.png';
import Img3 from '../assets/home2.jpg';
import Img4 from '../assets/home3.jpg';
import './Home.css';

export default function Home() {
  const cards = [
    {
      image: Img2,
      title: 'Mobile App Development',
      description: 'We create high-quality mobile applications tailored to your business needs.',
      link: '/services/mobile-app-development',
    },
    {
      image: Img3,
      title: 'Web App Development',
      description: 'Our team builds scalable and secure web applications for various industries.',
      link: '/services/web-app-development',
    },
    {
      image: Img4,
      title: 'UI/UX Design',
      description: 'Enhance user satisfaction with our intuitive and engaging UI/UX designs.',
      link: '/services/ui-ux-design',
    },
  ];

  return (
    <div className="home-container">
      <img src={Img1} alt="Background" className="home-image" />
      <div className="home-text">Welcome to Our Website</div>

      <div className="home-description">
        <div className="image-gallery">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.link} className="read-more-button">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-content">
          <p>
            Our company specializes in delivering high-quality <strong>mobile app</strong> and <strong>web app development</strong> services tailored to meet your business needs. Whether you're a startup or an enterprise, we offer scalable, secure, and modern digital solutions.
          </p>
          <p>
            Established in <strong>2015</strong>, we have built a reputation for excellence in software development with a focus on client satisfaction, innovation, and timely delivery. Our team of skilled developers and designers are committed to turning your ideas into impactful products.
          </p>
          <Link to="/AboutUs" className="learn-more-button">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
