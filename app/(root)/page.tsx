
import Features from "@/components/common/home/features";
import Hero from "@/components/common/home/hero";
import NextGen from "@/components/common/home/next-gen";
import OurGovernance from "@/components/common/home/our-governance";
import OurMission from "@/components/common/home/our-mission";
import OurPlatform from "@/components/common/home/our-platform";
import OurRoadmap from "@/components/common/home/our-roadmap";
import OurVision from "@/components/common/home/our-vision";
import TeamGrid from "@/components/common/home/team-grid";
import WhyUs from "@/components/common/home/why-us";
import { Metadata } from "next";

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

export default function Home()
{
  return (
    <div className="bg-[#EDF4E3]">
      <Hero />
      <WhyUs />
      <TeamGrid />
      <Features />
      <OurVision />
      <OurMission />
      <OurGovernance />
      <OurPlatform />
      <NextGen />
      <div id="roadmap">
        <OurRoadmap />
      </div>
    </div>
  );
}

