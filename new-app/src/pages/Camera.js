import React, { useState } from 'react';

const cameraLocations = [
  { id: 'cam1', name: 'Infant Room', password: '1234', streamUrl: 'https://video.nest.com/embedded/live/1E8tHuDSaE?autoplay=1' },
  { id: 'cam2', name: 'Woddler Room', password: '5678', streamUrl: 'https://your-camera-stream-url-2' },
  { id: 'cam3', name: 'Toddler Room', password: '9012', streamUrl: 'https://your-camera-stream-url-3' },
  { id: 'cam4', name: 'Preschool Room', password: '3456', streamUrl: 'https://your-camera-stream-url-4' }
];

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
    const camera = cameraLocations.find(cam => cam.id === selectedCamera.id);
    
    if (camera.password === password) {
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
            <h2>Security Cameras</h2>
            <p>Select a camera location to view the live feed. Authentication required for access.</p>
          </section>
          
          <div className="camera-grid">
            {cameraLocations.map((camera) => (
              <button
                key={camera.id}
                className="camera-button"
                onClick={() => handleCameraSelect(camera)}
              >
                <span className="camera-icon">📹</span>
                {camera.name}
              </button>
            ))}
          </div>
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
