// src/pages/SelectStandard.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Grid, Button } from '@mui/material';

const SelectStandard = () => {
  const navigate = useNavigate();
  const { subject } = useParams(); // Get the selected subject from the route

  const handleStandardClick = (standard) => {
    navigate(`/syllabus/${subject}/${standard}`);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001f3d' }}
      >
        Select Standard for {subject.charAt(0).toUpperCase() + subject.slice(1)}
      </Typography>
      <Grid container spacing={2}>
        {[7, 8, 9, 10, 11, 12].map((standard) => (
          <Grid item xs={6} key={standard}>
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
              onClick={() => handleStandardClick(standard)}
            >
              {standard} Standard
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SelectStandard;
