import React from 'react';
  import './Testimonials.css';

  function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: 'Jane Doe',
        text: 'I absolutely love the quilt I received! The craftsmanship is outstanding, and it adds a cozy touch to my home.',
      },
      {
        id: 2,
        name: 'John Smith',
        text: 'The quilt repair service was excellent. My old quilt looks brand new again! I highly recommend their services.',
      },
      {
        id: 3,
        name: 'Emily Johnson',
        text: 'I learned so much in the quilting class. The instructor was patient and knowledgeable, and I am now confident in my quilting abilities.',
      },
    ];

    return (
      <div className="testimonials">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    );
  }

  export default Testimonials;
