import { useState, useEffect } from 'react';
import './App.css';
import DeviceFrame from './components/DeviceFrame';
import Sidebar from './components/Sidebar';
import DeviceSelectorModal from './components/DeviceSelectorModal';
import { devices } from './constants/devices';

function App() {
  const [url, setUrl] = useState('https://www.google.com');
  const [selectedDevice, setSelectedDevice] = useState(devices.find(d => d.name === 'iPhone 12') || devices[0]);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Read URL from query parameter
    const params = new URLSearchParams(window.location.search);
    const urlParam = params.get('url');
    if (urlParam) {
      setUrl(decodeURIComponent(urlParam));
    }
  }, []);

  const toggleOrientation = () => {
    setOrientation((prev) => (prev === 'portrait' ? 'landscape' : 'portrait'));
  };

  return (
    <div className="app-container">
      <div className="simulator-workspace">
        <DeviceFrame
          url={url}
          device={selectedDevice}
          orientation={orientation}
          scale={1}
        />
      </div>
      
      <Sidebar 
        onDeviceClick={() => setIsModalOpen(true)}
        onRotateClick={toggleOrientation}
        orientation={orientation}
      />

      <DeviceSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={setSelectedDevice}
        selectedDevice={selectedDevice}
      />
    </div>
  );
}

export default App;
