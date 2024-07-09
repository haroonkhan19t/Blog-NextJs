import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable:"--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[5rem]">
      <body className={cn("min-h-screen bg-background font-sans antialiased",inter.variable)}>
        <Providers>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <main className="flex-1">
            <SiteHeader/>
            {children}
          </main>
        </div>
        </Providers>
      </body>
    </html>
  );
}
