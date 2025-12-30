import React from 'react';
import { devices, type Device } from '../constants/devices';
import { Smartphone, Tablet, Monitor, X, Watch, Laptop, Tv } from 'lucide-react';
import './DeviceSelectorModal.css';

interface DeviceSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (device: Device) => void;
  selectedDevice: Device;
}

const DeviceSelectorModal: React.FC<DeviceSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  selectedDevice,
}) => {
  if (!isOpen) return null;

  const groupedDevices = {
    apple: devices.filter((d) => d.type === 'apple'),
    android: devices.filter((d) => d.type === 'android'),
    tablet: devices.filter((d) => d.type === 'tablet'),
    special: devices.filter((d) => d.type === 'special'),
  };

  const getIcon = (d: Device) => {
    if (d.name.includes('Watch')) return <Watch size={24} />;
    if (d.name.includes('Macbook') || d.name.includes('Laptop')) return <Laptop size={24} />;
    if (d.name.includes('TV') || d.name.includes('iMac')) return <Tv size={24} />;
    if (d.type === 'tablet') return <Tablet size={24} />;
    if (d.type === 'special') return <Monitor size={24} />;
    return <Smartphone size={24} />; // Default for phones
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Select Device</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {Object.entries(groupedDevices).map(([type, group]) => (
            <div key={type} className="device-category">
              <h3 className="category-title">
                {type === 'apple' && ' Apple Phones'}
                {type === 'android' && '🤖 Android Phones'}
                {type === 'tablet' && '📱 Tablets'}
                {type === 'special' && '⌚ Specials & Others'}
              </h3>
              <div className="device-grid">
                {group.map((device) => (
                  <button
                    key={device.name}
                    className={`device-card ${selectedDevice.name === device.name ? 'active' : ''}`}
                    onClick={() => {
                      onSelect(device);
                      onClose();
                    }}
                  >
                    <div className="device-icon">{getIcon(device)}</div>
                    <div className="device-name">{device.name}</div>
                    <div className="device-dims">
                      {device.width} x {device.height}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceSelectorModal;
