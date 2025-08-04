import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Vision from './pages/Vision';
import Locations from './pages/Locations';
import Programs from './pages/Programs';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Cameras from './pages/Camera';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/vision">Vision</NavLink></li>
              <li><NavLink to="/locations">Locations</NavLink></li>
              <li><NavLink to="/programs">Programs</NavLink></li>
              <li><NavLink to="/testimonials">Testimonials</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/cameras">Cameras</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/cameras" element={<Cameras />} />
            <Route path="/contact" element={<Contact />} />
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
