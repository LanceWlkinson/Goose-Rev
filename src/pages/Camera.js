import React, { useState } from 'react';
const password = 'Goose'; // Example password for authentication
const locationSections = {
  mainCampus: {
    name: 'Thayer',
    cameras: [
      { id: 'Tha-cam1', name: 'Hatchlings', password: password, streamUrl: 'https://video.nest.com/embedded/live/d33OaolQM9?autoplay=1'},
      { id: 'Tha-cam2', name: 'Little Waddlers', password: password, streamUrl: 'https://video.nest.com/embedded/live/jiEFMZVQL7?autoplay=1' },
      { id: 'Tha-cam3', name: 'Busy Beaks', password: password, streamUrl: 'https://video.nest.com/embedded/live/ySGeXnSdfk?autoplay=1' },
      { id: 'Tha-cam4', name: 'Flight Crew', password: password, streamUrl: 'https://video.nest.com/embedded/live/swHAu0uPVb?autoplay=1' }
    ]
  },
  westCampus: {
    name: 'Comstock',
    cameras: [
      { id: 'Com-cam1', name: 'Hatchlings', password: password, streamUrl: 'https://video.nest.com/embedded/live/yexP2YyEfB?autoplay=1' },
      { id: 'Com-cam2', name: 'Little Waddlers', password: password, streamUrl: 'https://video.nest.com/embedded/live/1E8tHuDSaE?autoplay=1' },
      { id: 'Com-cam3', name: 'Busy Beaks', password: password, streamUrl: 'https://video.nest.com/embedded/live/Umij9QueXF?autoplay=1' },
      { id: 'Com-cam4', name: 'Flight Crew', password: password, streamUrl: 'https://video.nest.com/embedded/live/ygWBU7H4WB?autoplay=1' }
    ]
  },
  eastCampus: {
    name: 'Bombing Range',
    cameras: [
      { id: 'BR-cam1', name: 'Hatchlings', password: password, streamUrl: 'https://your-camera-stream-url-8' },
      { id: 'BR-cam2', name: 'Little Waddlers', password: password, streamUrl: 'https://your-camera-stream-url-9' },
      { id: 'BR-cam3', name: 'Busy Beaks', password: password, streamUrl: 'https://your-camera-stream-url-10' },
      { id: 'BR-cam4', name: 'Flight Crew', password: password, streamUrl: 'https://your-camera-stream-url-10' }
    ]
  }
};

function Camera() {
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleCameraSelect = (camera) => {
    setSelectedCamera(camera);
    setPassword('');
    setIsAuthenticated(false);
    setError('');
  };

    const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (selectedCamera.password === password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleBack = () => {
    setSelectedCamera(null);
    setPassword('');
    setIsAuthenticated(false);
    setError('');
  };

  return (
    <div className="camera-page">
      {!selectedCamera ? (
        <>
          <section className="camera-info">
            <h2>Goose Cameras</h2>
            <p>Select a campus and camera location to view the live feed. Authentication required for access.</p>
          </section>
          
          {Object.entries(locationSections).map(([sectionKey, section]) => (
            <div key={sectionKey} className="camera-section">
              <h3 className="section-title">{section.name}</h3>
              <div className="camera-grid">
                {section.cameras.map((camera) => (
                  <button
                    key={camera.id}
                    className="camera-button"
                    onClick={() => handleCameraSelect(camera)}
                  >
                    <span className="camera-icon">📹</span>
                    <span className="camera-name">{camera.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : !isAuthenticated ? (
        <div className="auth-container">
          <button className="back-button" onClick={handleBack}>
            ← Back to Cameras
          </button>
          <h2>Access {selectedCamera.name}</h2>
          <form onSubmit={handlePasswordSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="password">Enter Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-btn">Access Camera</button>
          </form>
        </div>
      ) : (
        <div className="camera-feed">
          <button className="back-button" onClick={handleBack}>
            ← Back to Cameras
          </button>
          <h2>{selectedCamera.name} - Live Feed</h2>
          <div className="video-container">
            <iframe
              src={selectedCamera.streamUrl}
              title={`${selectedCamera.name} Camera Feed`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Camera;
