import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVO's BLOG",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"></link>

      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="min-h-screen overflow-hidden relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header className="fixed h-16 top-0 left-0 right-0 px-16 py-8 flex justify-between items-center z-[100] md:px-8 backdrop-blur-sm">
            <div className="font-syne text-3xl font-extrabold text-brand-dark tracking-wider">
              DEVO
            </div>
            <nav className="flex gap-12 items-center md:gap-6">
              <a href="#home" className="nav-link font-syne font-bold text-brand-dark text-lg transition-all duration-300 relative hover:text-brand-dark md:text-base">
                Home
              </a>
              <a href="#articles" className="nav-link font-syne font-bold text-brand-dark text-lg transition-all duration-300 relative hover:text-brand-dark md:text-base">
                Articles
              </a>
              <a href="#about" className="nav-link font-syne font-bold text-brand-dark text-lg transition-all duration-300 relative hover:text-brand-dark md:text-base">
                About
              </a>
              <ThemeToggle/>
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}  
