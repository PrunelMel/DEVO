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
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className=" ">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <nav className=" mt-3 fixed w-full">
              
              <div className=" flex w-full">
                
                {/* logo */}
                <div className="font-bold w-1/4">DEVO</div>
              
              
    
                <div className="w-1/2">
                  
                    
                  <ul className="flex font-bold space-x-16 items-center justify-center">
    
                    <li>
                      <a href="#" className="hover:text-sm transition-all duration-75 " aria-current="page">Home</a>
                    </li>
    
                    <li>
                      <a href="/articles" className="hover:text-sm transition-all duration-75">Articles</a>
                    </li>
    
                    <li>
                      <a href="/articles/hackerRank/balancedBracket" className="hover:text-sm transition-all duration-75  ">About</a>
                    </li>
    
                  </ul>

                </div>
    
                <ThemeToggle/>
    
                {/* suscribe button */}
                <div className="font-bold w-1/4 text-center">
                  <a href="#" className="p-1 border-2 text-neutral-200 border-neutral-200 hover:bg-white  hover:text-teal-600  hover:text-sm transition ease-in-out duration-500 rounded-md ">Suscribe</a>
                </div>
              </div>
    
            </nav>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
