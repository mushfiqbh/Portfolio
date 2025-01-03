import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Mushfiq R. (Portfolio) - Full Stack Developer",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
