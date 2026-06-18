import './globals.css';

export const metadata = {
  title: 'Dzone - Tech Agency & Software Development Partner',
  description: 'We build the modern web, expand your digital prospects, and offer expert IT outsourcing services in healthcare, finance, education, and more.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
