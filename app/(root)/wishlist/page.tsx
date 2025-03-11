'use client';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./component/map"), { ssr: false });


export default function PlatformPage()
{
    return (
        <div className="bg-[#EDF4E3]">
            <div className="container relative pt-[128px] py-12 space-y-8">
                <h2 className="text-[#1d3200] text-center text-[45px] font-semibold  leading-[49.50px]">মোট যোগ দিয়েছে - <span className="text-[#ff3968]">২,০৪৫</span> জন</h2>

                <div className="flex justify-center items-center">
                    <button className="px-5 py-2.5 bg-[#86cd58] rounded-lg text-center justify-center text-[#1d3200] text-lg font-semibold leading-tight">🔥 লাস্ট ২৪ ঘণ্টায় মোট যোগ দিয়েছে - ৪৮৫ জন 🔥</button>
                </div>

                <div className="flex justify-center">
                    <Map />
                </div>
            </div>
        </div>
    )
}
