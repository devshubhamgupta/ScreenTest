// Google Analytics utility for Chrome Extension
// Uses GA4 Measurement Protocol API (no external scripts required for Manifest V3)

const GA_MEASUREMENT_ID = 'G-8KTKEJ4EZV';
const GA_API_SECRET = '8m4-gjnkQOSQChoYQJEyjg';

// Generate a unique client ID (stored in localStorage)
const getClientId = (): string => {
  const storageKey = 'ga_client_id';
  let clientId = localStorage.getItem(storageKey);
  
  if (!clientId) {
    // Generate a unique client ID
    clientId = `${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(storageKey, clientId);
  }
  
  return clientId;
};

// Send event to Google Analytics using Measurement Protocol
const sendToGA = async (eventName: string, eventParams: Record<string, any> = {}) => {
  try {
    const clientId = getClientId();
    const payload = {
      client_id: clientId,
      events: [
        {
          name: eventName,
          params: {
            ...eventParams,
            engagement_time_msec: 100,
          },
        },
      ],
    };

    // Use GA4 Measurement Protocol API with API secret for enhanced tracking
    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;
    
    // For Chrome extensions, we can use fetch directly
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Silently fail in production, but log in development
      console.error('GA tracking error:', error);
  }
};

// Initialize Google Analytics (no-op for Measurement Protocol, but kept for compatibility)
export const initGA = () => {
  // Track initial page view
  trackPageView('ScreenTest - Mobile Simulator');
};

// Track page view
export const trackPageView = (pageName: string) => {
  sendToGA('page_view', {
    page_title: pageName,
    page_location: window.location.href,
  });
};

// Track device selection
export const trackDeviceSelection = (deviceName: string, deviceType: string, dimensions: string) => {
  sendToGA('device_selected', {
    device_name: deviceName,
    device_type: deviceType,
    device_dimensions: dimensions,
    event_category: 'Device',
    event_label: deviceName,
  });
};

// Track orientation change
export const trackOrientationChange = (orientation: 'portrait' | 'landscape') => {
  sendToGA('orientation_changed', {
    orientation: orientation,
    event_category: 'Interaction',
    event_label: orientation,
  });
};

// Track extension opened
export const trackExtensionOpened = (url?: string) => {
  sendToGA('extension_opened', {
    event_category: 'Extension',
    url: url || 'default',
  });
};

// Track modal opened
export const trackModalOpened = (modalType: string) => {
  sendToGA('modal_opened', {
    modal_type: modalType,
    event_category: 'UI',
    event_label: modalType,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  category: string,
  label?: string,
  value?: number
) => {
  sendToGA(eventName, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
