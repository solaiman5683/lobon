import { Icons } from "@/components/icons";

const openSourceReasons = [
    {
        id: 1,
        icon: <Icons.digitalFirst className="w-10 h-10 " />,
        title: "ডিজিটাল ফ্রাস্ট",
        description:
            "আমাদের অ্যাপ ডাউনলোড করে সহজেই পরিচয় যাচাই করে সদস্য হতে পারেন। এটি একটি সম্পূর্ণ ডিজিটাল ফার্স্ট প্ল্যাটফর্ম, যেখানে মিটিং বা মিছিলের প্রয়োজন নেই।",
    },
    {
        id: 2,
        icon: <Icons.clearRoadmap className="w-10 h-10 " />,
        title: "স্বচ্ছ প্রক্রিয়া",
        description:
            "প্রতিটি সিদ্ধান্ত ও কার্যক্রম সবার জন্য উন্মুক্ত, যাতে গোপনীয়তা বা পক্ষপাতিত্বের কোনো জায়গা না থাকে। ",
    },
    {
        id: 3,
        icon: <Icons.donation className="w-10 h-10 " />,
        title: "অবদান-ভিত্তিক মূল্যায়ন",
        description:
            "এখানে নেতৃত্ব বা দায়িত্ব নির্ধারিত হয় আপনার কাজ, সমস্যা সমাধানের দক্ষতা এবং কমিউনিটিতে অবদান অনুযায়ী। ",
    },
    {
        id: 4,
        icon: <Icons.decentralized className="w-10 h-10 " />,
        title: "ক্ষমতার বিকেন্দ্রীকরণ",
        description:
            "এখানে ক্ষমতা কোনো নির্দিষ্ট গোষ্ঠীর হাতে কেন্দ্রীভূত নয়। বরং, এটি সবার মধ্যে ভাগ করা হয়, যাতে প্রতিটি মানুষের অবদান গুরুত্বপূর্ণ হয়। ",
    },
    {
        id: 5,
        icon: <Icons.development className="w-10 h-10 " />,
        title: "নিয়মিত আপডেট ও উন্নয়ন",
        description:
            "প্ল্যাটফর্মটি ক্রমাগত সবার অংশগ্রহণের মাধ্যমে উন্নত করা হয়, যেন এটি সময়োপযোগী এবং কার্যকর থাকে। ",
    },
    {
        id: 6,
        icon: <Icons.nuclear className="w-10 h-10 " />,
        title: "নিউক্লিয়ার পাওয়ার",
        description:
            "আমরা যখন কোনো পদক্ষেপ নেব, তা হবে নিউক্লিয়ার চেইন রিঅ্যাকশনের মতো,একটি ছোট পদক্ষেপ থেকে শুরু করে ক্রমাগত প্রতিফলিত হয়ে শক্তি ও প্রভাবের বিস্ফোরণ ঘটাবে।",
    },
];

export default function Features()
{
    return (
        <div className="bg-[#0A221F] px-4 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
                <div className=" flex flex-col gap-5 max-w-[579px]">
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white ">
                        কেন এটিকে ওপেন-সোর্স বলা হচ্ছে?
                    </h2>
                    <p className="font-noto-sans font-normal text-[18px] leading-[24px] text-center text-white mb-[70px] mx-auto">
                        সবার জন্য সমান সুযোগ তৈরি করা, যোগাযে কাজে, অবদান, এবং সফটয়্যার
                        সমাধানের দক্ষতা হয়ে ওঠে নেতৃত্বের একমাত্র মানদণ্ড।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {openSourceReasons.map((item, index) =>
                    {
                        return (
                            <div
                                className="bg-[#EDF4E3] rounded-lg py-8 px-5 relative mb-[35px]"
                                key={index}
                            >
                                <div className="p-1 absolute -top-[32px] left-[50%] translate-x-[-50%] border border-[#9FE870]  rounded-[12px] bg-[#9FE870] flex items-center justify-center">
                                    {/* <Icons.digitalFirst className="w-10 h-10 " /> */}
                                    {item.icon}
                                </div>
                                <div className="flex flex-col items-center ">
                                    <h3 className="font-hind-siliguri font-semibold text-[24px] leading-[30px] mb-3 text-[#1D3200] text-center">
                                        {item.title}
                                    </h3>
                                    <p className="font-noto-sans font-normal text-[18px] leading-[24px] text-center text-[#1D3200]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
