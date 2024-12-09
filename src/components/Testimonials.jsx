// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', course: 'JEE Coaching', testimonial: 'Great coaching! I passed my exam with flying colors.' },
    { name: 'Jane Doe', course: 'NEET Coaching', testimonial: 'The instructors are very knowledgeable and supportive.' },
  ];

  return (
    <div>
      <h2>What Our Students Say</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h3>{testimonial.name}</h3>
          <p><strong>Course:</strong> {testimonial.course}</p>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
