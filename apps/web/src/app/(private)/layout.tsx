import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ReactQueryProvider from "@/providers/react-query-provider";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { UserContextProvider } from "@/providers/user-provider";
export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_NAME,
};

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();
  const token = await user.getToken();

  if (!token) return <RedirectToSignIn />;
  return (
    <UserContextProvider value={token}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ReactQueryProvider>
          <Toaster />
          <main>
            <Navbar />
            <div className="mx-auto p-4 container">{children}</div>
            <Footer />
          </main>
        </ReactQueryProvider>
      </ThemeProvider>
    </UserContextProvider>
  );
}
