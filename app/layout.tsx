import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProgressBarProvider from "./(root)/ProgressBarProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LOBON - Open Source Political Party",
    template: "%s | LOBON - Open Source Political Party",
  },
  metadataBase: new URL("https://lobon.org"),
  description: "A transparent, open-source political platform where leadership is earned through ideas, contributions, and community impact—not money or influence.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <Analytics />
      <body
        className={cn(
          "relative h-full min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="swajp-theme"
          disableTransitionOnChange
        >
          <ProgressBarProvider>
            <TooltipProvider delayDuration={0}>
              {children}
            </TooltipProvider>
          </ProgressBarProvider>
        </ThemeProvider>

        <script dangerouslySetInnerHTML={{
          __html: `!function (t, r, y, d, a, ta, co, ps){if (r.getElementById(a)) return;
          t[y] = t[y] || function () {(t[y].q = t[y].q || []).push(arguments); };co = r.createElement(d);
          co.async = true;co.src = "https://datacops.lobon.org/" + d + "?cop_key=" + ta;
    co.id = a;ps = r.getElementsByTagName(d)[0];ps.parentNode?.insertBefore(co, ps);}
          (window, document, "datacops", "script", "datacops_script", "e9e9815b9dde60d5b94db9fba33f2f7m9m0syzd");` }}></script>
      </body>
    </html>
  );
}
