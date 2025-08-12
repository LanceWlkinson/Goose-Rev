import React from 'react';

function Careers() {
  return (
    <div className="careers">
      <h1>Your Purpose Has a Place</h1>
      <div className="careers-intro">
        <div>
          <p>At Goose & Rev, we're not just shaping young minds — we're building a movement. Our team is made up of leaders, dreamers, doers, and joy-bringers who believe in the power of play, the value of connection, and the impact of showing up with heart.</p>
          <p>We're creating work environments that lift people up, offer room to grow, and make every day feel meaningful. Whether you're guiding little learners, supporting families, or leading a team — your work matters here.</p>
          <p>If you're ready to be part of something bold, supportive, and built on purpose — apply below. Let's make magic together.</p>
        </div>
        <img 
          src={process.env.PUBLIC_URL + '/images/Goose.png'} 
          alt="Goose mascot" 
          className="careers-intro-image"
        />
      </div>

      <section className="careers-benefits">
        <div className="benefits-container">
          <h2>Why Work With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <p>Leadership training & growth opportunities</p>
            </div>
            <div className="benefit-item">
              <p>Empowering, all-women-led team culture</p>
            </div>
            <div className="benefit-item">
              <p>Play-based, creativity-driven environments</p>
            </div>
            <div className="benefit-item">
              <p>A workplace that feels like family</p>
            </div>
            <div className="benefit-item">
              <p>Transparent communication & real support</p>
            </div>
            <div className="benefit-item">
              <p>Ongoing learning, mentorship, and collaboration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="cta-content">
          <h2>We're always looking for great people — even when we're not hiring.</h2>
          <p>Don't see the right role listed? Tell us why we need you.</p>
          <button onClick={() => window.open('https://docs.google.com/forms/d/1AQkVrtWkWGfHQ8THIFUAfkgZqn7pLNSXMsiQsA7qvWc/viewform?edit_requested=true', '_blank')}>
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default Careers;
