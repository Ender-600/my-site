import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Boyu Liu - Software Developer & AI Researcher",
  description: "Personal portfolio showcasing my work experience, projects, research, and technical expertise in software development and machine learning",
  keywords: ["Software Development", "Machine Learning", "React", "Next.js", "AI Research", "Full Stack"],
  authors: [{ name: "Boyu Liu" }],
  openGraph: {
    title: "Boyu Liu - Software Developer & AI Researcher & Designer",
    description: "Personal portfolio showcasing my work experience, projects, research, and technical expertise in software development and machine learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
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
