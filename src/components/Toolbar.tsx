import React, { useState } from 'react';
import { type Device } from '../constants/devices';
import { RotateCw, Search, ZoomIn, ZoomOut, ChevronDown } from 'lucide-react';
import DeviceSelectorModal from './DeviceSelectorModal';

interface ToolbarProps {
  url: string;
  setUrl: (url: string) => void;
  selectedDevice: Device;
  setSelectedDevice: (device: Device) => void;
  orientation: 'portrait' | 'landscape';
  toggleOrientation: () => void;
  scale: number;
  setScale: (scale: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  url,
  setUrl,
  selectedDevice,
  setSelectedDevice,
  orientation,
  toggleOrientation,
  scale,
  setScale,
}) => {
  const [inputUrl, setInputUrl] = useState(url);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let finalUrl = inputUrl;
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = 'https://' + finalUrl;
    }
    setUrl(finalUrl);
    setInputUrl(finalUrl);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar-section">
          <form onSubmit={handleSubmit} className="url-form">
            <Search size={16} className="url-icon" />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Enter URL (e.g. google.com)"
              className="url-input"
            />
          </form>
        </div>

        <div className="toolbar-section">
          <button 
            className="device-select-btn" 
            onClick={() => setIsModalOpen(true)}
          >
            <span className="device-name">{selectedDevice.name}</span>
            <span className="device-dims-badge">{selectedDevice.width}x{selectedDevice.height}</span>
            <ChevronDown size={14} style={{ marginLeft: 8, opacity: 0.5 }} />
          </button>
        </div>

        <div className="toolbar-section controls">
          <button 
            onClick={toggleOrientation} 
            className={`icon-btn ${orientation === 'landscape' ? 'active' : ''}`}
            title="Rotate"
          >
            <RotateCw size={18} />
          </button>
          <div className="zoom-controls">
            <button onClick={() => setScale(Math.max(0.2, scale - 0.1))} className="icon-btn">
              <ZoomOut size={18} />
            </button>
            <span className="zoom-value">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(Math.min(2, scale + 0.1))} className="icon-btn">
              <ZoomIn size={18} />
            </button>
          </div>
        </div>
      </div>

      <DeviceSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={setSelectedDevice}
        selectedDevice={selectedDevice}
      />
    </>
  );
};

export default Toolbar;
