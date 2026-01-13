import { useState, useEffect } from 'react';
import './App.css';
import DeviceFrame from './components/DeviceFrame';
import Sidebar from './components/Sidebar';
import DeviceSelectorModal from './components/DeviceSelectorModal';
import AnimatedBackground from './components/AnimatedBackground';
import { devices } from './constants/devices';
import { trackDeviceSelection, trackOrientationChange, trackExtensionOpened, trackModalOpened } from './utils/analytics';

function App() {
  const [url, setUrl] = useState('https://www.google.com/');
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
    
    // Track extension opened
    trackExtensionOpened(urlParam || undefined);
  }, []);

  const toggleOrientation = () => {
    setOrientation((prev) => {
      const newOrientation = prev === 'portrait' ? 'landscape' : 'portrait';
      trackOrientationChange(newOrientation);
      return newOrientation;
    });
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
      <AnimatedBackground />
      <div className="simulator-workspace">
        <DeviceFrame
          url={url}
          device={selectedDevice}
          orientation={orientation}
          scale={scale}
        />
      </div>
      
      <Sidebar 
        onDeviceClick={() => {
          setIsModalOpen(true);
          trackModalOpened('device_selector');
        }}
        onRotateClick={toggleOrientation}
        orientation={orientation}
      />

      <DeviceSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(device) => {
          setSelectedDevice(device);
          trackDeviceSelection(
            device.name,
            device.type,
            `${device.width}x${device.height}`
          );
        }}
        selectedDevice={selectedDevice}
      />
    </div>
  );
}

export default App;
