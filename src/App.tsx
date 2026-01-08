import { useState, useEffect } from 'react';
import './App.css';
import DeviceFrame from './components/DeviceFrame';
import Sidebar from './components/Sidebar';
import DeviceSelectorModal from './components/DeviceSelectorModal';
import { devices } from './constants/devices';

function App() {
  const [url, setUrl] = useState('https://poxscan.io');
  const [selectedDevice, setSelectedDevice] = useState(devices.find(d => d.name === 'iPhone 15 Plus') || devices[0]);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [scale, setScale] = useState(1);
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

  useEffect(() => {
    const handleResize = () => {
      // Calculate available height (subtract padding for workspace margins)
      const availableHeight = window.innerHeight - 80; 
      
      const deviceHeight = orientation === 'portrait' 
          ? selectedDevice.height 
          : selectedDevice.width;
        
      // The Frame adds extra height (bezel). 
      // Approx 1.06 factor or simpler + 60px padding
      const totalFrameHeight = deviceHeight + 100; // Adding simplified buffer for frame

      if (totalFrameHeight > availableHeight) {
        setScale(availableHeight / totalFrameHeight);
      } else {
        setScale(1);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedDevice, orientation]);

  return (
    <div className="app-container">
      <div className="simulator-workspace">
        <DeviceFrame
          url={url}
          device={selectedDevice}
          orientation={orientation}
          scale={scale}
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
