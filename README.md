# Carevia Health - Premium Healthcare Demo Website

A fully working, production-ready healthcare website demo built for doctors, dental clinics, hospitals, diagnostic centers, and other healthcare professionals.

## Features
- **Modern Tech Stack**: React + Vite + React Router
- **Premium Design System**: Clean, trustworthy medical aesthetic with responsive design.
- **Customizable**: Centralized configuration (`src/config/siteConfig.js`) to easily adapt to any clinic brand.
- **Data-Driven**: Doctors, Services, and Testimonials are driven by a simple data file (`src/data/demoData.js`).
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.
- **Contact & Appointment**: Beautiful, functional UI forms ready to be hooked up to a backend.

## Architecture
- `src/components/`: Reusable UI components (Header, Footer).
- `src/pages/`: Main application pages.
- `src/data/`: Demo data for the application.
- `src/config/`: Global site configuration.
- `src/styles/` or `index.css`: Global styling and CSS design system.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build

To build the project for production:
```bash
npm run build
```

## Vercel Deployment

This project is configured for easy deployment on Vercel:
1. Push this repository to GitHub.
2. In Vercel, select **Import Project** and connect your GitHub account.
3. Select this repository.
4. Vercel will automatically detect the **Vite** framework.
5. Click **Deploy**.

## Customizing for a Client

1. Open `src/config/siteConfig.js` to change the clinic name, colors, phone numbers, and addresses.
2. Open `src/data/demoData.js` to replace the doctors, services, and testimonials with real data.
3. Add a backend integration (e.g., EmailJS or a custom API) in `src/pages/Appointment.jsx` to receive real bookings.

*Note: This is a demo website. Ensure you replace all fictional demo information with real medical information and have all disclaimers reviewed before publishing a real clinic website.*
