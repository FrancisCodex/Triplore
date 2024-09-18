import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar_nav } from "@/components/page_components/sidebar_nav";
import { ThemeProvider } from "next-themes";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "TripLore",
  description: "An AI Powered Travel Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={''}
      >
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Sidebar_nav>
            {children}
          </Sidebar_nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
