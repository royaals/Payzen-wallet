import "./globals.css";

import { Providers } from "../provider";

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})


export const metadata: Metadata = {
  title: "Payzen",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
          <div className="min-w-screen min-h-screen ">
            
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
