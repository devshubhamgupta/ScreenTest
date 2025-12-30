export interface Device {
  name: string;
  width: number;
  height: number;
  type: 'apple' | 'android' | 'tablet' | 'special';
}

export const devices: Device[] = [
  // Apple Phones
  { name: 'iPhone 5', width: 320, height: 568, type: 'apple' },
  { name: 'iPhone SE 2016', width: 320, height: 568, type: 'apple' },
  { name: 'iPhone X', width: 375, height: 812, type: 'apple' },
  { name: 'iPhone XR', width: 414, height: 896, type: 'apple' },
  { name: 'iPhone 11', width: 414, height: 896, type: 'apple' },
  { name: 'iPhone 11 Pro', width: 375, height: 812, type: 'apple' },
  { name: 'iPhone 11 Pro Max', width: 414, height: 896, type: 'apple' },
  { name: 'iPhone 12 Mini', width: 360, height: 780, type: 'apple' },
  { name: 'iPhone 12', width: 390, height: 844, type: 'apple' },
  { name: 'iPhone 12 Pro', width: 390, height: 844, type: 'apple' },
  { name: 'iPhone 12 Pro Max', width: 428, height: 926, type: 'apple' },
  { name: 'iPhone 13 Mini', width: 375, height: 812, type: 'apple' },
  { name: 'iPhone 13', width: 390, height: 844, type: 'apple' },
  { name: 'iPhone 13 Pro', width: 390, height: 844, type: 'apple' },
  { name: 'iPhone 13 Pro Max', width: 428, height: 926, type: 'apple' },
  { name: 'iPhone 14', width: 390, height: 844, type: 'apple' },
  { name: 'iPhone 14 Plus', width: 428, height: 926, type: 'apple' },
  { name: 'iPhone 14 Pro', width: 393, height: 852, type: 'apple' },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932, type: 'apple' },
  { name: 'iPhone 15', width: 393, height: 852, type: 'apple' },
  { name: 'iPhone 15 Plus', width: 430, height: 932, type: 'apple' },
  { name: 'iPhone 15 Pro', width: 393, height: 852, type: 'apple' },
  { name: 'iPhone 15 Pro Max', width: 430, height: 932, type: 'apple' },
  { name: 'iPhone 16', width: 393, height: 852, type: 'apple' },
  { name: 'iPhone 16 Plus', width: 430, height: 932, type: 'apple' },
  { name: 'iPhone 16 Pro', width: 402, height: 874, type: 'apple' },
  { name: 'iPhone 16 Pro Max', width: 440, height: 956, type: 'apple' },
  { name: 'iPhone 17 (Concept)', width: 393, height: 852, type: 'apple' },
  { name: 'iPhone 17 Pro Max (Concept)', width: 440, height: 956, type: 'apple' },
  { name: 'iPhone Air (Concept)', width: 390, height: 844, type: 'apple' },

  // Android Phones
  { name: 'Samsung Galaxy S20', width: 360, height: 800, type: 'android' },
  { name: 'Xiaomi Mi 11i', width: 393, height: 873, type: 'android' },
  { name: 'Huawei P30 Pro', width: 360, height: 780, type: 'android' },
  { name: 'Google Pixel 5', width: 393, height: 851, type: 'android' },
  { name: 'Oneplus Nord 2', width: 412, height: 915, type: 'android' },
  { name: 'Galaxy Z Flip3', width: 360, height: 800, type: 'android' },
  { name: 'OPPO Find X3 Pro', width: 360, height: 800, type: 'android' },
  { name: 'Galaxy A12', width: 412, height: 915, type: 'android' },
  { name: 'Galaxy S21 Ultra', width: 384, height: 854, type: 'android' },
  { name: 'Google Pixel 6 Pro', width: 412, height: 892, type: 'android' },
  { name: 'Xiaomi 12', width: 393, height: 873, type: 'android' },
  { name: 'Galaxy Note20 Ultra', width: 412, height: 883, type: 'android' },
  { name: 'Galaxy S22', width: 360, height: 780, type: 'android' },
  { name: 'Galaxy S22+', width: 360, height: 780, type: 'android' },
  { name: 'Galaxy S22 Ultra', width: 384, height: 854, type: 'android' },
  { name: 'Google Pixel 8', width: 412, height: 915, type: 'android' },
  { name: 'Samsung Galaxy S24', width: 360, height: 780, type: 'android' },
  { name: 'Galaxy S24 Ultra', width: 384, height: 854, type: 'android' },

  // Tablets
  { name: 'iPad Mini', width: 768, height: 1024, type: 'tablet' },
  { name: 'iPad Air 4', width: 820, height: 1180, type: 'tablet' },
  { name: 'iPad Pro 11', width: 834, height: 1194, type: 'tablet' },
  { name: 'Galaxy Tab S7', width: 800, height: 1280, type: 'tablet' },
  { name: 'Microsoft Surface Duo', width: 540, height: 720, type: 'tablet' },

  // Specials
  { name: 'Apple Watch Series 6', width: 368, height: 448, type: 'special' },
  { name: 'Galaxy Fold2', width: 884, height: 2208, type: 'special' },
  { name: 'Macbook Air', width: 1280, height: 800, type: 'special' },
  { name: 'Dell Latitude', width: 1366, height: 768, type: 'special' },
  { name: 'Macbook Pro 16 2021', width: 1728, height: 1117, type: 'special' },
  { name: 'Apple iMac 24', width: 1920, height: 1080, type: 'special' },
  { name: 'Samsung Smart TV', width: 1920, height: 1080, type: 'special' },
  { name: 'Self service kiosk', width: 1080, height: 1920, type: 'special' },
  { name: 'Zebra MC330', width: 320, height: 480, type: 'special' },
  { name: 'Zebra TC78', width: 360, height: 640, type: 'special' },
  { name: 'Sonoff NSPanel Pro', width: 480, height: 480, type: 'special' },
  { name: 'Non-branded smartphone', width: 360, height: 640, type: 'special' },
];
