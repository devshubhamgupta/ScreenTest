import React from 'react';
import { devices, type Device } from '../constants/devices';
import { Smartphone, Tablet, Monitor, X, Watch, Laptop, Tv } from 'lucide-react';

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
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-[5px] z-[1000] flex justify-center items-center animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
      <div className="bg-white w-[90%] max-w-[1000px] max-h-[85vh] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-[#e0e0e0] animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <div className="p-5 border-b border-[#e0e0e0] flex justify-between items-center bg-[#fafafa]">
          <h2 className="m-0 text-[1.2rem] font-medium text-[#333]">Select Device</h2>
          <button className="bg-transparent border-none text-[#666] cursor-pointer p-1 rounded hover:bg-[#f0f0f0] hover:text-[#333]" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 bg-white scrollbar-thin scrollbar-track-[#1e1e1e] scrollbar-thumb-[#444] hover:scrollbar-thumb-[#555]">
          {Object.entries(groupedDevices).map(([type, group]) => (
            <div key={type} className="mb-[30px] last:mb-0">
              <h3 className="mt-[10px] mb-[15px] text-[#333] text-[0.9rem] font-semibold uppercase tracking-widest flex items-center gap-2">
                {type === 'apple' && ' Apple Phones'}
                {type === 'android' && '🤖 Android Phones'}
                {type === 'tablet' && '📱 Tablets'}
                {type === 'special' && '⌚ Specials & Others'}
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3 mb-[30px]">
                {group.map((device) => (
                  <button
                    key={device.name}
                    className={`bg-[#fafafa] border border-[#e0e0e0] rounded-lg p-[15px_10px] flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 text-[#333] hover:bg-[#f0f0f0] hover:-translate-y-[2px] hover:border-[#ccc] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${selectedDevice.name === device.name ? '!bg-[#007bff] !text-white !border-[#007bff]' : ''}`}
                    onClick={() => {
                      onSelect(device);
                      onClose();
                    }}
                  >
                    <div className={`mb-[5px] opacity-70 ${selectedDevice.name === device.name ? '!opacity-100' : ''}`}>{getIcon(device)}</div>
                    <div className="text-[0.85rem] font-medium text-center leading-[1.2]">{device.name}</div>
                    <div className="text-[0.75rem] opacity-60">
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
