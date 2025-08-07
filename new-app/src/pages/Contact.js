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
    
    // Format the email body with all the form information
    const emailBody = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Child's Age: ${formData.childAge}

Message:
${formData.message}
    `;

    // Create mailto URL with the form data
    const mailtoLink = `mailto:lancewilkinson388@yahoo.com?subject=New Contact Form Submission - ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for your inquiry! Your email client should open with your message. We will contact you soon.');

    // Reset the form
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
        <h2>Let's Connect</h2>
        <div className="welcome-message">
          <p>We're so glad you found us — and we can't wait to learn more about you and your family! Whether you're exploring enrollment, scheduling a tour, or just curious about what makes Goose & Rev different, our team is here and happy to help.</p>
        </div>
        <div className="contact-prompt">
          <p>Have a question? Need guidance? Just want to say hi?</p>
          <p>Send us a message and someone from our flock will be in touch soon.</p>
        </div>
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
          <h2>Need to reach us directly?</h2>

          <div className="contact-method">
            <span>📞</span>
            <div className="contact-method-text">
              <h3>Phone</h3>
              <p>(509)-579-4150</p>
            </div>
          </div>

          <div className="contact-method">
            <span>✉️</span>
            <div className="contact-method-text">
              <h3>Email</h3>
              <p>info@gooseandrev.com</p>
            </div>
          </div>
          
          <div className="contact-message">
            <p>Big questions, little questions, and everything in between — we're just a message away.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
