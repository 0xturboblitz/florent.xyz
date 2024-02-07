import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./NavBar";
import dynamic from 'next/dynamic'
import React from 'react'

const NoSsr = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)

dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florent Tavernier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <NoSsr>
          <div className="container mx-auto px-4 pt-16 text-gray-900 max-w-2xl">
            <NavBar />
            {/* Wrapped children in a div with padding and max width */}
            <div className="prose max-w-none text-gray-600" suppressHydrationWarning>{children}</div>
          </div>
        </NoSsr>
      </body>
    </html>
  );
}
