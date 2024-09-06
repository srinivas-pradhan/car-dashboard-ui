import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';



const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dashboard UI",
  description: "Car Dashboard UI for Managing all things Cars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={`${dm_sans.className} antialiased dark:bg-gray-700`}>
            {children}
          </body>
        </html>
    </ClerkProvider>
  );
}
