import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you're interested in enrolling your child, scheduling a tour, or simply learning more about our programs, we're here to help.</p>
      </section>

      <div className="contact-container">
        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age:</label>
              <input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">How Can We Help You?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your needs, questions, or schedule a tour..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-details">
          <h2>Contact Information</h2>
          
          <div className="contact-method">
            <span>📞</span>
            <div className="contact-method-text">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="contact-method">
            <span>✉️</span>
            <div className="contact-method-text">
              <h3>Email</h3>
              <p>info@brightfutures.com</p>
            </div>
          </div>

          <div className="contact-method">
            <span>📍</span>
            <div className="contact-method-text">
              <h3>Location</h3>
              <p>123 Learning Lane,<br />Sunshine City, SC 12345</p>
            </div>
          </div>

          <div className="contact-method">
            <span>⏰</span>
            <div className="contact-method-text">
              <h3>Hours</h3>
              <p>Monday - Friday<br />7:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1627309374137!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
