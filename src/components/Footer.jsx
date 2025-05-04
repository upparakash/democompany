// Footer.jsx
import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Follow us on</p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="mailto:yourcompany@example.com"><FaEnvelope /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
    </footer>
  );
}
