import React from 'react';

function PartTimePreschool() {
  const program = {
    title: "Part-Time Preschool at W. Richland",
    age: "Ages: 2.5 years to 6 years old",
    description: "A dynamic early education experience preparing children for kindergarten and beyond through exploration and purposeful play.",
    features: [
      "AM and PM classes offered Monday through Friday",
      "AM: 8:30 AM to 12:30 PM",
      "PM: 1:00 PM to 4:00 PM", 
      "2, 3, 4, or 5 day options for sign ups",
      "Potty Training not required",
      "School runs September through June",
      "Utilizes Pocket of Preschool Curriculum"
    ]
  };

  const pricing = {
    fees: [
      "Application Fee: $25",
      "Registration Fee: $100",
      "Annual Fee: $150 (includes supplies, extra curricular activities, and curriculum fees)"
    ],
    morningClasses: [
      { days: "2 mornings", notPottyTrained: "$400", pottyTrained: "$380" },
      { days: "3 mornings", notPottyTrained: "$550", pottyTrained: "$520" },
      { days: "4 mornings", notPottyTrained: "$660", pottyTrained: "$625" },
      { days: "5 mornings", notPottyTrained: "$740", pottyTrained: "$700" }
    ],
    afternoonClasses: [
      { days: "2 afternoons", notPottyTrained: "$300", pottyTrained: "$285" },
      { days: "3 afternoons", notPottyTrained: "$410", pottyTrained: "$390" },
      { days: "4 afternoons", notPottyTrained: "$495", pottyTrained: "$470" },
      { days: "5 afternoons", notPottyTrained: "$555", pottyTrained: "$520" }
    ]
  };

  return (
    <div className="programs">
      <section className="programs-intro">
        <h1>Part-Time Preschool Program</h1>
        <p>At Goose & Rev Academy’s W. Richland Center, our part-time preschool program blends flexibility with excellence. Designed for children ages 2½ to 6 (who are not currently enrolled in kindergarten), families can choose morning or afternoon sessions and the days that work best for them.</p>
      </section>

      <div className="preschool-programs-grid">
        <div className="preschool-program-card">
          <h2>{program.title}</h2>
          <h3>{program.age}</h3>
          <p>{program.description}</p>
          <ul>
            {program.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="pricing-section">
        <h2>Pricing</h2>
        <div className="pricing-content">
          <div className="pricing-fees">
            <h3>Fees</h3>
            <ul>
              {pricing.fees.map((fee, idx) => (
                <li key={idx}>{fee}</li>
              ))}
            </ul>
          </div>

          <div className="pricing-tables">
            <div className="pricing-table">
              <h3>Morning Classes (8:30 AM - 12:30 PM)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Days per Week</th>
                    <th>Not Potty Trained</th>
                    <th>Potty Trained</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.morningClasses.map((option, idx) => (
                    <tr key={idx}>
                      <td>{option.days}</td>
                      <td>{option.notPottyTrained}</td>
                      <td>{option.pottyTrained}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pricing-table">
              <h3>Afternoon Classes (1:00 PM - 4:00 PM)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Days per Week</th>
                    <th>Not Potty Trained</th>
                    <th>Potty Trained</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.afternoonClasses.map((option, idx) => (
                    <tr key={idx}>
                      <td>{option.days}</td>
                      <td>{option.notPottyTrained}</td>
                      <td>{option.pottyTrained}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum">
        <h2>Our Curriculum</h2>
        <div className="curriculum-content">
          <div className="curriculum-intro">
            <p>We focus on nurturing a love for learning through hands-on exploration, creative play, and early academics — all while preparing children for kindergarten and beyond. Our program includes kindergarten readiness evaluations, engaging holiday celebrations, exciting field trips, and a spectacular year-end graduation performance that showcases each child’s growth and confidence.</p>
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
            <p>Whether you join us for a few days a week or more, your child will experience the same core values and exceptional programming that define Goose & Rev Academy.</p>
            <div className="apply-button-container">
              <button 
                className="apply-button"
                onClick={() => window.open('https://dino-drop-in-tri-cities.myshopify.com/products/abcdino-application-fee', '_blank')}
              >
                Apply Now
              </button>
            </div>
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

export default PartTimePreschool;
