import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#001f3d' }}> {/* Dark Navy Blue */}
      <Toolbar>
        {/* Logo and Slogan */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SchoolIcon sx={{ fontSize: 50, marginRight: 1 }} />
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                letterSpacing: '1px',
                color: 'white',
              }}
            >
              Pawde's Institute of Science Hadgaon
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                fontSize: '0.9rem',
                color: '#b0c4de', // Light blue color for contrast
                fontStyle: 'italic',
              }}
            >
              "Where the real study begins"
            </Typography>
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/courses">
          Courses
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/syllabus-notes"> {/* New Button */}
          Syllabus & Notes
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
