import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "@/components/ui/toaster";
import "simplebar-react/dist/simplebar.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <ClerkProvider afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard">
        <html lang="en" className="light">
          <body
            className={cn(
              "inter.className min-h-screen font-sans antialiased",
              inter.className
            )}
          >
            <Toaster />
            <Navbar />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
