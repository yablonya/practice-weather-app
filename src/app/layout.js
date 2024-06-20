import'./global.scss';
import {ForecastContextProvider} from "@/hooks/ForecastContext";

export const metadata = {
  title: "Weather App",
  description: "Front-end practice Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ForecastContextProvider>
          {children}
        </ForecastContextProvider>
      </body>
    </html>
  );
}
