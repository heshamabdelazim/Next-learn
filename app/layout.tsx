import type { Metadata } from "next";
import {  Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import LightRays from '@/components/LightRays';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev-Event",
  description: "Event important as boom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}
      >
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#a1ecff"
            raysSpeed={0.6}
            lightSpread={0.8}
            rayLength={1}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0.01}
            className="custom-rays"
          />
        </div>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}