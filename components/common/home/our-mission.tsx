import { Icons } from "@/components/icons";
import Image from "next/image";

const features = [
    {
        id: 1,
        icon: Icons.technologySolution,
        title: "টেকনোলজি-  সমাধান",
        description:
            "আধুনিক প্রযুক্তিকে অগ্রাধিকার দিয়ে উন্নয়ন এবং সমস্যার সমাধান নিশ্চিত করা।",
    },
    {
        id: 2,
        icon: Icons.dataDrivenDecision,
        title: "ডেটা-ড্রিভেন সিদ্ধান্ত",
        description: "তথ্য ও গবেষণার ভিত্তিতে সিদ্ধান্ত গ্রহণ এবং সমস্যা সমাধান।",
    },
    {
        id: 3,
        icon: Icons.technologySolution,
        title: "ডিজিটাল-কেন্দ্রিক স্ট্রাটেজি",
        description:
            "অনলাইন ও অফলাইন কার্যক্রমের সমন্বয়ে একটি শক্তিশালী প্ল্যাটফর্ম তৈরি করা।    ",
    },
    {
        id: 4,
        icon: Icons.clearRoadmap,
        title: "স্বচ্ছ রোডম্যাপ",
        description:
            "সংক্ষিপ্ত ও দীর্ঘমেয়াদি লক্ষ্য নির্ধারণ এবং তা বাস্তবায়নের জন্য স্পষ্ট পরিকল্পনা।",
    },
    {
        id: 5,
        icon: Icons.aiUse,
        title: "কৃত্রিম বুদ্ধিমত্তার সর্বোচ্চ ব্যবহার",
        description:
            "প্রতিটি ক্ষেত্রে এফিশিয়েন্সি বাড়ানোর জন্য স্বয়ংক্রিয় সিদ্ধান্ত গ্রহণ, ডেটা বিশ্লেষণ, এবং রিয়েল-টাইম প্রসেসিং সক্ষম করা।",
    },
    {
        id: 6,
        icon: Icons.feedbackMecanism,
        title: "ফিডব্যাক মেকানিজম",
        description:
            "জনমত ও প্রতিক্রিয়া সংগ্রহের জন্য সহজ এবং অন্তর্ভুক্তিমূলক ব্যবস্থা।",
    },
    {
        id: 7,
        icon: Icons.multiChanelCommunication,
        title: "মাল্টি-চ্যানেল কমিউনিকেশন",
        description:
            "সামাজিক যোগাযোগ মাধ্যম, প্রচলিত মিডিয়া এবং স্থানীয় পর্যায়ের মাধ্যমে সবার কাছে বার্তা পৌঁছানো।",
    },
    {
        id: 8,
        icon: Icons.developLeadership,
        title: "নেতৃত্বের বিকাশ",
        description:
            "তরুণ নেতৃত্ব তৈরি এবং বিকেন্দ্রীভূত সিদ্ধান্ত গ্রহণের ব্যবস্থা।",
    },
    {
        id: 9,
        icon: Icons.peopleMixing,
        title: "জনসম্পৃক্ততা",
        description:
            "প্রতিটি শ্রেণির মানুষের মতামত অন্তর্ভুক্ত করে একটি অংশগ্রহণমূলক কাঠামো তৈরি।",
    },
];

export default function OurMission()
{
    return (
        <div className="min-h-screen ">
            <div className="relative container mx-auto px-4 py-12">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-12 text-[#1D3200]">
                    বাংলাদেশ ৩.০
                </h1>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#434C39] rounded-[16px] py-[30px] px-[24px] text-white shadow-lg"
                        >
                            {<feature.icon className="w-12 h-12 text-[#C8FF7D] mb-[25px]" />}
                            <p className="font-hind-siliguri mb-2 font-medium text-[24px] leading-[30px] tracking-[0%]">
                                {feature.title}
                            </p>
                            <p className="font-noto-sans font-normal text-[18px] leading-[24px] tracking-[0%]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="space-y-6">
                        <Image
                            src="/icons/rocket-icon.svg"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="h-16 w-16"
                        />
                        <h2 className="font-hind-siliguri font-semibold text-[#1D3200] text-[55px] leading-[60.5px] tracking-[-0.01em]">
                            আমাদের মিশন
                        </h2>
                        <p className="font-noto-sans font-medium text-[24px] leading-[36px] text-gray-700">
                            অনেক সময় আমরা ভিশন এবং মিশন নিয়ে বিভ্রান্ত হতে পারি। এখানে যা
                            উল্লেখ করা হয়েছে, তা হলো ভিশন, যা আমাদের দীর্ঘমেয়াদী লক্ষ্য এবং
                            সামগ্রিক দৃষ্টিভঙ্গি। মিশন হলো সেই নির্দিষ্ট উপায়, যার মাধ্যমে
                            আমরা ধাপে ধাপে সেই লক্ষ্য অর্জন করতে পারি।
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative h-48 w-48 md:h-64 md:w-64">
                            <Image
                                src="/backgrounds/mission.svg"
                                alt="Illustration"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/backgrounds/mission-flow-chart.svg"
                        alt="Logo"
                        width={1200}
                        height={800}
                        className="h-auto max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}

