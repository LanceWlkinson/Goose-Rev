import React from 'react';

function Vision() {
  return (
    <div className="vision">
      
      <section className="mission-statement">
        <h2>Building Tomorrow's Leaders Today</h2>
        <p>We envision a community rooted in strong relationships, fostering growth through nurturing environments where Teachers, Parents, and Children are empowered to thrive together. Through innovative early education, we're shaping the future, one child at a time.</p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>
              <span role="img" aria-label="shield">🛡️</span>
              Safety First
            </h3>
            <p>Providing a secure and protected environment for every child, with state-of-the-art facilities and trained professionals.</p>
          </div>
          <div className="value-item">
            <h3>
              <span role="img" aria-label="graduation">🎓</span>
              Quality Education
            </h3>
            <p>Delivering excellence in early childhood education through play-based learning and research-backed developmental programs.</p>
          </div>
          <div className="value-item">
            <h3>
              <span role="img" aria-label="growing heart">🌱</span>
              Nurturing Growth
            </h3>
            <p>Supporting each child's individual development journey with personalized attention and care to help them reach their full potential.</p>
          </div>
          <div className="value-item">
            <h3>
              <span role="img" aria-label="family">👨‍👩‍👧‍👦</span>
              Community Focus
            </h3>
            <p>Building strong partnerships with families and our local community to create a supportive network for children's development.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;
