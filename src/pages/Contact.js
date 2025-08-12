import React from 'react';

function Contact() {

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
        <section className="contact-form inquiry-section">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you and learn more about your family's needs. Click below to fill out our inquiry form or schedule a call with our enrollment specialist, and we'll get back to you as soon as possible.</p>
          <div className="button-group">
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/1aJYFqikwZvsUMRnoqMhlHrA6RUbYnQmJCzB005-yMzc/viewform?edit_requested=true', '_blank')}
              className="inquiry-button"
            >
              Inquiry Form
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/gooserevwa', '_blank')}
              className="inquiry-button"
            >
              Info Call
            </button>
          </div>
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
        </section>
      </div>

      <section className="contact-message-section">
        <div className="contact-message">
          <p>Big questions, little questions, and everything in between — we're just a message away.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
