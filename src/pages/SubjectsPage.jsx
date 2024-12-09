// src/pages/SubjectsPage.jsx
import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'History', 'Geography'];

const SubjectsPage = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/syllabus/${subject.toLowerCase()}`);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001f3d' }}
      >
        Select a Subject
      </Typography>
      <Grid container spacing={2}>
        {subjects.map((subject, index) => (
          <Grid item xs={6} key={index}>
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
              onClick={() => handleSubjectClick(subject)}
            >
              {subject}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SubjectsPage;
