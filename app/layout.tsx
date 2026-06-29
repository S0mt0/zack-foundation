import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZACK Humanitarian Foundation | Youth Empowerment & Community Care",
  description:
    "ZACK Humanitarian Foundation for Youth Empowerment. Providing mental health support, rehabilitation, skill training, and welfare services in Nigeria.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://zackhumanitarianfoundation.org",
    siteName: "ZACK Humanitarian Foundation",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0d6a3d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
