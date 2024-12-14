import type { Metadata } from "next";
import { Indie_Flower, Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import AuthRouteGuard from "./admin/auth/AuthRouteGuard";

const inter = Inter({ subsets: ["latin"] });
const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Elechi's Restaurant",
  description: "Allow your tongue to save you a trip to Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Akkurat" }}>
        <AuthRouteGuard>{children}</AuthRouteGuard>
      </body>
    </html>
  );
}
