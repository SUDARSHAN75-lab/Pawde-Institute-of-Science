// src/pages/ChoicePage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Grid, Button } from '@mui/material';

const ChoicePage = () => {
  const navigate = useNavigate();
  const { subject, standard } = useParams(); // Get the selected subject and standard from the route

  const handleChoiceClick = (choice) => {
    navigate(`/syllabus/${subject}/${standard}/${choice}`);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001f3d' }}
      >
        What do you want to view for {subject.charAt(0).toUpperCase() + subject.slice(1)} - {standard} Standard?
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
        <Grid item xs={6}>
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
            onClick={() => handleChoiceClick('syllabus')}
          >
            Syllabus
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#27ae60',
              '&:hover': { backgroundColor: '#1e8449' },
              padding: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            onClick={() => handleChoiceClick('notes')}
          >
            Notes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChoicePage;
