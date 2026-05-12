import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "HireIt",
  description:
    "AI Resume Builder Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}