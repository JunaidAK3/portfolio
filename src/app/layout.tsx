// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Navbar from './components/Navbar';

// Define metadata with types
export const metadata = {
  title: 'Portfolio',
  description: 'Showcasing my skills as a programmer, developer, and designer',
};

// Layout component with TypeScript type annotations
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <React.StrictMode>
          <Navbar />
          <main>{children}</main>
        </React.StrictMode>
      </body>
    </html>
  );
};

export default Layout;
