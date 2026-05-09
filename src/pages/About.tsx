import TeamCard from "../components/TeamCard";
import "../styles/About.css";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      {/* Banner */}
      <section className="about-banner">
        <h1>About SW Technologies</h1>
        <p>We build modern digital solutions for growing businesses.</p>
      </section>

      {/* Company Story */}

      <section className="about-section">
        <h2 className="section-title">Our Story</h2>

        <p className="about-text">
          SW Technologies is a professional web development company helping
          startups, businesses, and entrepreneurs create a strong online
          presence. We specialize in responsive website development, modern UI
          design, e-commerce solutions, and SEO optimization.
        </p>
      </section>

      {/* Mission & Vision */}

      <section className="mission-vision">
        <div className="about-card">
          <h3>Our Mission</h3>

          <p>
            To provide innovative and affordable digital solutions that help
            businesses grow successfully online.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>

          <p>
            To become a trusted global technology partner delivering modern and
            impactful web experiences.
          </p>
        </div>
      </section>

      {/* Team */}

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>

        <div className="team-container">
          <TeamCard
            image="https://i.pravatar.cc/300?img=11"
            name="Rahul Sharma"
            role="Frontend Developer"
          />

          <TeamCard
            image="https://i.pravatar.cc/300?img=12"
            name="Priya Verma"
            role="UI/UX Designer"
          />

          <TeamCard
            image="https://i.pravatar.cc/300?img=13"
            name="Amit Kumar"
            role="Backend Developer"
          />
        </div>
      </section>

      {/* Stats */}

      <section className="stats-section">
        <div className="stat-card">
          <h2>50+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>3+</h2>
          <p>Years Experience</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
