import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/hero";
import { JoinUs } from "./_components/join-us";
import Platforms from "./_components/platforms";


export default function PlatformPage()
{
    return (
        <div className="bg-[#EDF4E3]">
            <Hero />
            <div className="container pb-12">
                <Platforms />
                <Image src="/images/platform-page.png" alt="platform-page" width={1920} height={1080} className="w-full h-auto" />
                <h2 className="mt-16 mb-6 text-center text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
                    আমাদের প্ল্যাটফর্মে কী কী থাকবে?
                </h2>
                <p className="font-sl font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200] mb-8">
                    এখানে আমরা আমাদের প্ল্যাটফর্মের পুরো আর্কিটেকচার দাঁড় করিয়েছি, যেখানে আমরা শুধু একটি রাজনৈতিক দলের মতো নিজেকে গড়ে তুলছি না, বরং এটি হবে একটি সামাজিক প্ল্যাটফর্ম যার মাধ্যমে অনেক সামাজিক সমস্যা ডিজিটালি সমাধান করা যাবে।
                </p>
                <Image src="/images/platform-map.svg" alt="platform-map" width={1920} height={1080} className="w-full h-auto" />

                <div className="space-y-6 lg:mb-20 mb-8">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl leading-tight">
                        Reporting
                    </h2>
                    <p className="font-sl font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] max-w-3xl text-[#1D3200] mb-8">
                        আমরা নিজেদের শুধুমাত্র একটি রাজনৈতিক দল হিসেবে পরিচিত করতে চাই না। আমরা চাই—সামাজিক কর্মকাণ্ডের মাধ্যমে নিজেদের আলাদাভাবে প্রমাণ করতে। আমাদের উদ্দেশ্য, সমাজের বাস্তব সমস্যাগুলোর সমাধান করা। এই কাজটা একা কারো পক্ষে সম্ভব নয় এটা একটা টিমওয়ার্ক, যেখানে সক্রিয়ভাবে অংশ নেবে আমাদের সদস্যরা। যারা এই কাজে অংশগ্রহণ করবে, তারা আমাদের প্ল্যাটফর্ম থেকেই EC (Election Credit) অর্জন করতে পারবে। এই EC-এর ভিত্তিতে তারা নিজেদের র‍্যাঙ্ক উন্নীত করতে পারবে এবং ভবিষ্যতে লোকাল লিডারশিপ নির্বাচনগুলোতে অংশ নেওয়ার সুযোগ পাবে।
                    </p>
                    <Image src="/images/reporting.png" alt="Reporting" width={1920} height={1080} className="w-full h-auto" />
                </div>
                <div className="space-y-6 lg:mb-20 mb-8">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl leading-tight">
                        Governance
                    </h2>
                    <p className="font-sl font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] max-w-3xl text-[#1D3200] mb-8">
                        আমরা আমাদের ইন্টারনাল গভার্নেন্স সিস্টেমের মাধ্যমে নির্বাচনসহ সব কার্যক্রম পরিচালনা করবো। এই সিস্টেমের মাধ্যমে আমাদের লিডার সিলেকশন প্রসেস হবে ১০০% ওপেন ও ট্রান্সপারেন্ট। কে কত ভোট পেয়েছে, তা যে কেউ চেক করতে পারবে সবকিছু থাকবে সবার জন্য দৃশ্যমান ও যাচাইযোগ্য।
                    </p>
                    <Image src="/images/governance.png" alt="Governance" width={1920} height={1080} className="w-full h-auto" />
                </div>
                <div className="space-y-6 lg:mb-20 mb-8">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl leading-tight">
                        Communication
                    </h2>
                    <p className="font-sl font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] max-w-3xl text-[#1D3200] mb-8">
                        বর্তমানে আমরা সবাই মিলিসেকেন্ডের মধ্যে হোয়াটসঅ্যাপ, মেসেঞ্জার, জুম ইত্যাদির মাধ্যমে পরস্পরের সঙ্গে যোগাযোগ করতে পারি। কিন্তু যখন আমরা বিস্তৃত পরিসরে, গভীর পর্যায়ের কাঠামোয় লক্ষ লক্ষ ব্যবহারকারী পরিচালনা করবো, তখন প্রয়োজন হবে আমাদের নিজস্ব যোগাযোগব্যবস্থা। এই যোগাযোগব্যবস্থাটি এমনভাবে তৈরি করা হবে, যেখানে অবস্থানভিত্তিক ও সমস্যাভিত্তিক প্রতিটি চ্যানেল আলাদা থাকবে যার ফলে আমাদের সারাদেশজুড়ে পরিচালনাগুলো আরও নিরবিচারে, বিস্তৃতভাবে এবং কার্যকরভাবে সম্পন্ন করা যাবে।
                    </p>
                    <Image src="/images/communication.png" alt="Communication" width={1920} height={1080} className="w-full h-auto" />
                </div>
                <div className="space-y-6 lg:mb-20 mb-8">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl leading-tight">
                        Member Profiling
                    </h2>
                    <p className="font-sl font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] max-w-3xl text-[#1D3200] mb-8">
                        আমরা চেষ্টা করছি আমাদের মেম্বার প্রোফাইলিংকে গ্লোবাল স্ট্যান্ডার্ড-এ রাখতে। এখানে সদস্যরা শুধু রাজনীতিবিদ হিসেবে নয়, বরং নিজেদের প্রফেশনাল ও পার্সোনাল দিক থেকেও উপস্থাপন করতে পারবে। এই সিস্টেমের মাধ্যমে কেউ চাইলে নিজের দক্ষতা, অভিজ্ঞতা এবং কাজগুলো এমনভাবে শেয়ার করতে পারবে যেটা নতুন প্রজন্মকে আমাদের প্ল্যাটফর্মে যোগ দিতে আগ্রহী করে তুলবে।
                    </p>
                    <Image src="/images/member-profiling.png" alt="Member Profiling" width={1920} height={1080} className="w-full h-auto" />
                </div>
                <JoinUs />
                <div className="flex justify-center mt-6">
                    <Link href='/developer-hub' className="px-5 py-3 rounded-[120px] outline outline-2 outline-offset-[-2px] outline-[#1D3200] hover:bg-[#1D3200] text-[#1D3200] hover:text-white transition-all duration-300 ease-in-out text-lg font-semibold font-sl leading-normal">
                        ডেভেলপার-হাব সম্পর্কে জানুন
                    </Link>
                </div>
            </div>
        </div>
    )
}


