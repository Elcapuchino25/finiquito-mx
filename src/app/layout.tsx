import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finiquito MX',
  description: 'Calculadora práctica para finiquitos en México',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
