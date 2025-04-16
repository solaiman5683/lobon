import Image from "next/image";
import Link from "next/link";

export const JoinUs = () => <div>
    <div className="w-[515px] mx-auto text-center justify-start text-lime-950 text-xl font-medium font-sl leading-loose">আপনার যদি কোনো প্রশ্ন থাকে, তাহলে নির্দ্বিধায় আমাদের কমিউনিটিতে জিজ্ঞাসা করতে পারেন।</div>
    <div className="flex flex-col items-center mt-10">
        <h4 className="text-[#1D3200] text-xl font-semibold leading-normal">জয়েন  করুন</h4>

        <div className="flex items-center gap-5 mt-3">
            <Link href='https://www.facebook.com/share/g/18qCr3b2zo/' target="_blank">
                <Image src="/icons/fb-group.svg" width={44} height={44} alt="Facebook" />
            </Link>
            <Link href='https://discord.gg/6bWH7sY2' target="_blank">
                <Image src="/icons/discord.svg" width={44} height={44} alt="discord" />
            </Link>
        </div>
    </div>
</div>