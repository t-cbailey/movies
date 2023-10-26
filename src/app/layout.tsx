import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import { Grid } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Database",
  description: "Database of movies from the OMDB API. https://www.omdbapi.com/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" l:grid grid-cols-4">
          <Navbar />
          <Sidebar />
          <main className=" l:col-span-3">{children}</main>
        </div>
      </body>
    </html>
  );
}
