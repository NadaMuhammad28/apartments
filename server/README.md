# Node.js Server

## Overview

This is a Node.js server application using TypeScript. It provides a backend API for managing apartment data. The server is built with Express.js and utilizes TypeScript for type safety and code clarity. It includes endpoints for CRUD operations related to apartments and integrates with a MySQL database.

## Project Structure

- `src/` - Contains the source code for the server.
  - `controllers/` - Contains controller files for handling requests.
  - `middlewares/` - Contains middleware for request handling.
  - `models/` - Contains database models.
  - `routes/` - Contains route definitions.
  - `services/` - Contains service logic for business operations.
  - `index.ts` - Entry point of the application.
- `dist/` - Contains the compiled JavaScript files after running the build process.
- `package.json` - Contains project dependencies and scripts.
- `tsconfig.json` - TypeScript configuration file.
- `.env` - Environment variables for database connection and application configuration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MySQL](https://www.mysql.com/) (or compatible database)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd server

2. **Run the server:**

   ```bash
   npm run dev   
