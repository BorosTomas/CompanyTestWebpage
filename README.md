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
├── package.json     # Root scripts for running everything
└── README.md
```

## Quick Start

Run the full application locally with just two commands:

```bash
# 1. Install all dependencies (root, client, and server)
npm install && npm run install:all

# 2. Start both frontend and backend together
npm run dev
```

- **Frontend** → http://localhost:5173
- **Backend API** → http://localhost:3001

The Vite dev server automatically proxies `/api` requests to the Express backend.

## Getting Started (Manual)

### Prerequisites

- Node.js 18+ and npm

### Install Dependencies

```bash
# Install all dependencies at once
npm install && npm run install:all
```

Or install them individually:

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Development

Start both servers with a single command from the project root:

```bash
npm run dev
```

Or start them separately in two terminals:

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

### Run Tests

```bash
npm test
```

### Production Build

```bash
# Build the frontend
npm run build

# Start the server in production mode
npm start
```

In production mode, the Express server serves the built React app on http://localhost:3001 and handles API routes.

## API Endpoints

| Method | Endpoint       | Description                |
|--------|---------------|----------------------------|
| GET    | `/api/health` | Health check               |
| POST   | `/api/contact`| Submit contact form        |