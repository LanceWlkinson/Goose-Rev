import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation({ logo }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isMobile = () => window.innerWidth <= 768;

  React.useEffect(() => {
    const handleScroll = () => {
        console.log('Scroll event detected');
      if (window.scrollY > 100) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStructure = {
    about: {
      label: "About Us",
      items: [
        { path: "Goose-Rev/about", label: "About" },
        { path: "Goose-Rev/our-flock", label: "Our Flock" }
      ]
    },
    programs: {
      label: "Our Programs",
      items: [
        { path: "Goose-Rev/vision", label: "Vision" },
        { path: "Goose-Rev/locations", label: "Locations" },
        { path: "Goose-Rev/programs", label: "Programs" }
      ]
    },
    parent: {
      label: "Parent Portal",
      items: [
        { path: "Goose-Rev/cameras", label: "Cameras" },
        { path: "Goose-Rev/calendar", label: "Calendar" },
        {
            label: "Application Fee",
            action: () => window.open(`https://dino-drop-in-tri-cities.myshopify.com/products/abcdino-application-fee`)
        },
        { 
          label: "Parent Handbook",
          action: () => window.open(`${process.env.PUBLIC_URL}/handbook.pdf`, '_blank')
        }
      ]
    },
    connect: {
      label: "Connect",
      items: [
        { path: "Goose-Rev/careers", label: "Careers" },
        { path: "Goose-Rev/contact", label: "Contact Us" }
      ]
    }
  };

  const toggleDropdown = (dropdownKey) => {
    const newValue = activeDropdown === dropdownKey ? null : dropdownKey;
    console.log('Toggling dropdown:', { dropdownKey, currentActive: activeDropdown, newValue });
    setActiveDropdown(newValue);
  };

  const handleClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveDropdown(null);
    if (isMobile()) {
      setIsNavVisible(false);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-menu')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <button 
        className={`mobile-nav-toggle ${isNavVisible ? 'active' : ''}`}
        onClick={() => setIsNavVisible(!isNavVisible)}
        aria-label={isNavVisible ? "Close navigation menu" : "Show navigation menu"}
      >
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>
      <nav className={`nav-container ${isNavVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-logo">
          <NavLink to="Goose-Rev/" end>
            <img src={logo} alt="Goose & Rev Academy Logo" />
          </NavLink>
        </div>
        
        <div className="nav-menu-group">
        {Object.entries(menuStructure).map(([key, menu]) => (
          <div 
            key={key}
            className="nav-menu"
          >
            <button 
              className={`menu-toggle ${activeDropdown === key ? 'active' : ''}`}
              onClick={() => toggleDropdown(key)}
              aria-expanded={activeDropdown === key}
            >
              <span className="menu-text">{menu.label}</span>
              <span className="menu-arrow"></span>
            </button>

            {activeDropdown === key && (
              <div className="nav-dropdown">
                <ul className="nav-links">
                  {menu.items.map((item, index) => (
                    <li key={item.label || index}>
                      {item.path ? (
                        <NavLink 
                          to={item.path}
                          end={item.path === "Goose-Rev/"}
                          onClick={() => handleClick(item)}
                        >
                          {item.label}
                        </NavLink>
                      ) : (
                        <button 
                          className="dropdown-action"
                          onClick={() => handleClick(item)}
                        >
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
    </>
  );
}

export default Navigation;
