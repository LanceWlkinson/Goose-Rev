import React from 'react';

function Programs() {
  const programs = [
    {
      title: "Infant Program",
      age: "Ages: 6 weeks - 12 months",
      description: "A nurturing, responsive environment where your baby can explore, grow, and reach early milestones with personalized support.",
      features: [
        "Individualized daily routines",
        "Sensory-rich experiences",
        "Early communication and bonding",
        "Gentle motor skill development"
      ]
    },
    {
      title: "Waddler Program",
      age: "Ages: 12 Months - 24 months",
      description: "A specialized transition program designed to bridge the gap between infant and toddler stages, focusing on emerging independence, mobility development, and important feeding milestones.",
      features: [
        "Supported walking and gross motor development",
        "Guided transition from bottles to cups",
        "Early independence skills practice",
        "Social interaction and parallel play"
      ]
    },
    {
      title: "Toddler Program",
      age: "Ages: 18 months - 3 years",
      description: "An active, play-focused setting designed to support growing independence, social skills, and expressive language.",
      features: [
        "Potty learning support",
        "Language and vocabulary expansion",
        "Group play and social-emotional learning",
        "Music, movement, and hands-on activities"
      ]
    },
    {
      title: "Preschool Program",
      age: "Ages: 3 - 6 years",
      description: "A dynamic early education experience preparing children for kindergarten and beyond through exploration and purposeful play.",
      features: [
        "Pre-literacy and early math skills",
        "Science discovery and inquiry",
        "Artistic expression and music",
        "Confidence-building routines and group projects"
      ]
    }
  ];

  return (
    <div className="programs">
      <section className="programs-intro">
        <h1>Programs That Grow With Your Child</h1>
        <p>Discover our thoughtfully designed, age-appropriate programs that support each stage of your child's development. At Goose & Rev, we blend play-based learning with meaningful structure to nurture curiosity, build confidence, and empower every child's unique journey.</p>
      </section>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h2>{program.title}</h2>
            <h3>{program.age}</h3>
            <p>{program.description}</p>
            <ul>
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="curriculum">
        <h2>Our Curriculum</h2>
        <div className="curriculum-content">
          <div className="curriculum-intro">
            <p>At Goose & Rev, learning is anything but ordinary. Our research-backed, play-based curriculum is thoughtfully crafted to spark curiosity, inspire creativity, and nurture the whole child.</p>
          </div>

          <div className="curriculum-pillars">
            <div className="curriculum-pillar">
              <h3>Child-Led Learning</h3>
              <p>We believe that children learn best when they're actively engaged - which is why our approach is hands-on, child-led, and developmentally appropriate. Each day is filled with opportunities to explore, experiment, and connect through meaningful play.</p>
            </div>

            <div className="curriculum-pillar">
              <h3>Kindergarten Ready</h3>
              <p>Our programs are aligned with kindergarten readiness standards, helping children build essential skills in early literacy, math, science, and social-emotional development - all in ways that feel natural and fun. We blend structure with flexibility, allowing each child to move at their own pace while being supported by passionate educators who guide their growth.</p>
            </div>

            <div className="curriculum-pillar">
              <h3>Engaging Themes</h3>
              <p>To keep things fresh and exciting, we incorporate monthly themes that tie into our learning goals - from nature and community helpers to storytelling, seasons, and more. These themes give children a chance to dive deeper into topics they love while building vocabulary, critical thinking, and real-world connections.</p>
            </div>
          </div>

          <div className="curriculum-goal">
            <p>Our goal is simple: to cultivate confident, compassionate, and curious learners who are not only ready for kindergarten - but ready to thrive far beyond it.</p>
          </div>
          <img 
            src={process.env.PUBLIC_URL + "/images/goose-backpack.png"}
            alt="Goose with backpack" 
            className="curriculum-mascot"
          />
        </div>
      </section>
    </div>
  );
}

export default Programs;
