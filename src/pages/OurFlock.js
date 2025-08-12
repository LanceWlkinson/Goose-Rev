import React from 'react';
import { useNavigate } from 'react-router-dom';
const directors = [
  {
    id: 1,
    name: "Kylee Sullivan",
    role: "Founder & Owner",
    image: "/managers/kylee.jpeg",
    description: 'Kylee founded Goose & Rev with a bold vision: to reimagine early learning spaces as vibrant, relationship-driven environments where children — and teams — thrive. Her hands-on leadership, entrepreneurial spirit, and passion for empowering women have shaped every corner of the brand. Kylee believes in leading with heart, dreaming big, and building community at every step.',
  },
  {
    id: 2,
    name: "Madison Favila",
    role: "Director of Operations",
    image: "/managers/madison.jpg",
    description: 'Madison brings structure, strategy, and a deep love for people to everything she does. She keeps Goose & Rev running smoothly behind the scenes while championing team development and operational excellence. Her strong leadership and big-picture thinking help turn vision into reality across all locations.',
  },
  {
    id: 3,
    name: "Tamara Altamirano",
    role: "Center Director",
    image: "/managers/tamara.jpg",
    description: 'Tamara leads with empathy, experience, and excellence. She has a gift for building strong relationships with families and guiding her team with wisdom and heart. Her commitment to high-quality programming and joyful learning environments shines through in every detail.',
  }
]

const managers = [
  {
    id: 1,
    name: "Olivia Wilkinson",
    role: "Center Manager",
    image: "/managers/olivia.jpg",
    description: "Olivia leads with kindness and confidence, creating a welcoming environment where children feel safe, supported, and inspired to learn. Her calm presence and thoughtful leadership make her a favorite among both families and staff."
  },
  {
    id: 2,
    name: "Sophia Gideon",
    role: "Center Manager",
    image: "/managers/sophia.jpg",
    description: "Sophia brings creativity and passion to everything she does. She's known for her strong relationships with families, her hands-on leadership style, and her dedication to creating meaningful learning experiences every day."
  },
  {
    id: 3,
    name: "Nicole O'Leary",
    role: "Center Manager",
    image: "/managers/nicole.jpg",
    description: "Nicole combines warmth with structure, ensuring her center runs smoothly while always keeping children's joy and growth at the forefront. She's a true team player with a heart for early learning and community connection."
  }
];

const EducatorCard = ({ educator }) => (
  <div className="educator-card">
    <div className="educator-image">
      <img src={process.env.PUBLIC_URL + educator.image} alt={educator.name} />
    </div>
    <div className="educator-info">
      <h3>{educator.name}</h3>
      <h4>{educator.role}</h4>
      {educator.description && (
        <p className="educator-description">{educator.description}</p>
      )}
    </div>
  </div>
);

function OurFlock() {
  const navigate = useNavigate();

  return (
    <div className="our-flock">
      <section className="flock-hero">
        <h1>Our Flock</h1>
        <div className="flock-intro">
          <p>At Goose & Rev, our team is the heart of everything we do. We hire passionate, purpose-driven people who are as committed to building strong relationships as they are to inspiring the next generation of leaders.</p>
        </div>
      </section>

      <section className="educators-spotlight">
        <div className="spotlight-grid">
          {directors.map(director => (
            <EducatorCard key={director.id} educator={director} />
          ))}
        </div>
      </section>

      <section className="flock-hero">
        <h1>Center Managers</h1>
        <div className="flock-intro">
          <p>Our Center Managers bring joy, consistency, and strong leadership to each of our locations. They are the smiling faces families rely on and the steady hands that guide our daily rhythms.</p>
        </div>
      </section>

      <section className="educators-spotlight">
        <div className="spotlight-grid">
          {managers.map(manager => (
            <EducatorCard key={manager.id} educator={manager} />
          ))}
        </div>
      </section>

      <section className="teachers-section">
        <div className="section-content">
          <h2>Our Teachers</h2>
          <div className="teachers-description">
            <p>Behind every playful moment, thoughtful activity, and milestone met is one of our incredible teachers. They bring the Goose & Rev philosophy to life every single day — with patience, creativity, and heart.</p>
            <p>From circle time to story time, our teachers are intentional, compassionate, and deeply committed to helping every child feel seen, celebrated, and supported. They're more than educators — they're mentors, role models, and cheerleaders for every child's journey.</p>
          </div>
          <div className="teachers-collage">
            <img src={process.env.PUBLIC_URL + "/images/employee-collage.jpg"} alt="Our amazing teachers at Goose & Rev Academy" />
          </div>
        </div>
      </section>

      <section className="join-our-flock">
        <div className="join-content">
          <h2>Want to Join Our Flock?</h2>
          <p>We're always looking for passionate educators who believe in the power of play-based learning and want to make a difference in children's lives.</p>
          <button onClick={() => navigate('/careers')} className="cta-button">
            View Careers Page
          </button>
        </div>
      </section>
    </div>
  );
}

export default OurFlock;
