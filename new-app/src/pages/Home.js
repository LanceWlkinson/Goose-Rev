import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Daycare Center</h1>
          <h2>Where Learning Meets Play</h2>
          <h2>Experienced Teachers • Play-Based Education</h2>
          <h2>Ages 6 weeks to 6 years</h2>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <span role="img" aria-label="heart">❤️</span>
          </div>
          <h3>Nurturing Environment</h3>
          <p>Creating a safe and loving space for your child to grow and learn.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <span role="img" aria-label="teacher">👩‍🏫</span>
          </div>
          <h3>Expert Teachers</h3>
          <p>Dedicated professionals committed to early childhood development.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <span role="img" aria-label="blocks">🎯</span>
          </div>
          <h3>Play-Based Learning</h3>
          <p>Educational activities that make learning fun and engaging.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Give Your Child the Best Start</h2>
        <p>Enroll now or schedule a tour to learn more about our programs.</p>
        <button onClick={() => window.location.href='/contact'}>Contact Us Today</button>
      </section>
    </div>
  );
}

export default Home;
