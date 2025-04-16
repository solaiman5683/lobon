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
                নতুন ধারার রাজনীতির জন্য নতুন প্ল্যাটফর্ম
            </h1>

            <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                বর্তমানে গ্লোবাল পলিটিক্যাল ল্যান্ডস্কেপে, বড় বড় পার্টিগুলোর জন্য সবচেয়ে বড় চ্যালেঞ্জ হচ্ছে Deep State Management। এই গভীর সমস্যাটাকে মাথায় রেখে, আমরা এমন একটা প্ল্যাটফর্ম ডিজাইন করছি যা নতুন ধারার ইনোভেটিভ ফ্রেমওয়ার্ক নিয়ে আসবে যার মাধ্যমে রাজনীতিকে নতুনভাবে ভাবা যাবে।
                <br />
                <br />
                আমরা আমাদের এই প্ল্যাটফর্মের Cross Platform অ্যাপ্লিকেশন তৈরি করছি, যা আমাদের স্কেলিবিলিটি এবং অপারেশন স্কোপকে গ্রাসরুট লেভেলে নিয়ে গিয়ে গভর্নেন্স কন্ট্রোল বাস্তবায়ন করতে পারবে।
            </p>
        </div>
    )
}
