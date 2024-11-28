// app/layout.jsx
import './globals.css';  // Updated import path
import ClientLayout from '../components/ClientLayout.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Blockwochenauftrag</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}