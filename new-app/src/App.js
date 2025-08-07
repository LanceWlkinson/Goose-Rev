import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import logo from './Goose & Rev Academy Logo.jpg';

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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-container">
            <div className="nav-logo">
                <NavLink to="Goose-Rev/">
                    <img src={logo} alt="Goose & Rev Academy Logo" />
                </NavLink>
            </div>
            <ul className="nav-links">
              <li><NavLink to="Goose-Rev/" end>Home</NavLink></li>
              <li><NavLink to="Goose-Rev/vision">Vision</NavLink></li>
              <li><NavLink to="Goose-Rev/locations">Locations</NavLink></li>
              <li><NavLink to="Goose-Rev/programs">Programs</NavLink></li>
              <li><NavLink to="Goose-Rev/testimonials">Testimonials</NavLink></li>
              <li><NavLink to="Goose-Rev/about">About</NavLink></li>
              <li><NavLink to="Goose-Rev/our-flock">Our Flock</NavLink></li>
              <li><NavLink to="Goose-Rev/cameras">Cameras</NavLink></li>
              <li><NavLink to="Goose-Rev/careers">Careers</NavLink></li>
              <li><NavLink to="Goose-Rev/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="Goose-Rev/" element={<Home />} />
            <Route path="Goose-Rev/vision" element={<Vision />} />
            <Route path="Goose-Rev/locations" element={<Locations />} />
            <Route path="Goose-Rev/programs" element={<Programs />} />
            <Route path="Goose-Rev/testimonials" element={<Testimonials />} />
            <Route path="Goose-Rev/about" element={<About />} />
            <Route path="Goose-Rev/our-flock" element={<OurFlock />} />
            <Route path="Goose-Rev/cameras" element={<Cameras />} />
            <Route path="Goose-Rev/careers" element={<Careers />} />
            <Route path="Goose-Rev/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Daycare Center. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
