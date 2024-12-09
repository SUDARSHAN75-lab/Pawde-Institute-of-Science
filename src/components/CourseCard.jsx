// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} />
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <button>Enroll Now</button>
    </div>
  );
};

export default CourseCard;
