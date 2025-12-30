import { useState, useEffect } from 'react';
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
    <div className="flex h-screen w-screen bg-[#696969] overflow-hidden text-white font-sans">
      <div className="flex-1 flex justify-center items-center overflow-auto p-10 bg-[#8d8d8d] mr-[70px] scrollbar-hide">
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
