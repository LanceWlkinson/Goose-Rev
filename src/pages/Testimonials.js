import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      text: "We've been amazed by the growth we've seen in our son since he started here. The teachers are incredibly attentive, and he's learning new skills at an amazing pace. Every day he comes home excited to share what he learned!",
      author: "Sarah M.",
      relation: "Parent of a 3-year-old"
    },
    {
      text: "The teachers are exceptional and truly passionate about early childhood development. Our twins have flourished in their care, developing both academically and socially. We couldn't be happier with our choice.",
      author: "Michael R.",
      relation: "Parent of twins"
    },
    {
      text: "The perfect balance of structured learning and playtime has helped our daughter thrive. She's made wonderful friends, and her cognitive development has been remarkable. She's always excited for school days!",
      author: "Jennifer K.",
      relation: "Parent of a 4-year-old"
    },
    {
      text: "What sets this daycare apart is their commitment to individual attention. They understand each child's unique needs and adapt their approach accordingly. It's been a game-changer for our family.",
      author: "David & Lisa P.",
      relation: "Parents of two"
    },
    {
      text: "The communication between staff and parents is outstanding. We always know what our child is learning and how we can support their development at home. It truly feels like a partnership in our child's education.",
      author: "Emily W.",
      relation: "Parent of an 18-month-old"
    },
    {
      text: "Moving to this daycare was the best decision we made for our daughter. The facilities are modern, the curriculum is engaging, and most importantly, she feels safe and loved here.",
      author: "Robert T.",
      relation: "Parent of a 2-year-old"
    }
  ];

  return (
    <div className="testimonials">
      <section className="testimonials-intro">
        <p>Discover what makes our daycare center special through the experiences of our wonderful families. These testimonials reflect our commitment to excellence in early childhood education and care.</p>
      </section>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <blockquote>
              <p>"{testimonial.text}"</p>
              <footer>
                <cite>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.relation}</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      <section className="join-us">
        <h2>Join Our Growing Family</h2>
        <p>Experience the difference quality early childhood education can make. We invite you to visit our center, meet our dedicated staff, and see firsthand why so many families trust us with their children's early development.</p>
        <button onClick={() => window.location.href= window.location.origin + '/Goose-Rev/contact'}>Schedule a Tour Today</button>
      </section>
    </div>
  );
}

export default Testimonials;
