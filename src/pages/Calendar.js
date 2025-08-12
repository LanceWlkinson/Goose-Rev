import React from 'react';

function Calendar() {
  return (
    <div className="calendar">
      <h1>School Calendar</h1>
      <div className="calendar-intro">
        <p>Easily view important closure dates and scheduled breaks by checking out the 2025-2026 Goose & Rev Academy Calendar.</p>
      </div>
      
      <div className="calendar-section">
        <h2>Academic Calendar</h2>
        <div className="calendar-container">
          {/* Add your calendar integration here */}
          <div className="calendar-placeholder">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Goose-rev-calendar.png`}
              alt="Goose & Rev Academy Calendar" 
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </div>

      <div className="calendar-download">
        <h2>Download Calendar</h2>
        <p>Download our academic calendar to stay up to date with all school events and important dates.</p>
        <a 
          href={`${process.env.PUBLIC_URL}/Calendar.pdf`}
          download="Goose-Rev-Academy-Calendar.pdf"
          className="download-button"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Download Calendar (PDF)
        </a>
      </div>
    </div>
  );
}

export default Calendar;
