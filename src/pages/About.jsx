import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '2rem 0' }}>
      <Typography variant="h4" gutterBottom align="center" color="#1e88e5">
        About Us
      </Typography>

      <Grid container spacing={4}>
        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center', borderRadius: '8px', backgroundColor: '#E3F2FD' }}>
            <Typography variant="h5" gutterBottom color="#1565C0">
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', color: '#333' }}>
              Our mission is to provide quality education and coaching for students to excel in their academic and professional goals. 
              We aim to inspire students with the right tools and skills for success.
            </Typography>
            <Button 
              variant="contained" 
              color="success" 
              component={Link} 
              to="/contact" 
              sx={{ textTransform: 'none', backgroundColor: '#43A047' }}
            >
              Contact Us
            </Button>
          </Paper>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center', borderRadius: '8px', backgroundColor: '#E3F2FD' }}>
            <Typography variant="h5" gutterBottom color="#1565C0">
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', color: '#333' }}>
              We envision being a leading coaching class provider with a focus on student success and comprehensive learning. 
              We are committed to empowering students to achieve their full potential through personalized guidance.
            </Typography>
            <Button 
              variant="contained" 
              color="success" 
              component={Link} 
              to="/courses" 
              sx={{ textTransform: 'none', backgroundColor: '#43A047' }}
            >
              Explore Our Courses
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Values Section */}
      <Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
        <Typography variant="h6" gutterBottom color="#1e88e5">
          Our Core Values
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', color: '#333' }}>
          We value:
          <ul style={{ textAlign: 'left', marginTop: '10px' }}>
            <li>Commitment to Excellence</li>
            <li>Student-Centered Approach</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Learning and Innovation</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
