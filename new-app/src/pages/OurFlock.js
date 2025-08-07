import React from 'react';

function OurFlock() {
  return (
    <div className="our-flock">
      <section className="flock-hero">
        <div className="flock-intro">
          <p>Meet the passionate educators, dedicated leaders, and caring hearts that make Goose & Rev soar. Our team brings together years of experience, endless creativity, and a shared commitment to helping every child shine.</p>
        </div>
      </section>

      <section className="educators-spotlight">
        <h2>Educators Spotlight</h2>
        <div className="spotlight-grid">
          <div className="educator-card">
            <div className="educator-image">
              <img src="path_to_image.jpg" alt="Educator Name" />
            </div>
            <div className="educator-info">
              <h3>Educator Name</h3>
              <h4>Lead Teacher - Age Group</h4>
              <p>"A favorite quote or teaching philosophy from the educator."</p>
              <ul className="educator-highlights">
                <li>Years of Experience: X</li>
                <li>Specialization/Certifications</li>
                <li>Special talents or classroom activities they're known for</li>
              </ul>
            </div>
          </div>
          {/* Add more educator spotlights here */}
        </div>
      </section>

      <section className="join-our-flock">
        <div className="join-content">
          <h2>Want to Join Our Flock?</h2>
          <p>We're always looking for passionate educators who believe in the power of play-based learning and want to make a difference in children's lives.</p>
          <button onClick={() => window.location.href = '/careers'} className="cta-button">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}

export default OurFlock;
