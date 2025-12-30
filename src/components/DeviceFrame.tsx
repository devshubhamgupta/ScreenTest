import React from 'react';
import { type Device } from '../constants/devices';
import './DeviceFrame.css';

interface DeviceFrameProps {
  url: string;
  device: Device;
  orientation: 'portrait' | 'landscape';
  scale: number;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ url, device, orientation, scale }) => {
  const isPortrait = orientation === 'portrait';
  const width = isPortrait ? device.width : device.height;
  const height = isPortrait ? device.height : device.width;

  // Determine which device image to use
  const isApple = device.type === 'apple';
  const deviceImage = isApple ? '/Iphone.png' : '/Android.png';

  return (
    <div className="device-frame-wrapper" style={{ transform: `scale(${scale})` }}>
      <div className="device-image-container">
        <img 
          src={deviceImage} 
          alt={device.name}
          className={`device-image ${isPortrait ? 'portrait' : 'landscape'}`}
        />
        <div 
          className="device-screen"
          style={{ 
            width: `${width}px`, 
            height: `${height}px`
          }}
        >
          <iframe
            src={url}
            title="Simulator"
            className="simulator-iframe"
            style={{ width: '100%', height: '100%', border: 'none' }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
      <div className="device-info">
        {device.name} — {width} x {height}
      </div>
    </div>
  );
};

export default DeviceFrame;
