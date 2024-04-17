import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

const myFont = localFont({ src: './Quicksand-VariableFont_wght.ttf' })



export const metadata: Metadata = {
  title: "Severin KEYINDE",
  description: "My Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
