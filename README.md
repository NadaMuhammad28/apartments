
## Overview

This project is  with multiple implementations across different platforms. It includes:

1. **UI (React with Vite and TypeScript)**
2. **UI Next (Next.js)**
3. **Server (Node.js with TypeScript)**
4. **Mobile React (React Native)**
5. **Database Schema (`db.sql`)**

## Directory Structure

### 1. **UI**

This is the core UI implementation using React with Vite and TypeScript. It incorporates various technologies and libraries to build a responsive and interactive user interface.

#### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that provides a fast development environment.
- **TypeScript**: Superset of JavaScript for static typing.
- **Material-UI (MUI)**: React components library for implementing Google's Material Design.
- **React Hook Form**: Library for managing form state and validation.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Redux**: State management library.
- **Custom Components**: Includes components like `Sidebar`, `Header`, `Custom Table`, `Text Field`, and `Currency Field`.

#### Features
- **Apartment List**: Displays a list of apartments with search and filter options.
- **Apartment Details**: Shows detailed information about a selected apartment.
- **Add Apartment**: Form for adding a new apartment.

### 2. **UI Next**

This directory contains the UI implementation using Next.js, a React framework for server-side rendering and static site generation.

#### Technologies Used
- **Next.js**: React framework for server-side rendering and static generation.
- **TypeScript**: Superset of JavaScript for static typing.
- **Material-UI (MUI)**: React components library for Material Design.
- **React Hook Form**: Library for form handling and validation.
- **Zod**: TypeScript-first schema validation library.

#### Features
- **Apartment List**: Displays a list of apartments with options for navigation and filtering.
- **Apartment Details**: Provides detailed information about a specific apartment.
- **Add Apartment**: Allows users to add new apartment details.

### 3. **Server**

This directory contains the backend implementation using Node.js with TypeScript.

#### Technologies Used
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **TypeScript**: Superset of JavaScript for static typing.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **express-validator**: Middleware for validation of request data.

#### Features
- **API Endpoints**: Handles requests for apartment data, including CRUD operations.

### 4. **Mobile React**

This directory contains the UI implementation for mobile applications using React Native.

#### Technologies Used
- **React Native**: Framework for building native mobile applications using React.
- **React Navigation**: Navigation library for React Native apps.
- **TypeScript**: Superset of JavaScript for static typing.

#### Features
- **Apartment List Screen**: Displays a list of apartments on mobile devices.
- **Apartment Detail Screen**: Shows detailed information about an apartment.
- **Add Apartment Screen**: Allows users to add a new apartment from a mobile device.

### 5. **db.sql**

This file contains the SQL schema script for the database.

#### Features
- **Schema Definition**: Defines tables and relationships for storing apartment data.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: For running the backend and frontend applications.
- **Docker**: For containerizing the applications.
- **Docker Compose**: For managing multi-container Docker applications.

### Running the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Run the Database**

3. **Run the Server**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Run the UI (React with Vite)**
   ```bash
   cd ui
   npm install
   npm run dev
   ```

5. **Run the UI Next**
   ```bash
   cd ui-next
   npm install
   npm run dev
   ```

6. **Run the Mobile App**
   ```bash
   cd mobile-react
   npm install
   npm run start
   ```
