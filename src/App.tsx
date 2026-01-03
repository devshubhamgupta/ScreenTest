import { useState, useEffect } from 'react';
import './App.css';
import DeviceFrame from './components/DeviceFrame';
import Sidebar from './components/Sidebar';
import DeviceSelectorModal from './components/DeviceSelectorModal';
import { devices } from './constants/devices';

function App() {
  const [url, setUrl] = useState('https://poledium.net');
  const [selectedDevice, setSelectedDevice] = useState(devices.find(d => d.name === 'iPhone 12') || devices[0]);
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
      // 80px allows for some breathing room top/bottom
      const availableHeight = window.innerHeight - 80; 
      
      const deviceHeight = orientation === 'portrait' 
        ? selectedDevice.height 
        : selectedDevice.width;
      
      // The Frame adds extra height (bezel). 
      // We assume roughly 5-6% extra height for the frame around the screen.
      const totalFrameHeight = deviceHeight * 1.06;

      // If device frame is taller than available space, scale it down
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
