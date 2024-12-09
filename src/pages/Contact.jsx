import React from 'react';
import { Container, Typography, Grid, Paper, TextField, Button, Box, IconButton } from '@mui/material';
import { Phone, Email, Facebook, Instagram, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)', padding: '2rem 0' }}>
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Page Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: '#004D40', fontWeight: '600', fontFamily: 'Arial, sans-serif' }}
        >
          Contact Us
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ color: '#00796B', fontFamily: 'Georgia, serif', marginBottom: '1rem' }}
        >
          Have any questions? Feel free to contact us using the form below or via the provided contact details.
        </Typography>

        {/* Contact Form Section */}
        {/* Contact Form Section */}
<Paper
  elevation={5}
  sx={{
    padding: '2rem',
    backgroundColor: 'rgba(173, 216, 230, 0.7)', // Light blue with slight transparency
    borderRadius: '10px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    position: 'relative',
    backdropFilter: 'blur(8px)', // Glassy effect
    border: '1px solid rgba(173, 216, 230, 0.4)', // Subtle border
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.2)',
    },
  }}
>
  <Grid container spacing={2}>
    {/* Name Field */}
    <Grid item xs={12} sm={6}>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#2C3E50' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          },
          '& .MuiInputLabel-root': { color: '#2C3E50' },
        }}
      />
    </Grid>

    {/* Email Field */}
    <Grid item xs={12} sm={6}>
      <TextField
        label="Your Email"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#2C3E50' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          },
          '& .MuiInputLabel-root': { color: '#2C3E50' },
        }}
      />
    </Grid>

    {/* Message Field */}
    <Grid item xs={12}>
      <TextField
        label="Your Message"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        InputLabelProps={{ shrink: true }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#2C3E50' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          },
          '& .MuiInputLabel-root': { color: '#2C3E50' },
        }}
      />
    </Grid>

    {/* Submit Button */}
    <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#3498DB',
          '&:hover': { backgroundColor: '#2980B9' },
          padding: '12px 25px',
          borderRadius: '25px',
          fontSize: '1rem',
          textTransform: 'none',
          fontWeight: '600',
        }}
      >
        Send Message
      </Button>
    </Grid>
  </Grid>
</Paper>


        {/* Additional Contact Info Section */}
        <Box sx={{ marginTop: '2rem', textAlign: 'center', color: '#004D40' }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#004D40', fontWeight: '600' }}>
            Contact Information
          </Typography>
          <Paper
            sx={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)', // Subtle frosted effect
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
              zIndex: 2,
              position: 'relative',
            }}
          >
            <Typography variant="body1" sx={{ marginBottom: '1rem', color: '#004D40' }}>
              Pawde Institute of Science Hadgaon, Dist Nanded
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <IconButton sx={{ color: '#004D40', marginRight: '10px' }} href="tel:+911234567890">
                <Phone />
              </IconButton>
              <Typography variant="body1" sx={{ color: '#004D40' }}>
                8421336796
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <IconButton sx={{ color: '#004D40', marginRight: '10px' }} href="mailto:info@pawdecoaching.com">
                <Email />
              </IconButton>
              <Typography variant="body1" sx={{ color: '#004D40' }}>
                sachinpawde2012@gmail.com
              </Typography>
            </Box>
          </Paper>

          {/* Social Media Links */}
          <Box sx={{ marginTop: '2rem' }}>
            <IconButton
              sx={{
                color: '#004D40',
                marginRight: '15px',
                '&:hover': { backgroundColor: '#004D40', color: '#E0F7FA', borderRadius: '50%' },
              }}
              href="https://www.facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: '#004D40',
                marginRight: '15px',
                '&:hover': { backgroundColor: '#004D40', color: '#E0F7FA', borderRadius: '50%' },
              }}
              href="https://www.instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                color: '#004D40',
                '&:hover': { backgroundColor: '#004D40', color: '#E0F7FA', borderRadius: '50%' },
              }}
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
