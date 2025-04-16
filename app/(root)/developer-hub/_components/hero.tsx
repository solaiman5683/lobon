import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero()
{
    return (
        <div className="container relative pt-32 flex flex-col justify-center mx-auto text-center gap-[25px] z-[2]">
            <h1 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
                কোড হবে উন্মুক্ত, নেতৃত্ব হবে গঠিত
            </h1>

            <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                আপনি যদি ডেভেলপার হন, চাইলে আমাদের ওপেন সোর্স প্ল্যাটফর্মে কন্ট্রিবিউশন করতে পারেন। এটি হতে যাচ্ছে একটি বিশাল প্ল্যাটফর্ম, যেখানে ওপেন কন্ট্রিবিউশনের মাধ্যমে আমাদের পথচলা আরও সহজ হবে। আমরা এই কোডবেইস ওপেন সোর্স করে দিয়ে গ্লোবালি নিজেদের অন্যভাবে তুলে ধরতে চাই এটা এমন একটা ধারা, যা আমাদের দলকে অন্য উচ্চতায় নিয়ে যাবে।
            </p>

        </div>
    )
}
