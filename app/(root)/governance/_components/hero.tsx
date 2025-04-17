import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero()
{
    return (
        <div className="container relative pt-32 flex flex-col justify-center mx-auto text-center gap-[25px] z-[2]">
            <div>
                <Button className=" hover:bg-[#1D3200] bg-[#1D3200] text-white font-hind-siliguri font-semibold text-[18.29px] leading-[18.29px] text-center">
                    বাংলাদেশ 3.0
                </Button>
            </div>

            <h1 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
                অবদানের মাধ্যমে নেতৃত্ব
            </h1>

            <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                আমরা, আমরা শুধু একটা ডিজিটাল প্ল্যাটফর্ম বানাচ্ছি তা না, আমাদের এখানে গভীরভাবে ক্রেডিট স্কোর ইকোনমি চালু করছি। যা পুরোপুরি স্বচ্ছ এবং যাচাইযোগ্য, যে কেউ কেন কোন র‍্যাঙ্কে আছে, সেটা একদম ক্লিয়ার।
            </p>

            <div className="mb-8">
                <Link href="/join-us">
                    <Button className="text-[#000000] hover:bg-[#86CD58] bg-[#86CD58] px-5 py-3 rounded-full font-hind-siliguri font-semibold text-[18px] leading-[24px]">
                        জয়েন করুন
                    </Button>
                </Link>
            </div>
        </div>
    )
}
