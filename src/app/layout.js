import'./global.scss';

export const metadata = {
  title: "Weather App",
  description: "Front-end practice Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
