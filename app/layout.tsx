import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "@/lib/resume";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: "Boyu Liu — Software Engineer & AI Researcher",
    template: "%s | Boyu Liu",
  },
  description: "Software engineer and AI researcher building dependable intelligent systems. Explore Boyu Liu’s projects, research, experience, and writing.",
  keywords: ["Boyu Liu", "Software Engineering", "AI Research", "AI Agents", "Distributed Systems", "Machine Learning"],
  authors: [{ name: profile.name, url: profile.website }],
  openGraph: {
    title: "Boyu Liu — Software Engineer & AI Researcher",
    description: "Thoughtful code. Real-world impact. Projects, research, and experience in software engineering and intelligent systems.",
    siteName: "Boyu Liu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Boyu Liu — Software Engineer & AI Researcher",
    description: "Thoughtful code. Real-world impact. Projects, research, and experience in software engineering and intelligent systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
