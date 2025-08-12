import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Goose & Rev Academy</h1>
          <h2>Where Play Fuels Purpose</h2>
          <p className="hero-text">Nurturing curious minds from 6 weeks to 6 years</p>
          <p className="hero-text">Led by experienced educators.</p>
          <p className="hero-text">Rooted in connection. Powered by play.</p>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <img src={process.env.PUBLIC_URL + "/images/GooseHeart.png"} alt="Goose heart" />
          </div>
          <h3>Nurturing Environment</h3>
          <p>Creating a safe and loving space for your child to grow and learn.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={process.env.PUBLIC_URL + "/images/GooseGrad.PNG"} alt="Goose graduation" />
          </div>
          <h3>Expert Teachers</h3>
          <p>Dedicated professionals committed to early childhood development.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={process.env.PUBLIC_URL + "/images/GooseBlocks.PNG"} alt="Goose blocks" />
          </div>
          <h3>Play-Based Learning</h3>
          <p>Educational activities that make learning fun and engaging.</p>
        </div>
      </section>

      <section className="cta">
        <img 
          src={process.env.PUBLIC_URL + "/images/goose-backpack.png"}
          alt="Goose mascot"
          className="cta-mascot"
        />
        <div className="cta-content">
          <h2>Give Your Child the Best Start</h2>
          <p>Enroll now or schedule a tour to learn more about our programs.</p>
          <button onClick={() => navigate('/contact')}>Contact Us Today</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
