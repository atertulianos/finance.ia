import Navbar from "@/src/_components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
});
export const metadata: Metadata = {
  title: "Finance IA",
  description:
    "Plataforma de gestão financeiro utilizando IA para monitorar as movimentações financeiras oferecendo insights personalizados e facilitando o controle do orçamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  return (
    <html lang="en">
      <body className={`${mulish.className} dark overflow-hidden antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {userId && <Navbar />}
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </ClerkProvider>

        <Toaster />
      </body>
    </html>
  );
}
