import "./globals.css";

export const metadata = {
  title: "HireIt",
  description: "AI Resume Builder",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}