import Image from "next/image";
import Link from "next/link";
import { JoinUs } from "../platform/_components/join-us";
import Hero from "./_components/hero";


export default function PlatformPage()
{
    return (
        <div className="bg-[#EDF4E3]">
            <Hero />
            <div className="container py-12 lg:space-y-20 space-y-6">
                <Image src="/images/wireframe.png" width={1920} height={1080} alt="Wireframe" className="w-full h-auto" />
                <div className="space-y-6">
                    <p className="font-noto-sans font-medium lg:text-[22px] text-base leading-relaxed lg:leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
                        আমরা ইতিমধ্যে MVP (Minimum Viable Product) মাথায় রেখে ডেভেলপমেন্ট শুরু করেছি, যেখানে ক্রেডিট ইকোনমি এবং এন্টারপ্রাইজ-গ্রেড কমিউনিকেশন সিস্টেম (যেমন: Discord, Slack)–এর আলোকে কাজ চলছে। সময়ের সঙ্গে সঙ্গে আমাদের বাকি ফিচারগুলো ধাপে ধাপে প্রকাশিত হবে। আপনি যদি এই যাত্রায় অংশ নিতে চান বা অবদান রাখতে চান, তাহলে আমাদের Discord-এ যোগ দিন!
                    </p>
                    <div className="w-[200px] mx-auto space-y-6">
                        <Link href='https://discord.gg/6bWH7sY2' target="_blank" className="flex items-center justify-center bg-[#86CD58] hover:bg-[#1D3200] hover:text-[#86CD58] text-[#1D3200] text-lg font-semibold py-3 px-5 rounded-full transition-all duration-300 ease-in-out">
                            Discord-এ যোগ দিন
                        </Link>
                        <Link href='/platform' className="flex items-center justify-center bg-transparent border-2 border-[#1D3200] hover:bg-[#1D3200] text-[#1D3200] hover:text-[#86CD58] text-lg font-semibold py-3 px-5 rounded-full transition-all duration-300 ease-in-out">
                            প্ল্যাটফর্ম সম্পর্কে জানুন
                        </Link>
                    </div>
                </div>


                <div className="flex justify-center items-center px-4 lg:px-0">
                    <div className="max-w-[863px] lg:p-20 px-6 py-10 bg-[#434C39] rounded-lg space-y-5">
                        <h4 className="text-center text-white lg:text-5xl text-3xl font-medium lg:leading-[55px]">
                            আমাদের কমিনিউট জয়েন করুন
                        </h4>

                        <div className="space-y-[30px] lg:pr-8">
                            <div className="flex flex-col items-center">
                                <h4 className="text-white text-xl font-semibold leading-normal">জয়েন  করুন</h4>

                                <div className="flex items-center gap-5 mt-3">
                                    <Link href='https://www.facebook.com/share/g/18qCr3b2zo/' target="_blank">
                                        <Image src="/icons/fb-group.svg" width={44} height={44} alt="Facebook" />
                                    </Link>
                                    <Link href='https://discord.gg/6bWH7sY2' target="_blank">
                                        <Image src="/icons/discord.svg" width={44} height={44} alt="discord" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-white text-xl font-semibold leading-normal">ফলো করুন</h4>

                                <div className="flex items-center gap-5 mt-3">
                                    <Link href='https://www.facebook.com/people/Lobon/61572394924176/' target="_blank">
                                        <Image src="/icons/facebook.svg" width={44} height={44} alt="Facebook" />
                                    </Link>
                                    {/* <Link href='/'>
                                    <Image src="/icons/twitter-light.svg" width={44} height={44} alt="twitter" />
                                </Link>
                                <Link href='/'>
                                    <Image src="/icons/linkedin.svg" width={44} height={44} alt="linkedin" />
                                </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}