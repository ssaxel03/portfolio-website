import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7xgPNMHyCNdaZQB0XiVn6tYIVXrzXlBw",
  authDomain: "portfolio-website-6c1e9.firebaseapp.com",
  projectId: "portfolio-website-6c1e9",
  storageBucket: "portfolio-website-6c1e9.firebasestorage.app",
  messagingSenderId: "188793124382",
  appId: "1:188793124382:web:ab21001b502aaa688b600f",
  measurementId: "G-RPGLQZRHP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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

export const metadata: Metadata = {
  title: "Axel's Portfolio",
  description: "Get to know my journey",
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
        {children}
      </body>
    </html>
  );
}
