import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './Goose & Rev Academy Logo.jpg';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import Vision from './pages/Vision';
import Locations from './pages/Locations';
import Programs from './pages/Programs';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Cameras from './pages/Camera';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import OurFlock from './pages/OurFlock';
import Calendar from './pages/Calendar';

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <Navigation logo={logo} />
        </header>

        <main>
          <Routes>
            <Route path="Goose-Rev/" element={<Home />} />
            <Route path="Goose-Rev/vision" element={<Vision />} />
            <Route path="Goose-Rev/locations" element={<Locations />} />
            <Route path="Goose-Rev/programs" element={<Programs />} />
            <Route path="Goose-Rev/about" element={<About />} />
            <Route path="Goose-Rev/our-flock" element={<OurFlock />} />
            <Route path="Goose-Rev/cameras" element={<Cameras />} />
            <Route path="Goose-Rev/careers" element={<Careers />} />
            <Route path="Goose-Rev/contact" element={<Contact />} />
            <Route path="Goose-Rev/calendar" element={<Calendar />} />
          </Routes>
        </main>
        <div className='footer-logo'>
            <a href="Goose-Rev/" className="footer-logo">
              <img src={logo} alt="Goose & Rev Academy Logo" />
            </a>
        </div>
        <footer>
          <p>&copy; 2025 Goose & Rev Academy. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
