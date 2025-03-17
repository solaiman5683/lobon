import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AnimatedSVG from "../animated-svg";

function Hero()
{
    return (
        <main className="relative">
            <div className="container relative pt-32 flex flex-col justify-center mx-auto py-12 text-center gap-[25px] z-[2]">
                <div>
                    <Button className=" hover:bg-[#1D3200] bg-[#1D3200] text-white font-hind-siliguri font-semibold text-[18.29px] leading-[18.29px] text-center">
                        বাংলাদেশ 3.0
                    </Button>
                </div>

                <h1 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
                    ওপেন-সোর্স পার্টি: <span className="text-[#FF3A69] font-trb italic">ক্ষমতা নয়,</span>
                    অবদানই নেতৃত্বের আসল মাপকাঠি
                </h1>

                <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                    আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।
                </p>

                <div className="mb-8">
                    <Link href="/wishlist">
                        <Button className="text-[#000000] hover:bg-[#86CD58] bg-[#86CD58] px-5 py-3 rounded-full font-hind-siliguri font-semibold text-[18px] leading-[24px]">
                            জয়েন করুন
                        </Button>
                    </Link>
                </div>

                <Image
                    src="/images/homepage.png"
                    alt=""
                    width={1920}
                    height={300}
                    className="w-full h-auto lg:block hidden"
                    priority
                />
                <Image
                    src="/images/homepage-mobile.png"
                    alt=""
                    width={1920}
                    height={300}
                    className="w-full h-auto lg:hidden block"
                    priority
                />
            </div>
            <Image
                src="/backgrounds/hero-bottom-bg.svg"
                alt="Hero illustration showing people interacting with technology"
                width={1920}
                height={300}
                className="w-full h-auto lg:block hidden"
                priority
            />
            <Image
                src="/backgrounds/hero-bottom-bg-mobile.svg"
                alt="Hero illustration showing people interacting with technology"
                width={1920}
                height={300}
                className="w-full h-auto lg:hidden block"
                priority
            />
            <AnimatedSVG duration={1.5} className="w-[355px] lg:block hidden h-auto absolute top-0 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="355" height="537" viewBox="0 0 355 537" fill="none">
                    <g clipPath="url(#clip0_734_8821)">
                        <path d="M293.943 -31.4952C31.8717 178.139 314.525 425.87 336.204 330.555C353.624 253.965 128.182 165.973 51.5821 396.421C27.917 467.616 -20.9566 541.294 -125.624 505.326C-201.546 479.236 -272.445 371.265 -272.991 316.631" stroke="#A9AFFB" strokeWidth="15" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_734_8821">
                            <rect width="355" height="537" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </AnimatedSVG>
            <AnimatedSVG duration={1.5} className="w-[358px] lg:block hidden h-auto absolute top-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="358" height="676" viewBox="0 0 358 676" fill="none">
                    <g clipPath="url(#clip0_734_8822)">
                        <path d="M392.798 738.042C292.653 422.582 -5.926 464.211 62.5578 541.811C94.5 578.004 265.5 486.504 189.5 334.504C139.563 234.63 263.503 200.116 296.5 138.004C390 -37.9956 168.601 -99.2198 222.5 -76.4956" stroke="#F4BDFC" strokeWidth="15" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_734_8822">
                            <rect width="358" height="676" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </AnimatedSVG>
            {/* <Image
                src="/images/line-1.svg"
                alt="Line illustration"
                width={355}
                height={537}
                className="w-[355px] lg:block hidden h-auto absolute top-0 left-0"
                priority
            /> */}
            {/* <Image
                src="/images/line-2.svg"
                alt="Line illustration"
                width={358}
                height={676}
                className="w-[358px] lg:block hidden h-auto absolute top-0 right-0"
                priority
            /> */}
        </main>
    );
}

export default Hero;