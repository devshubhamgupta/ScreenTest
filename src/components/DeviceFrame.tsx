import React from 'react';
import { type Device } from '../constants/devices';

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
    <div 
      className="flex flex-col items-center origin-top will-change-transform transition-transform duration-200 ease-out" 
      style={{ transform: `scale(${scale})` }}
    >
      <div className="relative flex justify-center items-center">
        <img 
          src={deviceImage} 
          alt={device.name}
          className={`block max-w-full h-auto pointer-events-none ${isPortrait ? 'max-h-[80vh]' : 'max-w-[90vw] rotate-90'}`}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] bg-white"
          style={{ 
            width: `${width}px`, 
            height: `${height}px`
          }}
        >
          <iframe
            src={url}
            title="Simulator"
            className="block w-full h-full border-none"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
      <div className="mt-4 text-[#666] text-sm text-center">
        {device.name} — {width} x {height}
      </div>
    </div>
  );
};

export default DeviceFrame;
