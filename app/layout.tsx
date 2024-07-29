import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "./component/context/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spedire",
  description: "Next Gen Look",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        {children}
        </GlobalProvider>
        </body>
    </html>
  );
}
