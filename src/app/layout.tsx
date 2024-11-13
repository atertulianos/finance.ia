import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/_components/navbar";
import { Toaster } from "sonner";
import { auth } from "@clerk/nextjs/server";

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
