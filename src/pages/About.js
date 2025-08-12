import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="our-story">
        <div className="our-story-content">
          <h2>Our Story</h2>
          <p>Same Flock. Fresh Feathers. </p>
          <p>Goose & Rev took flight in 2018 with a bold vision: to create a space where children are free to explore, grow, and lead with confidence. What began as a single, family-founded location has grown into a thriving network of vibrant learning spaces - all rooted in connection, creativity, and community.Formerly known as Dino Drop-In & ABCDino Academy we've evolved - not just in name, but in purpose. The transition to Goose & Rev represents everything we've learned along the way: that growth is beautiful, leadership starts young, and play is powerful.
          </p> 
          <p>While our brand has a new look, our flock remains the same. You'll still find the same passionate educators, trusted relationships, and playful energy that families have counted on since day one.
          </p>
        </div>
        <div className="our-story-image">
          <img src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=1200&q=80" alt="Our Daycare Center" />
        </div>
      </section>

      <section className="differentiators">
        <h2>What Makes Us Different</h2>
        <p className="differentiators-intro">There's no shortage of early learning programs — but Goose & Rev was built to be something more. Here's what sets us apart from the flock:</p>
        
        <div className="differentiators-grid">
          <div className="differentiator-item">
            <h3>Same Faces, Fresh Feathers</h3>
            <p>We evolved from our Dino Drop-In/ABCDino Academy roots — but our trusted team, values, and heart remain the same.</p>
          </div>

          <div className="differentiator-item">
            <h3>Play-Based, Purpose-Filled</h3>
            <p>Our days are filled with hands-on learning, guided by each child's interests — not worksheets or pressure.</p>
          </div>

          <div className="differentiator-item">
            <h3>Kindergarten-Ready, Life-Ready</h3>
            <p>We align with early learning standards while building real-world skills like confidence, collaboration, and curiosity.</p>
          </div>

          <div className="differentiator-item">
            <h3>Flexible for Modern Families</h3>
            <p>Whether you need full-time enrollment or something more flexible, we offer options that work for your rhythm.</p>
          </div>

          <div className="differentiator-item">
            <h3>Whole-Child Approach</h3>
            <p>We see each child as capable and unique. Our environments are inclusive, empowering, and designed to support all types of learners.</p>
          </div>

          <div className="differentiator-item">
            <h3>Goose Cameras = Real-Time Trust</h3>
            <p>Secure live streaming gives families peace of mind. We believe transparency builds strong relationships.</p>
          </div>

          <div className="differentiator-item">
            <h3>Community You Can Count On</h3>
            <p>We don't just welcome children — we welcome families. When you join Goose & Rev, you join a supportive, connected, and joy-filled community.</p>
          </div>
        </div>
      </section>
      
      <section className="philosophy">
        <h2>Our Play-Based Philosophy</h2>
        <p>We believe play is how children learn best. At Goose & Rev Academy:</p>
        <div className="philosophy-grid">
          <div className="philosophy-item">
            <h3>Freedom of Choice</h3>
            <p>Play is chosen freely—children engage because they are curious, not pressured.</p>
          </div>
          <div className="philosophy-item">
            <h3>Active Engagement</h3>
            <p>Play is active—we get messy, we explore, we create.</p>
          </div>
          <div className="philosophy-item">
            <h3>Meaningful Learning</h3>
            <p>Play is meaningful—our activities are fun, but they also build essential skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
