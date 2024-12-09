import React from 'react';
import { Button, Box } from '@mui/material';

const Courses = () => {
  // Higher Education Courses
  const higherEducationCourses = [
    '11th & 12th Science (Physics)',
    'JEE (Mains/Advanced)',
    'NEET',
    'MH-CET',
    'State Board',
  ];

  // School Foundation Courses
  const schoolFoundationCourses = [
    '7th to 10th Science',
    'Special Batch for State Board/CBSE Board',
    'NDA',
    'NSO',
    'RTSE',
    'JEE/NEET Foundation',
  ];

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
      {/* Higher Education Courses */}
      <Box
        style={{
          flex: 1,
          height: '300px', // Smaller height
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ backgroundColor: '#4682B4', color: '#fff', padding: '8px', borderRadius: '6px' }}>
          <h3 style={{ textAlign: 'center', margin: 0, fontSize: '18px' }}>Higher Education Courses</h3>
        </div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '15px', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
          {higherEducationCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{
              backgroundColor: '#003366',
              color: '#fff',
              width: '160px',
              fontSize: '14px',
            }}
            onClick={() => alert('Enrollment for Higher Education Courses')}
          >
            Enroll Now
          </Button>
        </div>
      </Box>

      {/* School Foundation Courses */}
      <Box
        style={{
          flex: 1,
          height: '300px', // Smaller height
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ backgroundColor: '#4682B4', color: '#fff', padding: '8px', borderRadius: '6px' }}>
          <h3 style={{ textAlign: 'center', margin: 0, fontSize: '18px' }}>School Foundation Courses</h3>
        </div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '15px', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>
          {schoolFoundationCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{
              backgroundColor: '#003366',
              color: '#fff',
              width: '160px',
              fontSize: '14px',
            }}
            onClick={() => alert('Enrollment for School Foundation Courses')}
          >
            Enroll Now
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Courses;
