import React from 'react';

function Locations() {
  const locations = [
    {
      name: "Main Center",
      address: "1215 Example Drive",
      city: "Richland, WA",
      phone: "(509) 555-0150",
      hours: "Monday-Friday: 7:30am-5:30pm"
    },
    {
      name: "North Center",
      address: "833 North Avenue",
      city: "West Example, ND",
      phone: "(701) 555-0534",
      hours: "Monday-Friday: 6:00am-6:00pm"
    },
    {
      name: "South Center",
      address: "205 South Street",
      city: "Example City, MT",
      phone: "(406) 555-6150",
      hours: "Monday-Friday: 7:30am-5:30pm"
    }
  ];

  return (
    <div className="locations">
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <h2>{location.name}</h2>
            <div className="location-details">
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>{location.phone}</p>
              <p>{location.hours}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="location-info">
        <h2>Visit Us Today</h2>
        <p>Each of our locations offers the same high-quality care and educational programs, featuring state-of-the-art facilities, dedicated teachers, and engaging learning environments. Contact your nearest center to schedule a tour or learn more about enrollment opportunities for your child.</p>
      </section>
    </div>
  );
}

export default Locations;
