import React from 'react';

function Locations() {
  const locations = [
    {
      name: "Thayer",
      address: "1215 Thayer Drive Richland, WA. 99354",
      phone: "(509) 579-4150",
      hours: "Monday-Friday: 7:30am-5:30pm"
    },
    {
      name: "Comstock",
      address: "814 Comstock Street Richland, WA. 99352",
      phone: "(509) 579-4150",
      hours: "Monday-Friday: 7:30am-5:30pm"
    },
    {
      name: "Bombing Range",
      address: "2885 Bombing Range Road Richland, WA. 99353", 
      phone: "(509) 579-4150",
      hours: "Monday-Friday: 6:00am-5:30pm"
    }
  ];

  return (
    <div className="locations">
      <div className="programs-intro">
        <h1>Visit Us Today</h1>
        <p>Every Goose & Rev location offers consistent excellence - with thoughtfully designed spaces, passionate educators, and play-based programs that inspire curiosity and growth. Our environments are built to feel like an extension of your family: safe, creative, and full of purpose. Whether you're exploring options for full-time enrichment or flexible scheduling that fits your lifestyle, our team is here to help.</p>
      </div>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <h2>{location.name}</h2>
            <div className="location-details">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${location.address} ${location.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                <p>{location.address}</p>
              </a>
              <p>{location.phone}</p>
              <p>{location.hours}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="cta">
        <h2>Ready to experience it for yourself?</h2>
        <p>Contact your nearest Goose & Rev location to schedule a visit, meet our team, and discover what makes our approach different. Enrollment opportunities vary by location — don't wait to find the right fit for your child's next chapter.</p>
        <button onClick={() => window.location.href='/contact'}>Contact Us</button>
      </section>
      
    </div>
  );
}

export default Locations;
