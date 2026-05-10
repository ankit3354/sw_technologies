import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/QuoteModal.css";

const VITE_SERVER_URL = process.env.VITE_SERVER_URL;

interface QuoteModalProps {
  closeModal: () => void;
}

const QuoteModal = ({ closeModal }: QuoteModalProps) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${VITE_SERVER_URL}/api/quote`,
        formData,
      );

      toast.success(response.data.message);

      closeModal();
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="quote-modal">
        <button className="close-btn" onClick={closeModal}>
          ×
        </button>

        <h2>Get Free Quote</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <select name="serviceRequired" onChange={handleChange}>
            <option value="">Select Service</option>

            <option>Website Design</option>

            <option>Website Development</option>

            <option>E-Commerce</option>

            <option>SEO Marketing</option>
          </select>

          <select name="budget" onChange={handleChange}>
            <option value="">Select Budget</option>

            <option>₹10,000 - ₹20,000</option>

            <option>₹20,000 - ₹50,000</option>

            <option>₹50,000+</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            onChange={handleChange}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
