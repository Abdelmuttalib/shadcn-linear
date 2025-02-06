import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeButton } from "@/components/theme-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linear | shadcn style",
  description: "Linear design system style for shadcn ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} flex min-h-screen flex-col font-[family-name:var(--font-inter)] antialiased`}
      >
        <div className="fixed right-2 top-2 z-[9999]">
          <ThemeButton />
        </div>
        {/* <TailwindIndicator /> */}
        <main className="flex-1 overflow-hidden">{children}</main>
        {/* <footer className="mt-auto flex flex-wrap items-center justify-center gap-6 border-t py-10 text-muted-foreground">
          <p>
            Linear shadcn ui | Made with ❤️ by{" "}
            <a
              href="https://github.com/abdelmuttalib"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdelmuttalib
            </a>
          </p>
        </footer> */}
      </body>
    </html>
  );
}

function TailwindIndicator() {
  return (
    <div className="fixed bottom-2 right-2 z-[9999] text-sm">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
