import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
  console.log('Change is here')
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <Navigation logo={logo} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-flock" element={<OurFlock />} />
            <Route path="/cameras" element={<Cameras />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
        <div className='footer-logo'>
            <a href="#/" className="footer-logo">
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
