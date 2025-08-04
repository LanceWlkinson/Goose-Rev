import React from 'react';

function Programs() {
  const programs = [
    {
      title: "Infant Care",
      age: "6 weeks - 18 months",
      description: "Nurturing care in a safe, stimulating environment focused on early development milestones.",
      features: ["Individual care routines", "Sensory activities", "Early language development", "Motor skill development"]
    },
    {
      title: "Toddler Program",
      age: "18 months - 3 years",
      description: "Active learning through play, fostering independence and social skills.",
      features: ["Potty training support", "Language development", "Social interaction", "Creative activities"]
    },
    {
      title: "Preschool",
      age: "3 - 6 years",
      description: "Comprehensive early education preparing children for success in school and beyond.",
      features: ["Pre-reading skills", "Basic math concepts", "Science exploration", "Art and music"]
    }
  ];

  return (
    <div className="programs">
      <section className="programs-intro">
        <p>Discover our comprehensive, age-appropriate programs carefully designed to nurture your child's unique developmental journey. Each program combines play-based learning with structured activities to create an engaging and enriching experience.</p>
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
        <p>Our research-backed, play-based curriculum is designed to foster creativity, critical thinking, and social-emotional development. Through hands-on activities and guided exploration, we create an environment where children develop a lifelong love of learning while building essential skills for future academic success.</p>
      </section>
    </div>
  );
}

export default Programs;
