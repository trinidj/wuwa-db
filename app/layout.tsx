import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/nav-bar";

// import { SearchDialogContent } from "@/components/search-dialog-content"
// import resonatorsData from "@/app/data/resonators/index.json"
// import { Resonator } from "@/app/types/resonator"
// import { Button } from "@/components/ui/button"
// import Link from "next/link";
// import Image from "next/image";
// import { useIsMobile } from "@/hooks/use-mobile";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phrolova Project",
  description: "Wuwa Database",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <header className="bg-card h-15 flex items-center justify-center border-b-2 border-rarity-5/30 px-80">
            <NavBar />
          </header>

          <main className="py-6 px-4 sm:py-12 sm:px-8 md:px-16 lg:px-32 xl:py-20 xl:px-80">
            {children}
          </main>

          <footer className="border-t border-t-rarity-5/50 bg-linear-to-r from-white/5 via-white/10 to-transparent px-4 py-10 sm:px-8 md:px-16 lg:px-32 xl:px-80 text-sm">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Phrolova Project</p>
                <p className="text-base font-semibold">Wuwa Database</p>
                <p className="text-muted-foreground">
                  Curated data and tools for resonators, built to stay fast and focused.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Stack</p>
                <div className="flex flex-wrap gap-2 text-muted-foreground">
                  <span className="rounded-full border border-white/10 px-3 py-1">Next.js</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Tailwind CSS</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Shadcn UI</span>
                </div>
                <p className="text-muted-foreground">
                  Made with Next.js and Tailwind for the Phrolova Project.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigation</p>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <span>Resonators</span>
                  <span>Guides</span>
                  <span>Updates</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Stay curious. Iterate often.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
