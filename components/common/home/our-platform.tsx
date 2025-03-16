import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurPlatform()
{
    return (
        <div className="bg-[#0A221F] lg:py-32 py-12">
            <div className="container space-y-5">
                <h3
                    className="self-stretch justify-start text-white lg:text-5xl text-3xl font-medium leading-[55px]">
                    আমাদের প্ল্যাটফর্ম
                </h3>
                <p className="max-w-4xl lg:text-xl text-base">
                    আমরা শুধু নিজেদের রাজনৈতিক দল হিসেবে উপস্থাপন করতে চাই না। আমাদের লক্ষ্য হলো একটি বিশ্বমানের কমিউনিটি তৈরি করা, যেখানে শুধুমাত্র রাজনীতি নিয়ে কাজ করার মধ্যে সীমাবদ্ধ থাকবো না। এখানে আমরা শিখব ও কাজ করব, কীভাবে গ্লোবাল স্টার্টআপ ব্যবসা শুরু করতে হয়, প্রোডাক্ট লঞ্চ করা যায়, ইনোভেশনের পথে এগিয়ে যেতে হয় এবং গ্লোবাল ট্রেন্ডগুলোকে প্রভাবিত করতে হয়।
                    <br />
                    <br />
                    আমরা একটি এমন কমিউনিটি-ফার্স্ট প্ল্যাটফর্ম তৈরি করছি, যেখানে প্রতিটি সদস্য তাদের সময় ব্যয় করে নিজেদের মধ্যে স্বয়ংক্রিয়ভাবে ব্যক্তিগত ও পেশাগত উন্নতি ঘটাতে পারবে। এটি হবে এমন একটি প্ল্যাটফর্ম, যা একত্রিত করে রাজনীতি, ব্যবসা, ইনোভেশন এবং গ্লোবাল ট্রেন্ডের মতো গুরুত্বপূর্ণ বিষয়গুলো, এবং আমাদের সদস্যদের জন্য একটি গঠনমূলক ও ফলপ্রসূ অভিজ্ঞতা নিশ্চিত করবে।
                </p>
                <Button className="bg-[#bef264] hover:bg-[#bef264] text-black lg:text-lg font-semibold leading-normal rounded-full px-8 py-3 h-auto">
                    বিস্তারিত জানুন
                </Button>

                <Image src="/images/platform.png" width={1920} height={1080} alt="Our Platform" priority className="h-auto w-full pt-8" />
            </div>
        </div>
    )
}
