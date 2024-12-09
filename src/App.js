// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import SubjectsPage from './pages/SubjectsPage';
import SelectStandard from './pages/SelectStandard';
import ChoicePage from './pages/ChoicePage';
import SyllabusPage from './pages/SyllabusPage';
import NotesPage from './pages/NotesPage';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/syllabus-notes" element={<SubjectsPage />} />
          <Route path="/syllabus/:subject" element={<SelectStandard />} />
          <Route path="/syllabus/:subject/:standard" element={<ChoicePage />} />
          <Route path="/syllabus/:subject/:standard/syllabus" element={<SyllabusPage />} />
          <Route path="/syllabus/:subject/:standard/notes" element={<NotesPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
