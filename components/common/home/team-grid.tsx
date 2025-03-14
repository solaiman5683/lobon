import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TeamGrid()
{
    // Top row with different photos
    const topRowPhotos = Array(84).fill("");

    return (
        <div className="max-w-7xl mx-auto px-4 lg:py-32 py-12 space-y-6">
            {/* Bengali Title */}
            <h2 className="max-w-[531px] mx-auto text-center text-[#1d3200] lg:text-[50px] text-3xl font-medium lg:leading-[55px]">আমরা সবাই রাজা আমাদের এই রাজার রাজত্বে</h2>

            <div className="relative">
                {/* Top row with different photos */}
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-4">
                    {topRowPhotos.map((_, index) => (
                        <div key={`top-${index}`} className="aspect-square relative">
                            <Image
                                src={`https://i.pravatar.cc/200?img=${Math.floor(Math.random() * 70)}`}
                                alt={`Profile ${index + 1}`}
                                fill
                                className="object-cover rounded-md"
                                priority
                            />
                        </div>
                    ))}
                </div>


                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[#EDF4E3] w-full h-[60%]" />

                {/* Online count and button - positioned on top with high z-index */}
            </div>
            <div className="relative z-10 text-center mt-8 space-y-4">
                <p className="text-center text-[#1d3200] text-3xl font-semibold leading-[33px]">633 অন্যান্য</p>
                <Button className="bg-[#86cd58] hover:bg-[#88d157] text-black text-lg font-semibold leading-normal rounded-full px-8">
                    জয়েন করুন
                </Button>
            </div>
        </div>
    );
}
