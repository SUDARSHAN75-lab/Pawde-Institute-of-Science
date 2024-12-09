import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(/images/banner.jpg)` }}>
      <div className="overlay"></div>

      <div className="hero-content">
        <Typography variant="h2" color="white" gutterBottom className="hero-title">
          Welcome to Pawde's Institute of Science
        </Typography>
        <Typography variant="h6" color="white" paragraph>
          "Join our expert coaching programs to achieve academic excellence and unlock your true potential!"
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/courses"
        >
          Explore Courses
        </Button>
      </div>

      {/* Positioned text in the corner */}
      <div className="hero-text-corner">
        "Join our expert coaching programs to achieve academic excellence and unlock your true potential!"
      </div>
    </div>
  );
};

export default Hero;
