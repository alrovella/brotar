import "@/config/env";

import "@repo/ui/globals.css";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_NAME,
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={esMX}
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
    >
      <html lang="es" suppressHydrationWarning>
        <body
          className={`${font.className} antialiased selection:bg-primary/80`}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </body>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_KEY ?? ""} />
      </html>
    </ClerkProvider>
  );
}
