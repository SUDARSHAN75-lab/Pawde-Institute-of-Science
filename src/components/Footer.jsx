// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: 'white', padding: '2rem 0' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" gutterBottom>
          © 2024 Pawde Institute of Science Hadgaon. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Designed by Er.Sudarshan Pawde
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
