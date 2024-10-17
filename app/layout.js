// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/ui/Navbar";
import Topbar from "@/components/ui/Topbar";
import Footer from "@/components/ui/Footer";
import LoaderWrapper from "@/components/ui/LoaderWrapper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ahmed Homeopathy Clinic",
  description: "At Ahmed Homeopathy Clinic, we provide personalized and holistic care using natural homeopathic remedies. Our experienced practitioners are dedicated to helping you achieve optimal health and well-being through safe and effective treatments tailored to your individual needs. Discover the power of homeopathy and take the first step towards a healthier, happier life.",
  icons: {
    icon: '/logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        {/* Other meta tags can go here if needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoaderWrapper>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
