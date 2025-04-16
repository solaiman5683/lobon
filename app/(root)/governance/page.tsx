import Image from "next/image";
import { JoinUs } from "../platform/_components/join-us";
import Hero from "./_components/hero";


export default function PlatformPage()
{
    return (
        <div className="bg-[#EDF4E3]">
            <Hero />
            <div className="container pb-12 lg:space-y-20 space-y-6">
                <Image src="/images/governance.svg" width={900} height={714} alt="Our Governance" className="max-w-[900px] mx-auto h-auto" />
                <div className="space-y-6">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto text-center leading-tight">
                        প্রশাসনিক কাঠামো
                    </h2>

                    <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                        আমরা যদি স্ট্রাকচারের ভেতর দিয়ে Deep State লেভেলে আমাদের পার্টি ম্যানেজ করতে চাই, তাহলে আগে বুঝতে হবে অ্যাডমিনিস্ট্রেশন কীভাবে কাজ করে। এইটা মাথায় রেখেই আমরা আমাদের পার্টির অ্যাডমিনিস্ট্রেশনটা গড়ে তুললাম। এর উপর ভিত্তি করেই আমাদের মেম্বাররা অ্যাডমিনিস্ট্রেটিভ র‍্যাঙ্ক পাবে পার্টির ভেতরে।
                    </p>
                    <Image src="/images/governance-map.svg" width={1920} height={1080} alt="Our Governance" className="w-full h-auto" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto text-center leading-tight">
                        ব্যাজ ব্যাখ্যা
                    </h2>

                    <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                        অ্যাডমিনিস্ট্রেটিভ পজিশনের উপর ভিত্তি করে আমাদের সদস্যরা তাদের র‍্যাঙ্ক অনুযায়ী ব্যাজ পাবে। এই ব্যাজগুলোর মাধ্যমে আলাদা পরিচয় প্রকাশ পাবে, যেটা দেখে অন্য মেম্বাররা বুঝতে পারবে কে কোন পজিশনে আছে। এই পরিচয়ের উপর ভিত্তি করেই প্রয়োজন অনুযায়ী কমিউনিকেশন হবে।
                    </p>
                    <Image src="/images/badge-explain.svg" width={900} height={714} alt="Our Governance" className="max-w-[900px] mx-auto h-auto" />
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-[920px] mx-auto">
                    <div className="w-full space-y-6">
                        <h2 className="text-[rgb(29,50,0)] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                            ক্রেডিট ব্যাখ্যা
                        </h2>
                        <p className="font-noto-sans font-medium lg:text-xl text-base leading-relaxed lg:leading-[33px] text-[#1D3200]">
                            আমাদের অ্যাডমিনিস্ট্রেটিভ প্রতিটি পজিশনের জন্য, আমরা ভোটিং-এর মাধ্যমে এরিয়া ভিত্তিতে নির্বাচন করি। এখন কেউ যদি কোনো স্পেসিফিক এরিয়াতে কাউকে লিডার হিসেবে নির্বাচন করতে চায়, তখন প্রশ্ন আসে কে হবে সেই লিডার? সেই জায়গাতেই দরকার হয় ইলেকশন ক্রেডিট (EC)।

                            <br />
                            <br />
                            ভাবো, ধরো, আপনি বা আমরা কেউ যদি লিডার হতে চাই, তাহলে আমাদের পার্টির হয়ে কাজ করতে হবে এবং সেই কাজগুলোর প্রমাণ আমাদের প্ল্যাটফর্মে পোস্ট করতে হবে।
                            <br />
                            <br />
                            আপনার এরিয়ার মেম্বাররা আপনার কাজের মূল্যায়নের উপর ভিত্তি করে আপনাকে ক্রেডিট ডোনেট করবে। এই ক্রেডিটগুলোই আপনার প্রোফাইলে জমা হবে EC (Election Credit) হিসেবে।
                            <br />
                            <br />
                            আপনি যদি আপনার এরিয়াতে টপ ৫ EC অর্জনকারী হন, তাহলে আপনি নির্বাচনের জন্য মনোনয়ন পেতে পারেন। এবং শেষ পর্যন্ত— আপনি লিডার হবেন কি না, সেটা একমাত্র আপনার এরিয়ার মেম্বাররা ভোটিং-এর মাধ্যমে ঠিক করবে।
                        </p>
                    </div>
                    <div>
                        <Image src="/images/governance-phone.png" width={448} height={853} alt="Our Governance" className="w-full h-auto" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                    <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
                        <Image src="/icons/donate-credit.png" width={48} height={48} alt="Our Governance" />
                        <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Donate Credit</h4>
                        <p className="max-w-72 text-center justify-start text-white text-base font-medium leading-normal">প্রতিটি মেম্বার তাদের ব্যালেন্সে প্রতি মাসে ৭৫ করে ডিসি পাবে, যা তারা  অন্য মেম্বারদের কার্যকলাপের উপর ভিত্তি করে প্ল্যাটফর্মের ডোনেট করতে পারবে।</p>
                    </div>
                    <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
                        <Image src="/icons/election-credit.png" width={48} height={48} alt="Our Governance" />
                        <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Election Credit</h4>
                        <p className="max-w-72 text-center justify-start text-white text-base font-medium leading-normal">প্রতিটি মেম্বার তাদের প্ল্যাটফর্ম কন্ট্রিবিউশনের মাধ্যমে অন্য মেম্বারের থেকে EC আর্ন করতে পারবে। এই নাম্বারটি প্লাটফর্ম ইলেকশনের টার্ম এর পর রিসেট হয়ে যাবে।</p>
                    </div>
                    <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
                        <Image src="/icons/lifetime-credit.png" width={48} height={48} alt="Our Governance" />
                        <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Lifetime Credit</h4>
                        <p className="max-w-72 text-center justify-start text-white p-card">
                            প্রতি ৭৫ EC আর্নিংয়ের মাধ্যমে, ১ LC মেম্বাররা আর্ন করতে পারবে। যা কখনো রিসেট হবে না। এই ইসি ইলেকশন পার্টিসিপেশনের জন্য টপ হতে র‍্যাংকিংয়ে সাহায্য করবে।
                        </p>
                    </div>
                </div>

                <JoinUs />
            </div>

        </div>
    )
}