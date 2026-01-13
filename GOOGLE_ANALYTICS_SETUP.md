# Google Analytics Setup Guide for ScreenTest Chrome Extension

## Step-by-Step Setup Process

### 1. Create Google Analytics 4 (GA4) Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon) in the bottom left
4. In the **Property** column, click **Create Property**
5. Fill in:
   - Property name: `ScreenTest Extension`
   - Reporting time zone: Your timezone
   - Currency: Your currency
6. Click **Next** and complete the setup
7. Click **Create** and accept the terms

### 2. Get Your Measurement ID

1. In your GA4 property, go to **Admin** → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter:
   - Website URL: `chrome-extension://` (or your extension URL)
   - Stream name: `ScreenTest Extension`
4. Click **Create stream**
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Update the Code

1. Open `src/utils/analytics.ts`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID-HERE';
   ```

### 4. Test the Integration

1. Build the extension: `pnpm build`
2. Load the extension in Chrome (chrome://extensions/)
3. Open the extension and perform actions (select device, rotate, etc.)
4. Go to Google Analytics → **Reports** → **Realtime**
5. You should see events appearing in real-time

## Tracked Events

The extension tracks the following events:

### 1. **Page View**
- **Event**: `page_view`
- **When**: Extension opens
- **Data**: Page title, URL

### 2. **Device Selection**
- **Event**: `device_selected`
- **When**: User selects a device from the modal
- **Data**: 
  - `device_name`: e.g., "iPhone 15 Plus"
  - `device_type`: "apple", "android", "tablet", "special"
  - `device_dimensions`: e.g., "430x932"

### 3. **Orientation Change**
- **Event**: `orientation_changed`
- **When**: User clicks rotate button
- **Data**: 
  - `orientation`: "portrait" or "landscape"

### 4. **Extension Opened**
- **Event**: `extension_opened`
- **When**: Extension is first opened
- **Data**: 
  - `url`: The URL being tested (if available)

### 5. **Modal Opened**
- **Event**: `modal_opened`
- **When**: Device selector modal opens
- **Data**: 
  - `modal_type`: "device_selector"

## Viewing Analytics Data

### Real-time Reports
- Go to **Reports** → **Realtime** in Google Analytics
- See events as they happen

### Custom Reports
- Go to **Explore** → **Free Form**
- Create custom reports with:
  - Device selection trends
  - Most popular devices
  - Orientation usage
  - Extension usage patterns

### Key Metrics to Track
- **Total users**: How many people use the extension
- **Device selections**: Which devices are most popular
- **Orientation changes**: Portrait vs landscape usage
- **Session duration**: How long users test websites
- **Events per session**: Engagement level

## Privacy Considerations

- IP addresses are anonymized (`anonymize_ip: true`)
- No personal data is collected
- Only usage events are tracked
- Complies with GDPR and privacy regulations

## Troubleshooting

### Events not appearing?
1. Check that your Measurement ID is correct
2. Verify Content Security Policy in manifest.json allows Google Analytics
3. Check browser console for errors
4. Ensure extension is loaded (not just built)

### CSP Errors?
- The manifest.json includes CSP to allow Google Analytics
- If you see CSP errors, check the manifest.json `content_security_policy` section

### Testing Locally
- Use Google Analytics DebugView:
  - Go to **Admin** → **DebugView**
  - Enable debug mode in your extension
  - See events in real-time with detailed information

## Additional Custom Events

You can add more custom events by using the `trackEvent` function:

```typescript
import { trackEvent } from './utils/analytics';

// Example: Track URL change
trackEvent('url_changed', 'Navigation', newUrl, 1);
```

## Next Steps

1. Set up custom dashboards in Google Analytics
2. Create conversion goals (e.g., device selection = engagement)
3. Set up alerts for unusual activity
4. Export data for further analysis

---

**Note**: Make sure to replace `G-XXXXXXXXXX` in `src/utils/analytics.ts` with your actual Google Analytics Measurement ID before deploying!
