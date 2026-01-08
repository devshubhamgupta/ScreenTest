import React from "react";
import type { Device } from "../constants/devices";
import "./DeviceFrame.css";

interface DeviceFrameProps {
  url: string;
  device: Device;
  orientation: "portrait" | "landscape";
  scale: number;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  url,
  device,
  orientation,
  scale,
}) => {
  const isPortrait = orientation === "portrait";

  // Dimensions
  const screenWidth = isPortrait ? device.width : device.height;
  const screenHeight = isPortrait ? device.height : device.width;

  // Frame calculations (Bezels)
  let bezelSize = 14; 
  if (device.type === 'apple') {
     if (device.name.includes('12') || device.name.includes('13') || device.name.includes('14') || device.name.includes('15') || device.name.includes('16')) {
       bezelSize = 8; 
     }
  } else if (device.type === 'android' && device.notchType === 'punch-hole') {
      bezelSize = 8; 
  } else if (device.type === 'tablet') {
    bezelSize = 25;
  } else if (device.type === 'wearable') {
    bezelSize = 4;
  }

  const frameWidth = screenWidth + bezelSize * 2;
  const frameHeight = screenHeight + bezelSize * 2;
  
  // Dynamic Styles based on device features
  let borderRadius = 48; // Default modern phone squircle
  if (device.notchType === 'bezel') borderRadius = 4; // Old phones
  if (device.type === 'tablet') borderRadius = 32; 
  if (device.type === 'special') borderRadius = 12; 
  if (device.name.includes('Watch')) borderRadius = 34; 

  // Chassis Style
  const isApple = device.type === 'apple';
  const chassisBackground = isApple 
    ? 'linear-gradient(135deg, #434343 0%, #1a1a1a 50%, #434343 100%)' // Shiny Black/Grey
    : '#1a1a1a'; // Default Dark for others

  const chassisBoxShadow = isApple
    ? '0 0 0 4px #2a2a2a, 0 20px 40px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.1)'
    : '0 0 0 4px #333, 0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.5)';

  // Button Style matching chassis - slightly differentiated
  const buttonBackground = isApple
    ? 'linear-gradient(90deg, #3a3a3a, #1a1a1a)' // Slightly darker than chassis for subtle difference
    : 'linear-gradient(90deg, #242424, #1a1a1a)'; // Slightly lighter than chassis (#1a1a1a) for Android

  // Calculate content padding to avoid status bar overlap
  let contentPaddingTop = 0;
  if (isApple) {
      contentPaddingTop = 48; // Standard iOS status bar height
  } else if (device.type === 'android') {
      contentPaddingTop = 36; // Standard Android status bar height
  } else if (device.notchType === 'bezel') {
      contentPaddingTop = 24; // Older devices
  }

  return (
    <div
      className="device-frame-wrapper"
      style={{
        width: frameWidth * scale,
        height: (frameHeight * scale) + 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
        transformOrigin: "top left",
        overflow: 'visible',
      }}
    >
      <div 
        className="device-chassis"
        style={{
          width: frameWidth,
          height: frameHeight,
          borderRadius: `${borderRadius}px`,
          background: chassisBackground, 
          // boxShadow: chassisBoxShadow,
          padding: bezelSize,
          position: 'relative',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      > 
        {/* Physical Buttons */}
        {/* Physical Buttons */}
        {(device.type === 'apple' || device.type === 'android') && (
            <>
                <div className="button-power" style={{ top: 120, right: -4, height: 60, background: buttonBackground }}></div>
                <div className="button-volume-up" style={{ top: 120, left: -4, height: 40, background: buttonBackground }}></div>
                <div className="button-volume-down" style={{ top: 170, left: -4, height: 40, background: buttonBackground }}></div>
                {device.type === 'apple' && (
                    <div className="button-silent" style={{ top: 80, left: -4, height: 20, background: buttonBackground }}></div>
                )}
            </>
        )}

      {/* Screen Area */}
      <div 
        className="device-screen-area"
        style={{
          width: screenWidth,
          height: screenHeight,
          borderRadius: `${borderRadius - bezelSize}px`, 
          position: 'relative', 
          backgroundColor: '#fff',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
        }}
      >
        {/* Status Bar */}
        {(device.type === 'apple' || device.type === 'android') && (
           <div className={`status-bar ${device.type} ${device.notchType}`}>
             <div className="status-left">
                <span className="time">
                  {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                </span>
             </div>
             <div className="status-right">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" className="icon-signal">
                   <path d="M1,12 L3,12 C3.55,12 4,11.55 4,11 L4,8 C4,7.45 3.55,7 3,7 L1,7 C0.45,7 0,7.45 0,8 L0,11 C0,11.55 0.45,12 1,12 Z M6,12 L8,12 C8.55,12 9,11.55 9,11 L9,5 C9,4.45 8.55,4 8,4 L6,4 C5.45,4 5,4.45 5,5 L5,11 C5,11.55 5.45,12 6,12 Z M11,12 L13,12 C13.55,12 14,11.55 14,11 L14,1 C14,0.45 13.55,0 13,0 L11,0 C10.45,0 10,0.45 10,1 L10,11 C10,11.55 10.45,12 11,12 Z" />
                   <path d="M15,12 L17,12 C17.55,12 18,11.55 18,11 L18,1 C18,0.45 17.55,0 17,0 L15,0 C14.45,0 14,0.45 14,1 L14,11 C14,11.55 14.45,12 15,12 Z" opacity="0.3"/> 
                </svg>
                <div className="icon-wifi">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor">
                    <path d="M11,15 C11.4,15 11.8,14.8 12.1,14.5 L20.6,4.2 C20.3,3.9 16.3,0.5 11,0.5 C5.7,0.5 1.7,3.9 1.4,4.2 L9.9,14.5 C10.2,14.8 10.6,15 11,15 Z" />
                  </svg>
                </div>
                <div className="icon-battery">
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
                     <path fillRule="evenodd" clipRule="evenodd" d="M1.5,0.5 C0.947715,0.5 0.5,0.947715 0.5,1.5 L0.5,10.5 C0.5,11.0523 0.947715,11.5 1.5,11.5 L20.5,11.5 C21.0523,11.5 21.5,11.0523 21.5,10.5 L21.5,1.5 C21.5,0.947715 21.0523,0.5 20.5,0.5 L1.5,0.5 Z M23,3.5 C23.8284,3.5 24.5,4.17157 24.5,5 L24.5,7 C24.5,7.82843 23.8284,8.5 23,8.5 L22.5,8.5 L22.5,3.5 L23,3.5 Z M2.5,2.5 L19.5,2.5 L19.5,9.5 L2.5,9.5 L2.5,2.5 Z" />
                     <rect x="2.5" y="2.5" width="10" height="7" rx="0.5" fill="currentColor"/> 
                  </svg>
                </div>
             </div>
           </div>
        )}

        {/* Content */}
        <div className="iframe-mask" style={{ paddingTop: contentPaddingTop }}>
          <iframe
            src={url}
            title="Simulator"
            className="simulator-iframe"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            style={{ width: 'calc(100% + 0px)', height: '100%', border: 'none' }} // Hide scrollbar trick
          />
        </div>

        {/* Notch / Island / Punch-hole Logic (SVG Version) */}
        {isPortrait && device.notchType === 'notch' && (
          <div className="notch-container-svg">
            <svg width="160" height="34" viewBox="0 0 160 34" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,0 C0,0 6,1 12,8 C18,15 22,34 38,34 L122,34 C138,34 142,15 148,8 C154,1 160,0 160,0 V0 H0 Z" fill="black" />
            </svg>
            <div className="notch-content">
               <div className="notch-speaker"></div>
               <div className="notch-camera"></div>
            </div>
          </div>
        )}
        
        {isPortrait && device.notchType === 'island' && (
          <div className="dynamic-island">
            <div className="island-camera"></div>
             <div className="island-sensor"></div>
          </div>
        )}

        {device.notchType === 'punch-hole' && (
          <div className="punch-hole" style={{ 
            top: isPortrait ? 10 : '50%', 
            left: isPortrait ? '50%' : 20,
            transform: isPortrait ? 'translateX(-50%)' : 'translateY(-50%)' 
          }}></div>
        )}
        
        {/* Home Indicator */}
        {(device.type === 'apple' && device.name !== 'iPhone SE 2016' && device.notchType !== 'bezel') && (
           <div 
             className="home-indicator"
             style={{
               bottom: 8,
               left: '50%',
               transform: 'translateX(-50%)',
             }}
           ></div>
        )}

      </div> 
      {/* End Screen Area */}
      </div>
      {/* End Chassis */}

      <div className="device-info">
        {device.name} — {device.width} × {device.height}
      </div>
    </div>
  );
};

export default DeviceFrame;
