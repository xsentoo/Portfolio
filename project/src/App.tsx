import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Navigation />
        <main className="scroll-container">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/Portfolio" element={<Home />} />
              <Route path="/Portfolio/Home" element={<Home />} />
              <Route path="/Portfolio/about" element={<About />} />
              <Route path="/Portfolio/projects" element={<Projects />} />
              <Route path="/Portfolio/resume" element={<Resume />} />
              <Route path="/Portfolio/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
