// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Explore Our Courses</h2>
        <p>We offer expert coaching for JEE, NEET, and many more. Click below to explore our courses.</p>
        <Link to="/courses">
          <button style={{ padding: '10px 20px', backgroundColor: '#1E3A8A', color: 'white', border: 'none', borderRadius: '5px' }}>
            View All Courses
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
