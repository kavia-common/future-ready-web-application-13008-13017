# Ocean Coffee React Frontend — Developer Notes

This SPA implements the Coffee Shop Mobile App following the Ocean Professional design tokens and patterns.

## Tech
- React 18 with function components, hooks
- react-router-dom v6 for routing
- CSS variables for design tokens in `src/index.css`
- Local state via a lightweight `AppContext` in `App.js`
- No backend APIs — mock data in `src/data/mockData.js`

## Structure
- src/App.js: Provider + Routes + Guards
- src/components: 
  - atoms: Button, Input, Chip, Badge
  - molecules: AppBar, Card, Segmented, Rating, QuantityStepper
  - layout: MainLayout (header + bottom nav)
- src/screens: Splash, Onboarding, auth (Login/Signup), home (Home), product (ProductDetail), cart (Cart/Checkout), order (OrderTracking), profile (Profile)
- src/data/mockData.js: products, categories, banners

## Theme Tokens
See `src/index.css` for:
- Colors (primary, accent, gray scale, feedback)
- Typography scale and line-heights
- Spacing, radii, shadows (elevation), motion
- Safe area helpers and utilities

## Accessibility
- Visible focus ring via `:focus-visible`
- Touch targets >=36px for critical controls
- Color contrast adhered per tokens (verify with real assets later)

## Connecting a Backend (Guidance)
1. Auth:
   - Replace mock `setUser` in AppContext with API calls.
   - Store tokens in httpOnly cookies or secure storage.
   - Consider connecting magic links: use env var REACT_APP_SITE_URL as redirect base.

2. Products & Content:
   - Swap `src/data/mockData.js` with API fetch hooks.
   - Add loading and empty states to Home and ProductDetail.

3. Cart & Orders:
   - Persist cart in localStorage or backend session.
   - Checkout should create order and redirect to tracking with returned orderId.
   - WebSocket or SSE can update tracking in real-time.

4. Configuration:
   - Create `.env` with:
     - REACT_APP_API_BASE
     - REACT_APP_SITE_URL (for auth redirects)
   - Never commit secrets.

5. Error handling:
   - Centralize API client with interceptors for auth refresh.
   - Show toast errors and inline form validation.

6. Theming:
   - If extending themes, consider a ThemeProvider that toggles a data-theme attribute and alters CSS vars.

## Next Steps
- Replace placeholder shapes with proper SVG icons and images (open-source set).
- Add form validation and error messages.
- Implement skeleton loaders and transitions.
- Optional: add Storybook with Ocean tokens.
