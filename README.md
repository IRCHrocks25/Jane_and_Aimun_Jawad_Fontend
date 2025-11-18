# Frontend - Centaura Website

This is the React frontend for the Centaura website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Configuration

- The API base URL is configured in `src/services/homepageApi.ts`
- Vite proxy configuration is in `vite.config.ts`
- The login page is handled by React at `/dashboard/login`
- All other `/dashboard/*` routes are proxied to the Django backend

## Build

To build for production:
```bash
npm run build
```

The build output will be in the `build` directory.

"# Jane_and_Aimun_Jawad_Fontend" 
