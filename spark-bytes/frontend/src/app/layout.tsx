"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useSupabaseSession } from "@/lib/useSupabaseSession";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spark!Bytes",
  description: "Food sharing app for BU students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSupabaseSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen`}
      >
        {/* ✅ NAVBAR */}
        <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
          <span className="font-semibold text-lg">Spark!Bytes</span>

          <div className="flex gap-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/events/create">Create Event</Link>

            {/* ✅ Show Login OR Logout based on session */}
            {session ? (
              <Link href="/log_out" className="underline">
                Logout
              </Link>
            ) : (
              <Link href="/login" className="underline">
                Login
              </Link>
            )}
          </div>
        </nav>

        {/* ✅ PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
