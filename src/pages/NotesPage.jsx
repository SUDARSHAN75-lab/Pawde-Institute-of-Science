// src/pages/NotesPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const notesData = {
  physics: {
    7: ['Chapter 1 Notes', 'Chapter 2 Notes'],
    8: ['Chapter 1 Notes', 'Chapter 3 Notes'],
    9: ['Chapter 4 Notes', 'Chapter 5 Notes'],
    10: ['Important Diagrams', 'Formulas Summary'],
    11: ['Laws of Motion Notes', 'Thermodynamics Notes'],
    12: ['Optics Notes', 'Electrostatics Notes'],
  },
  // Add similar data for other subjects...
};

const NotesPage = () => {
  const { subject, standard } = useParams(); // Get the subject and standard from the route
  const notes = notesData[subject]?.[standard];

  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001f3d' }}
      >
        {subject.charAt(0).toUpperCase() + subject.slice(1)} Notes - {standard} Standard
      </Typography>
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Notes:
        </Typography>
        {notes ? (
          notes.map((note, index) => (
            <Typography key={index} variant="body1">
              - {note}
            </Typography>
          ))
        ) : (
          <Typography>No notes available.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default NotesPage;
