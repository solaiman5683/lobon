import Image from "next/image";

export default function Stepper({ step }: { step: number })
{
    return (
        <div className="sticky top-24 bg-[#213733] p-4 rounded-[10px] space-y-4">
            <p className="text-white text-base font-semibold font-inter leading-normal tracking-tight">
                Pick a category
            </p>

            <div className="flex flex-col items-center">
                <div className="bg-white/20 px-4 py-2.5 flex items-center w-full rounded-[10px] cursor-pointer gap-2">
                    <Image src="/icons/g-info.svg" alt="General Info" width={24} height={24} />
                    <p className="text-white text-sm font-normal font-inter leading-snug tracking-tight">
                        সাধারন ইনফরমেশন
                    </p>
                </div>
                <div className="w-1 h-10 bg-[#C8FF7D]" />
                <div className="bg-white/20 px-4 py-2.5 flex items-center w-full rounded-[10px] cursor-pointer gap-2"
                    style={{
                        opacity: step > 0 ? 1 : 0.5,
                        pointerEvents: step > 0 ? 'auto' : 'none',
                    }}
                >
                    <Image src="/icons/nid-upload.svg" alt="General Info" width={24} height={24} />
                    <p className="text-white text-sm font-normal font-inter leading-snug tracking-tight">
                        NID আপলোড
                    </p>
                </div>
                <div style={{
                    opacity: step > 0 ? 1 : 0.5,
                    pointerEvents: step > 0 ? 'auto' : 'none',
                }} className="w-1 h-10 bg-[#C8FF7D]" />
                <div style={{
                    opacity: step > 1 ? 1 : 0.5,
                    pointerEvents: step > 1 ? 'auto' : 'none',
                }} className="bg-white/20 px-4 py-2.5 flex items-center w-full rounded-[10px] cursor-pointer gap-2">
                    <Image src="/icons/sign.svg" alt="General Info" width={24} height={24} />
                    <p className="text-white text-sm font-normal font-inter leading-snug tracking-tight">
                        স্বাক্ষর
                    </p>
                </div>
                <Image style={{
                    opacity: step > 1 ? 1 : 0.5,
                }} src="/icons/down-arrow.svg" alt="Down Arrow" width={24} height={38.66} className="h-[38.66px] w-auto" />
                <div className="bg-[#1D3200] opacity-50 pointer-events-none px-4 py-2.5 flex items-center justify-center w-full rounded-[10px] cursor-pointer gap-2">
                    <p className="text-[#C8FF7D] text-sm text-center font-normal font-inter leading-snug tracking-tight">
                        🥳 LOBON Member 🥳
                    </p>
                </div>
            </div>
        </div>
    )
}
