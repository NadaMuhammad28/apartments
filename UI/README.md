

# UI-React-Vite-TS Application

This project isbuilt with Vite, TypeScript, and Material-UI. It leverages several key libraries and patterns, including React Hook Form for form handling, Zod for schema validation, Redux for state management, and custom components like a sidebar, header, and table. This setup is designed for building scalable and maintainable UI components.

## Features

- **Vite & TypeScript**: Fast and modern development setup with type safety.
- **Material-UI**: Provides a set of accessible, customizable components that follow Material Design.
- **React Hook Form & Zod**: Efficient and flexible form management with schema-based validation.
- **Redux**: State management to handle global application state.
- **Custom Components**:
  - **Sidebar**: A navigation sidebar to enhance application structure.
  - **Header**: A customizable header component.
  - **Custom Table**: A reusable table component that can be easily customized for various data structures.
  - **Text Field & Currency Field**: Specialized input components, including a text field and a currency field with formatting capabilities.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd ui-react-vite-ts
npm install
```

## Running the Application

To start the application in development mode, use:

```bash
npm run dev
```

This will start the Vite development server and your application will be accessible at `http://localhost:3000`.

## Building for Production

To create a production build of the application:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Material-UI**: A popular React UI framework.
- **React Hook Form**: Simplifies forms in React with validation and state management.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Redux Toolkit**: A predictable state container for JavaScript apps.
- **TailwindCSS**: UI librarby.

## Project Structure

The project's structure follows a modular pattern, keeping components and logic separate and reusable. Key directories include:

- `src/components`: Contains reusable UI components like the sidebar, header, and custom table.
- `src/hooks`: Custom hooks including form management with React Hook Form.
- `src/store`: Redux setup for global state management.
- `src/views`: Top-level page components for different routes in the application.
- `src/schemas`: forms schemas.
- `src/interfaces`: Typescript interfaces.
- `src/services/api`: Api endpoints with Axios instance.
- `src/servecis/theme`:MUI theme
