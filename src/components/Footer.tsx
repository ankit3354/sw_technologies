import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>SW Technologies</h3>
        <p>Helping businesses grow digitally.</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>

      <div>
        <h4>Contact Info</h4>
        <p>Email: info@swtech.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <div>
        <h4>Follow Us</h4>

        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>

      <div className="copyright">
        © 2026 SW Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
