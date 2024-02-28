import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skate Nation XL",
  description: "Get ready to dive into a realistic skateboarding adventure! Explore skateparks, urban landscapes, and iconic spots. User-friendly controls, advanced tricks, and a rewarding progression system for the ultimate skateboarding experience. Add to your Wishlist and Stay tuned for updates!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
