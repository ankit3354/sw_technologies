import { FaCode, FaShoppingCart, FaSearch, FaLaptopCode } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import Layout from "./Layout";
import "../styles/Home.css";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Digital Presence With SW Technologies</h1>

          <p>
            We create fast, modern, and responsive websites that help businesses
            grow online.
          </p>

          <div className="hero-buttons">
            <Button text="Get a Free Quote" />

            <Button text="View Our Services" secondary={true} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>

        <div className="card-container">
          <ServiceCard
            icon={FaLaptopCode}
            title="Web Design"
            description="Creative and professional UI/UX website designs for businesses."
          />

          <ServiceCard
            icon={FaCode}
            title="Web Development"
            description="Modern and scalable web applications using latest technologies."
          />

          <ServiceCard
            icon={FaShoppingCart}
            title="E-Commerce"
            description="Powerful online stores with payment gateway integration."
          />

          <ServiceCard
            icon={FaSearch}
            title="SEO Optimization"
            description="Improve rankings and grow your business with digital marketing."
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="card-container">
          <div className="card">
            <h3>Fast Delivery</h3>
            <p>Quick project completion with quality assurance.</p>
          </div>

          <div className="card">
            <h3>Modern Design</h3>
            <p>Responsive and attractive designs for all devices.</p>
          </div>

          <div className="card">
            <h3>Affordable Pricing</h3>
            <p>Professional solutions at budget-friendly prices.</p>
          </div>

          <div className="card">
            <h3>24/7 Support</h3>
            <p>Dedicated support whenever you need help.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="card-container">
          <TestimonialCard
            review="SW Technologies built our business website perfectly. Amazing experience!"
            name="Rahul Sharma"
          />

          <TestimonialCard
            review="Professional team with modern designs and excellent support."
            name="Priya Verma"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
