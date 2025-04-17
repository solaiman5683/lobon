import Image from "next/image";

export default function Stepper({ step }: { step: number })
{
    return (
        <div className="sticky lg:top-24 top-2 z-10 bg-[#213733] p-4 rounded-[10px] lg:space-y-4">
            <p className="md:block hidden text-white text-base font-semibold font-inter leading-normal tracking-tight">
                Pick a category
            </p>

            <div className="flex lg:flex-col flex-row items-center">
                <div className="lg:bg-white/20 lg:px-4 lg:py-2.5 flex lg:flex-row flex-col text-center lg:text-left items-center w-full rounded-[10px] cursor-pointer gap-2">
                    <Image src="/icons/g-info.svg" alt="General Info" width={24} height={24} />
                    <p className="text-white text-sm font-normal font-inter leading-snug tracking-tight">
                        সাধারন ইনফরমেশন
                    </p>
                </div>
                <div className="min-w-max">
                    <div className="lg:w-1 lg:h-10 h-0.5 w-16 bg-[#C8FF7D]" />
                </div>
                <div className="lg:bg-white/20 lg:px-4 lg:py-2.5 flex lg:flex-row flex-col text-center lg:text-left items-center w-full rounded-[10px] cursor-pointer gap-2"
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
                <div className="min-w-max">
                    <Image style={{
                        opacity: step > 1 ? 1 : 0.5,
                    }} src="/icons/right-arrow.svg" alt="Right Arrow" width={24} height={38.66} className="w-[66.73px] h-auto lg:hidden" />
                </div>
                <div style={{
                    opacity: step > 0 ? 1 : 0.5,
                    pointerEvents: step > 0 ? 'auto' : 'none',
                }} className="lg:w-1 lg:h-10 h-1 w-16 lg:block hidden bg-[#C8FF7D]" />
                <div style={{
                    opacity: step > 1 ? 1 : 0.5,
                    pointerEvents: step > 1 ? 'auto' : 'none',
                }} className="lg:bg-white/20 lg:px-4 lg:py-2.5 flex lg:flex-row flex-col text-center lg:text-left items-center w-full rounded-[10px] cursor-pointer gap-2">
                    <Image src="/icons/sign.svg" alt="General Info" width={24} height={24} />
                    <p className="text-white text-sm font-normal font-inter leading-snug tracking-tight">
                        স্বাক্ষর
                    </p>
                </div>
                <Image style={{
                    opacity: step > 1 ? 1 : 0.5,
                }} src="/icons/down-arrow.svg" alt="Down Arrow" width={24} height={38.66} className="h-[38.66px] w-auto lg:block hidden" />
                <div className="lg:flex hidden bg-[#1D3200] opacity-50 pointer-events-none px-4 py-2.5 items-center justify-center w-full rounded-[10px] cursor-pointer gap-2">
                    <p className="text-[#C8FF7D] text-sm text-center font-normal font-inter leading-snug tracking-tight">
                        🥳 LOBON Member 🥳
                    </p>
                </div>
            </div>
        </div>
    )
}
