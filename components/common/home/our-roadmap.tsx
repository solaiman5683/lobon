import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurRoadmap()
{
    return (
        <div className="bg-[#F3E9F4] lg:py-32 py-12">
            <div className="container space-y-5">
                <h2 className="text-[#0A221F] lg:text-5xl text-3xl font-medium lg:leading-[55px]">আমাদের রোডম্যাপ</h2>
                <p className="max-w-xl lg:text-xl text-base font-medium font-noto-sans leading-normal text-[#0A221F]">
                    আমাদের প্ল্যাটফর্মের উন্নয়ন ধাপে ধাপে সম্পন্ন হবে। প্রতিটি ধাপ স্বচ্ছতা, অন্তর্ভুক্তি এবং কার্যকর নেতৃত্ব নিশ্চিত করার জন্য পরিকল্পিত। এখানে মূল লক্ষ্য হলো একটি টেকসই, অটোমেটিক এবং স্কেলএবল ডিপস্টেট রাজনৈতিক ব্যবস্থা গড়ে তোলা।
                </p>
                <Image src="/images/roadmap.svg" width={1200} height={3355} alt="Next Gen" priority className="h-auto w-full pt-8 pointer-events-none lg:block hidden" />
                <Image src="/images/roadmap-mobile.svg" width={1200} height={3355} alt="Next Gen" priority className="h-auto w-full pt-8 pointer-events-none lg:hidden" />

                <div className="flex justify-center">
                    <Button className="bg-[#86CD58] hover:bg-[#86CD58] text-black text-lg font-semibold leading-normal rounded-full px-8 py-3 h-auto">
                        জয়েন করুন
                    </Button>
                </div>
            </div>
        </div>
    )
}
