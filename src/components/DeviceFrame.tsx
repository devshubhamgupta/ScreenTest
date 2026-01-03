import React from "react";
import type { Device } from "../constants/devices";
import "./DeviceFrame.css";

interface DeviceFrameProps {
  url: string;
  device: Device;
  orientation: "portrait" | "landscape";
  scale: number;
}

const FRAME_METRICS = {
  apple: {
    frameWidth: 868,
    frameHeight: 1762,
    screenX: 25,
    screenY: 32,
    screenWidth: 818,
    screenHeight: 1718,
    borderRadius: 48,
  },
  android: {
    frameWidth: 794,
    frameHeight: 1718,
    screenX: 35,
    screenY: 35,
    screenWidth: 724,
    screenHeight: 1648,
    borderRadius: 28,
  },
};

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  url,
  device,
  orientation,
  scale,
}) => {
  const isPortrait = orientation === "portrait";
  const isApple = device.type === "apple";

  const metrics = isApple ? FRAME_METRICS.apple : FRAME_METRICS.android;
  const frameImage = isApple ? "/Iphone.png" : "/Android.png";

  // Device viewport (truth)
  const deviceWidth = isPortrait ? device.width : device.height;
  const deviceHeight = isPortrait ? device.height : device.width;

  // Scale frame to fit viewport cutout
  const scaleX = deviceWidth / metrics.screenWidth;
  const scaleY = deviceHeight / metrics.screenHeight;

  const frameWidth = metrics.frameWidth * scaleX;
  const frameHeight = metrics.frameHeight * scaleY;

  const padLeft = metrics.screenX * scaleX;
  const padTop = metrics.screenY * scaleY;

  const screenRadius = metrics.borderRadius * scaleX;

  return (
    <div
      className="device-frame-wrapper"
      style={{
        width: frameWidth,
        height: frameHeight,
        transform: `scale(0.60)`,
      }}
    >
      {/* Device frame image */}
      <img
        src={frameImage}
        alt={device.name}
        className="device-frame-image"
        draggable={false}
      />

      {/* Screen cutout */}
      <div
        className="device-screen-area"
        style={{
          top: padTop,
          left: padLeft,
          width: deviceWidth,
          height: deviceHeight-8,
          borderRadius: "60px",
        }}
      >
        {/* Mask hides scrollbar but allows iframe to scroll */}
        <div className="iframe-mask">
          <iframe
            src={url}
            
            title="Simulator"
            className="simulator-iframe"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>

      <div className="device-info">
        {device.name} — {deviceWidth} × {deviceHeight}
      </div>
    </div>
  );
};

export default DeviceFrame;
