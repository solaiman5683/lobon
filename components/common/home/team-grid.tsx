import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TeamGrid()
{
    // Top row with different photos
    const topRowPhotos = Array(12).fill("/placeholder.svg");

    // Main grid with repeated photos
    const gridPhotos = Array(72).fill("/placeholder.svg");

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Bengali Title */}
            <h1 className="font-hind-siliguri font-medium text-[50px] leading-[55px] text-center tracking-[-0.01em] mb-8 text-[#1D3200]">
                আমরা সবাই রাজা আমাদের
                <br />
                এই রাজার রাজত্বে
            </h1>

            <div className="relative">
                {/* Top row with different photos */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-13 gap-2 mb-4">
                    {topRowPhotos.map((_, index) => (
                        <div key={`top-${index}`} className="aspect-square relative">
                            <Image
                                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                                alt={`Profile ${index + 1}`}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>


                {/* Gradient overlay */}
                <div className="absolute inset-0 " />

                {/* Online count and button - positioned on top with high z-index */}
                <div className="relative z-10 text-center mt-8 space-y-4">
                    <p
                        className="text-xl"
                    >
                        633 অনলাইন
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                        এখন জয়েন
                    </Button>
                </div>
            </div>
        </div>
    );
}
