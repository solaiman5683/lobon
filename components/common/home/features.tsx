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
        icon: <Icons.centralStrategy className="w-10 h-10 " />,
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
        <div className="bg-[#0A221F] py-12 lg:py-32 px-4 lg:px-0">
            <div className="mx-auto max-w-5xl flex flex-col justify-center items-center">
                <div className=" flex flex-col gap-5 max-w-[579px]">
                    <h2 className="text-center justify-start text-white lg:text-5xl text-3xl font-medium lg:leading-[55px]">
                        কেন এটিকে ওপেন-সোর্স বলা হচ্ছে?
                    </h2>
                    <p className="p1 text-center text-white mb-[70px] mx-auto">
                        সবার জন্য সমান সুযোগ তৈরি করা, যেখানে কাজ, অবদান, এবং সমস্যার সমাধানের দক্ষতা হয়ে ওঠে নেতৃত্বের একমাত্র মানদণ্ড।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 w-[300px] lg:w-full">
                    {openSourceReasons.map((item, index) =>
                    {
                        return (
                            <div
                                className="bg-[#EDF4E3] rounded-lg py-8 px-5 relative mb-[35px]"
                                key={index}
                            >
                                <div className="p-1 absolute -top-[25px] left-[50%] translate-x-[-50%] border border-[#9FE870]  rounded-[12px] bg-[#9FE870] flex items-center justify-center text-[#1a2e05]">
                                    {/* <Icons.digitalFirst className="w-10 h-10 " /> */}
                                    {item.icon}
                                </div>
                                <div className="flex flex-col items-center mt-6">
                                    <h4 className="text-center justify-start text-[#1D3200] text-2xl font-semibold leading-loose">
                                        {item.title}
                                    </h4>

                                    <p className="p-card text-center text-[#1D3200]">
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
