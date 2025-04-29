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
  title: 'লবন | ক্ষমতা নয়,অবদানই নেতৃত্বের আসল মাপকাঠি',
  description: 'আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।',
  keywords: "লবন, ওপেন-সোর্স, রাজনৈতিক প্ল্যাটফর্ম, অবদান, স্বচ্ছতা",
  openGraph: {
    locale: 'bn_BD',
    siteName: 'লবন',
    title: 'লবন | ক্ষমতা নয়,অবদানই নেতৃত্বের আসল মাপকাঠি',
    description: 'আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।',
    url: 'https://www.lobon.org/',
    images: [
      {
        url: 'https://www.lobon.org/images/homepage.png',
        width: 1920,
        height: 1080,
        alt: 'Open Graph Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'লবন | ওপেন-সোর্স পার্টি: ক্ষমতা নয়,অবদানই নেতৃত্বের আসল মাপকাঠি',
    description: 'আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।',
    images: ['https://www.lobon.org/images/homepage.png'],
    site: '@lobonorg',
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
