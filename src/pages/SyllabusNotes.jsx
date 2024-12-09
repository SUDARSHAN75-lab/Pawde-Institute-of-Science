// src/pages/SyllabusNotes.jsx
import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SyllabusNotes = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#001f3d' }}>
        Syllabus & Notes
      </Typography>
      <Typography variant="body1" align="center" paragraph sx={{ marginBottom: '2rem', color: '#7F8C8D' }}>
        Explore the syllabus and download notes for your subjects.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3498db',
              '&:hover': { backgroundColor: '#2980b9' },
              padding: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            component={Link}
            to="/syllabus/physics"
          >
            Physics Syllabus
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3498db',
              '&:hover': { backgroundColor: '#2980b9' },
              padding: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            component={Link}
            to="/syllabus/chemistry"
          >
            Chemistry Syllabus
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3498db',
              '&:hover': { backgroundColor: '#2980b9' },
              padding: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            component={Link}
            to="/syllabus/mathematics"
          >
            Mathematics Syllabus
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SyllabusNotes;
