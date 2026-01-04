export interface Device {
  name: string;
  width: number;
  height: number;
  type: 'apple' | 'android' | 'tablet' | 'special';
  notchType?: 'notch' | 'island' | 'punch-hole' | 'bezel' | 'none'; // Added for specific styling
}

export const devices: Device[] = [
  // Apple Phones
  { name: 'iPhone 5', width: 320, height: 568, type: 'apple', notchType: 'bezel' },
  { name: 'iPhone SE 2016', width: 320, height: 568, type: 'apple', notchType: 'bezel' },
  { name: 'iPhone X', width: 375, height: 812, type: 'apple', notchType: 'notch' },
  { name: 'iPhone XR 2018', width: 414, height: 896, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 11', width: 414, height: 896, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 11 PRO', width: 375, height: 812, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 11 PRO MAX', width: 414, height: 896, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 12 Mini', width: 360, height: 780, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 12 (iOS 14)', width: 390, height: 844, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 12 PRO', width: 390, height: 844, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 12 PRO MAX', width: 428, height: 926, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 13 Mini', width: 375, height: 812, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 13 (iOS 15)', width: 390, height: 844, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 13 PRO', width: 390, height: 844, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 13 PRO MAX', width: 428, height: 926, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 14 (iOS 16)', width: 390, height: 844, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 14 Plus', width: 428, height: 926, type: 'apple', notchType: 'notch' },
  { name: 'iPhone 14 PRO', width: 393, height: 852, type: 'apple', notchType: 'island' },
  { name: 'iPhone 14 PRO MAX', width: 430, height: 932, type: 'apple', notchType: 'island' },
  { name: 'iPhone 15 (iOS 26)', width: 393, height: 852, type: 'apple', notchType: 'island' },
  { name: 'iPhone 15 Plus', width: 430, height: 932, type: 'apple', notchType: 'island' },
  { name: 'iPhone 15 PRO', width: 393, height: 852, type: 'apple', notchType: 'island' },
  { name: 'iPhone 15 PRO MAX', width: 430, height: 932, type: 'apple', notchType: 'island' },
  { name: 'iPhone 16 (iOS 26)', width: 393, height: 852, type: 'apple', notchType: 'island' },
  { name: 'iPhone 16 Plus', width: 430, height: 932, type: 'apple', notchType: 'island' },
  { name: 'iPhone 16 PRO MAX', width: 440, height: 956, type: 'apple', notchType: 'island' },
  { name: 'iPhone 17 (iOS 26)', width: 402, height: 874, type: 'apple', notchType: 'island' },
  { name: 'iPhone Air', width: 420, height: 912, type: 'apple', notchType: 'island' },
  { name: 'iPhone 17 PRO', width: 402, height: 873, type: 'apple', notchType: 'island' },
  { name: 'iPhone 17 PRO MAX', width: 440, height: 956, type: 'apple', notchType: 'island' },

  // Android Phones
  { name: 'Samsung Galaxy S20', width: 360, height: 800, type: 'android', notchType: 'punch-hole' },
  { name: 'Xiaomi Mi 11i', width: 360, height: 800, type: 'android', notchType: 'punch-hole' },
  { name: 'Huawei P30 PRO', width: 360, height: 780, type: 'android', notchType: 'notch' }, // Teardrop really
  { name: 'Google Pixel5', width: 393, height: 851, type: 'android', notchType: 'punch-hole' },
  { name: 'Oneplus Nord 2', width: 412, height: 915, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy Z Flip3', width: 360, height: 880, type: 'android', notchType: 'punch-hole' },
  { name: 'OPPO Find X3 PRO', width: 360, height: 804, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy A12', width: 360, height: 800, type: 'android', notchType: 'notch' },
  { name: 'Galaxy S21 Ultra', width: 360, height: 800, type: 'android', notchType: 'punch-hole' },
  { name: 'Google Pixel 6 PRO', width: 360, height: 780, type: 'android', notchType: 'punch-hole' },
  { name: 'Xiaomi 12', width: 360, height: 800, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy Note20 Ultra', width: 412, height: 883, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy S22', width: 360, height: 780, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy S22+', width: 360, height: 780, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy S22 ULTRA', width: 360, height: 772, type: 'android', notchType: 'punch-hole' },
  { name: 'Google Pixel 8', width: 412, height: 916, type: 'android', notchType: 'punch-hole' },
  { name: 'Samsung Galaxy S24', width: 360, height: 780, type: 'android', notchType: 'punch-hole' },
  { name: 'Galaxy S24 ULTRA', width: 384, height: 832, type: 'android', notchType: 'punch-hole' },

  // Tablets
  { name: 'iPad Mini', width: 768, height: 1024, type: 'tablet', notchType: 'none' },
  { name: 'iPad Air 4', width: 820, height: 1180, type: 'tablet', notchType: 'none' },
  { name: 'iPad PRO 11', width: 834, height: 1194, type: 'tablet', notchType: 'none' },
  { name: 'Galaxy Tab S7', width: 800, height: 1280, type: 'tablet', notchType: 'none' },
  { name: 'Microsoft Surface Duo', width: 1114, height: 705, type: 'tablet', notchType: 'none' },

  // Specials
  { name: 'Apple Watch Serie 6', width: 162, height: 197, type: 'special', notchType: 'none' },
  { name: 'Galaxy Fold2', width: 884, height: 1104, type: 'special', notchType: 'punch-hole' },
  { name: 'Macbook Air', width: 1280, height: 800, type: 'special', notchType: 'none' },
  { name: 'Dell Latitude', width: 1440, height: 809, type: 'special', notchType: 'none' },
  { name: 'Macbook PRO 16 2021', width: 1728, height: 1085, type: 'special', notchType: 'notch' },
  { name: 'Apple iMac 24"', width: 2048, height: 1152, type: 'special', notchType: 'none' },
  { name: 'Samsung Smart TV', width: 1920, height: 1080, type: 'special', notchType: 'none' },
  { name: 'Self service kiosk', width: 1080, height: 1920, type: 'special', notchType: 'none' },
  { name: 'Zebra MC330', width: 480, height: 800, type: 'special', notchType: 'none' },
  { name: 'Zebra TC78', width: 412, height: 818, type: 'special', notchType: 'none' },
  { name: 'Sonoff NSPanel Pro', width: 480, height: 480, type: 'special', notchType: 'none' },
  { name: 'Non-branded smartphone', width: 360, height: 800, type: 'special', notchType: 'none' },
];
