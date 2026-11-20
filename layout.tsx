import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGARAM Student Council",
  description: "Official portal for the AGARAM Foundation Student Council.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#080d18] text-white antialiased flex flex-col min-h-screen">
        
        {/* GLOBAL NAVIGATION BAR */}
        <nav className="bg-[#111c30] border-b border-white/10 sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo / Home Link */}
            <Link href="/" className="text-2xl font-black text-amber-400 tracking-widest hover:text-amber-300 transition-colors">
              AGARAM
            </Link>

            {/* Nav Links */}
            <div className="flex gap-6 items-center">
              <Link href="/" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">
                Departments
              </Link>
              <Link href="/login" className="text-sm font-bold bg-amber-400 text-black px-5 py-2 rounded-full hover:bg-amber-500 transition-colors shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                Portal Login
              </Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="flex-grow">
          {children}
        </div>

      </body>
    </html>
  );
}