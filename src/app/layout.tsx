import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: "Orson Vision - Cinematic Humanism in Digital Innovation",
  description: "We craft immersive digital experiences that blend cutting-edge technology with human-centered design, creating moments that inspire and transform.",
  keywords: ["digital innovation", "web development", "brand experience", "content creation", "technology solutions", "strategic consulting"],
  authors: [{ name: "Orson Vision" }],
  creator: "Orson Vision",
  publisher: "Orson Vision",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orsonvision.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Orson Vision - Cinematic Humanism in Digital Innovation",
    description: "We craft immersive digital experiences that blend cutting-edge technology with human-centered design, creating moments that inspire and transform.",
    url: 'https://orsonvision.com',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Orson Vision - Cinematic Humanism in Digital Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orson Vision - Cinematic Humanism in Digital Innovation",
    description: "We craft immersive digital experiences that blend cutting-edge technology with human-centered design, creating moments that inspire and transform.",
    images: ['/hero-poster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={geist.className}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
