import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/NavbarSection";
import FooterSection from "@/components/section/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Minute School",
  description:
    "10 Minute School is the largest free online educational platform in Bangladesh, offering courses for students from class 1 to university level. It provides a wide range of subjects including Math, Science, English, and more, all accessible for free. The platform also features interactive quizzes, video lectures, and personalized learning paths to help students excel in their studies. Join millions of learners and start your educational journey with 10 Minute School today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
