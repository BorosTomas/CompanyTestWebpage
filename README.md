# CompanyTestWebpage

A modern demo company webpage built with **React** (Vite) and **Node.js** (Express), showcasing a professional landing page for TechVision Solutions.

## Tech Stack

- **Frontend:** React 19 + Vite
- **Backend:** Node.js + Express
- **Testing:** Vitest + React Testing Library

## Project Structure

```
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── server/          # Node.js backend (Express)
│   ├── index.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Development

Start both the backend and frontend in separate terminals:

```bash
# Terminal 1 - Start the backend server
cd server
npm run dev
# Server runs on http://localhost:3001

# Terminal 2 - Start the frontend dev server
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

The Vite dev server proxies `/api` requests to the Express backend automatically.

### Run Tests

```bash
cd client
npm test
```

### Production Build

```bash
# Build the frontend
cd client
npm run build

# Start the server in production mode
cd ../server
NODE_ENV=production npm start
```

In production mode, the Express server serves the built React app and handles API routes.

## API Endpoints

| Method | Endpoint       | Description                |
|--------|---------------|----------------------------|
| GET    | `/api/health` | Health check               |
| POST   | `/api/contact`| Submit contact form        |