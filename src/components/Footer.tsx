import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const VITE_API_URL = import.meta.env.VITE_API_URL;

console.log("VITE_API_URL", VITE_API_URL);

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${VITE_API_URL}/api/newsletter/subscribe`,
        { email },
      );
      toast.success(response.data.message);
      setEmail("");
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
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
      <div className="newsletter">
        <h4>Newsletter</h4>

        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Subscribe"}
          </button>
        </form>
      </div>

      <div className="copyright">
        © 2026 SW Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
