// app/layout.jsx
import './globals.css';  // Korrekte Pfadangabe
import ClientLayout from '../components/ClientLayout.jsx'; // Korrigierter Pfad

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