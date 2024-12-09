// src/pages/SyllabusPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, List, ListItem } from '@mui/material';

const syllabusData = {
  physics: {
    7: [
      {
        topic: 'Measurement',
        subtopics: [
          'Importance of measurement in daily life',
          'Measurement units: SI units',
          'Measurement of length, mass, and time',
          'Devices: Ruler, stopwatch, beam balance',
        ],
      },
      {
        topic: 'Force and Pressure',
        subtopics: [
          'Concept of force: Push and pull',
          'Types of forces: Contact and non-contact forces',
          'Pressure in solids, liquids, and gases',
          'Applications of pressure: Hydraulic systems, syringes',
        ],
      },
      {
        topic: 'Heat and Temperature',
        subtopics: [
          'Difference between heat and temperature',
          'Expansion in solids, liquids, and gases',
          'Measurement of temperature: Thermometer',
          'Practical uses of heat: Cooking, engines',
        ],
      },
    ],
    8: [
      {
        topic: 'Motion',
        subtopics: [
          'Distance and displacement',
          'Uniform and non-uniform motion',
          'Speed, velocity, and acceleration',
          'Graphical representation of motion',
        ],
      },
      {
        topic: 'Sound',
        subtopics: [
          'Nature of sound: Longitudinal waves',
          'Properties of sound: Frequency, amplitude',
          'Reflection and absorption of sound',
          'Applications: Musical instruments, echoes',
        ],
      },
      {
        topic: 'Friction',
        subtopics: [
          'Types of friction: Static, sliding, rolling',
          'Advantages and disadvantages of friction',
          'Ways to reduce friction',
          'Real-life applications: Lubrication, ball bearings',
        ],
      },
    ],
    9: [
      {
        topic: 'Gravitation',
        subtopics: [
          'Universal law of gravitation',
          'Free fall and acceleration due to gravity',
          'Mass and weight',
          'Applications: Satellites, tides',
        ],
      },
      {
        topic: 'Work and Energy',
        subtopics: [
          'Concept of work: Positive and negative work',
          'Energy: Kinetic and potential energy',
          'Work-energy theorem',
          'Conservation of energy in different systems',
        ],
      },
      {
        topic: 'Sound',
        subtopics: [
          'Production and propagation of sound waves',
          'Speed of sound in different media',
          'Human ear: Structure and working',
          'Applications of ultrasound in daily life',
        ],
      },
    ],
    10: [
      {
        topic: 'Light',
        subtopics: [
          'Reflection of light and plane mirrors',
          'Refraction of light through prisms and lenses',
          'Dispersion of light and colors',
          'Applications: Microscope, telescope',
        ],
      },
      {
        topic: 'Electricity',
        subtopics: [
          'Ohm’s law and its applications',
          'Electrical circuits: Series and parallel',
          'Heating effect of electric current',
          'Applications: Electric heater, fuse, filament bulb',
        ],
      },
      {
        topic: 'Magnetic Effects of Current',
        subtopics: [
          'Magnetic field and field lines',
          'Electromagnetic induction',
          'Electric motor and generator',
          'Applications in household devices',
        ],
      },
    ],
    11: [
      {
        topic: 'Physical World',
        subtopics: [
          'Scope and excitement of physics',
          'Physics and its interdisciplinary connections',
          'Nature of physical laws',
          'Applications of physics in technology',
        ],
      },
      {
        topic: 'Laws of Motion',
        subtopics: [
          'Newton’s three laws of motion',
          'Inertia and types of forces',
          'Motion of connected bodies',
          'Real-life applications: Vehicles, sports',
        ],
      },
      {
        topic: 'Thermodynamics',
        subtopics: [
          'Zeroth, first, and second laws of thermodynamics',
          'Concept of heat engines and efficiency',
          'Reversible and irreversible processes',
          'Applications: Refrigerators, car engines',
        ],
      },
    ],
    12: [
      {
        topic: 'Electrostatics',
        subtopics: [
          'Electric charges and their properties',
          'Coulomb’s law and its applications',
          'Electric field and potential',
          'Capacitors and their uses',
        ],
      },
      {
        topic: 'Current Electricity',
        subtopics: [
          'Drift velocity and Ohm’s law',
          'Resistance: Factors and measurement',
          'Wheatstone bridge and potentiometer',
          'Applications in electronic circuits',
        ],
      },
      {
        topic: 'Optics',
        subtopics: [
          'Reflection and refraction of light',
          'Interference and diffraction',
          'Wave optics and polarization',
          'Applications: Fiber optics, photography',
        ],
      },
      {
        topic: 'Atoms and Nuclei',
        subtopics: [
          'Structure of an atom',
          'Bohr model of an atom',
          'Radioactivity and its applications',
          'Nuclear reactions and energy',
        ],
      },
      {
        topic: 'Electronic Devices',
        subtopics: [
          'Semiconductors and their properties',
          'Diodes and transistors',
          'Applications: Amplifiers, rectifiers',
          'Digital electronics and logic gates',
        ],
      },
    ],
  },
};


const SyllabusPage = () => {
  const { subject, standard } = useParams();
  const syllabus = syllabusData[subject]?.[standard];

  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001f3d' }}
      >
        {subject.charAt(0).toUpperCase() + subject.slice(1)} Syllabus - {standard} Standard
      </Typography>
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Syllabus:
        </Typography>
        {syllabus ? (
          syllabus.map((item, index) => (
            <Box key={index} sx={{ marginBottom: '1rem' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.topic}
              </Typography>
              <List>
                {item.subtopics.map((subtopic, subIndex) => (
                  <ListItem key={subIndex}>
                    <Typography variant="body1">- {subtopic}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))
        ) : (
          <Typography>No syllabus available.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default SyllabusPage;
