import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero()
{
    return (
        <main className="">
            <div className="container relative pt-[128px] flex flex-col justify-center mx-auto px-4 py-12 text-center gap-[25px] z-[2]">
                <div>
                    <Button className=" hover:bg-[#1D3200] bg-[#1D3200] text-white font-hind-siliguri font-semibold text-[18.29px] leading-[18.29px] text-center">
                        বাংলাদেশ 3.0
                    </Button>
                </div>

                <h1 className="text-[rgb(29,50,0)] text-2xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
                    ওপেন-সোর্স পার্টি: <span className="text-[#FF3A69] font-trb italic">ক্ষমতা নয়,</span>
                    অবদানই নেতৃত্বের আসল মাপকাঠি
                </h1>

                <p className="font-noto-sans font-medium text-[22px] leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                    আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।
                </p>

                <div className="mb-8">
                    <Button className="text-[#000000] hover:bg-[#86CD58] bg-[#86CD58] px-5 py-3 rounded-full font-hind-siliguri font-semibold text-[18px] leading-[24px]">
                        জয়েন করুন
                    </Button>
                </div>

                <Image
                    src="/images/homepage.png"
                    alt=""
                    width={1920}
                    height={300}
                    className="w-full h-auto"
                    priority
                />
            </div>
            <Image
                src="/backgrounds/hero-bottom-bg.svg"
                alt="Hero illustration showing people interacting with technology"
                width={1920}
                height={300}
                className="w-full h-auto"
                priority
            />
        </main>
    );
}

export default Hero;