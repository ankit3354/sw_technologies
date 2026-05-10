import { useState } from "react";
import "../styles/Contact.css";
import Layout from "./Layout";
import axios from "axios";
import { toast } from "react-toastify";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required";
    }
    if (formData.phone.length < 10) {
      newErrors.phone = "Valid phone number required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        setLoading(true);
        const response = await axios.post(
          `${VITE_API_URL}/api/contact`,
          formData,
        );
        toast.success(response.data.message);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      {/* Banner */}
      <section className="contact-banner">
        <h1>Contact Us</h1>

        <p>We would love to hear from you.</p>
      </section>

      {/* Contact Section */}

      <section className="contact-section">
        {/* Form */}

        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span>{errors.subject}</span>}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span>{errors.message}</span>}
            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Send Message"}
            </button>{" "}
          </form>
        </div>

        {/* Contact Info */}

        <div className="contact-info">
          <h2>Contact Details</h2>

          <p>
            <strong>Address:</strong> New Delhi, India
          </p>

          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>

          <p>
            <strong>Email:</strong> info@swtechnologies.com
          </p>

          {/* Google Map */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48198714596!2d76.76357256015754!3d28.52728034346744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff0fb%3A0xf5c0f25f6d5f3e57!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
