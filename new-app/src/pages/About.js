import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="our-story">
        <div className="our-story-content">
          <h2>Our Story</h2>
          <p>Since 2010, we've been dedicated to providing exceptional childcare and early education. What started as a small family-run daycare has blossomed into a nurturing community where children learn, grow, and thrive. Our commitment to excellence and passion for early childhood development has made us a trusted partner for families in our community.</p>
          <p>We believe every child deserves the best start in life, and our experienced team works tirelessly to create an environment where curiosity is encouraged, creativity flourishes, and each child's unique potential is recognized and nurtured.</p>
        </div>
        <div className="our-story-image">
          <img src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=1200&q=80" alt="Our Daycare Center" />
        </div>
      </section>
      
      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80" alt="Sarah Johnson" />
            <h3>Sarah Johnson</h3>
            <p>Center Director</p>
            <p>15 years of early childhood education experience</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=300&q=80" alt="Michael Chen" />
            <h3>Michael Chen</h3>
            <p>Lead Teacher</p>
            <p>Master's in Early Childhood Education</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80" alt="Emily Martinez" />
            <h3>Emily Martinez</h3>
            <p>Child Care Nurse</p>
            <p>Registered Nurse with pediatric specialty</p>
          </div>
        </div>
      </section>
      
      <section className="philosophy">
        <h2>Our Philosophy</h2>
        <p>We believe in nurturing the whole child through play-based learning and individualized attention.</p>
        <div className="philosophy-grid">
          <div className="philosophy-item">
            <span>🎨</span>
            <h3>Creative Expression</h3>
            <p>Encouraging imagination and artistic development through various mediums</p>
          </div>
          <div className="philosophy-item">
            <span>🌱</span>
            <h3>Natural Growth</h3>
            <p>Supporting each child's unique developmental journey</p>
          </div>
          <div className="philosophy-item">
            <span>🤝</span>
            <h3>Community Connection</h3>
            <p>Building strong relationships between families, teachers, and children</p>
          </div>
          <div className="philosophy-item">
            <span>📚</span>
            <h3>Love for Learning</h3>
            <p>Fostering curiosity and a lifelong passion for knowledge</p>
          </div>
        </div>
      </section>
      
      <section className="safety">
        <div className="safety-content">
          <div className="safety-image">
            <img src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=1200&q=80" alt="Safety Measures" />
          </div>
          <div className="safety-text">
            <h2>Health & Safety</h2>
            <div className="safety-features">
              <div className="safety-feature">
                <span>🔒</span>
                <p>Secure entry system and monitoring throughout the facility</p>
              </div>
              <div className="safety-feature">
                <span>🧼</span>
                <p>Enhanced cleaning and sanitization protocols</p>
              </div>
              <div className="safety-feature">
                <span>👨‍⚕️</span>
                <p>On-site nurse and trained first aid staff</p>
              </div>
              <div className="safety-feature">
                <span>📋</span>
                <p>Regular safety drills and emergency preparedness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
