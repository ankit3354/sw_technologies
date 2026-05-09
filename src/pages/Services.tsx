import { FaLaptopCode, FaCode, FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/Services.css";
import Layout from "./Layout";

const Services = () => (
  <Layout>
    <section className="services-banner">
      <h1>Our Services</h1>

      <p>
        Professional digital solutions tailored for businesses and startups.
      </p>
    </section>

    {/* Services Cards */}
    <section className="services-page">
      <div className="services-grid">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />

          <h2>Website Design</h2>

          <p>
            Modern, creative, and responsive website designs that improve user
            experience and brand identity.
          </p>

          <button>Learn More</button>
        </div>

        <div className="service-card">
          <FaCode className="service-icon" />

          <h2>Website Development</h2>

          <p>
            Fast, scalable, and secure websites built using modern technologies
            and best coding practices.
          </p>

          <button>Learn More</button>
        </div>

        <div className="service-card">
          <FaShoppingCart className="service-icon" />

          <h2>E-Commerce Development</h2>

          <p>
            Powerful online stores with payment integration, product management,
            and mobile responsiveness.
          </p>

          <button>Learn More</button>
        </div>

        <div className="service-card">
          <FaSearch className="service-icon" />

          <h2>SEO & Digital Marketing</h2>

          <p>
            Improve search engine rankings and grow your business visibility
            with smart marketing strategies.
          </p>

          <button>Learn More</button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
