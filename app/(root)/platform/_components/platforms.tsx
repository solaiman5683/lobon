import Image from "next/image";
import Link from "next/link";

export default function Platforms()
{
    return (
        <div className="flex flex-wrap justify-center items-center py-12 lg:gap-5 gap-3">
            <Link href='/' className="md:w-fit w-[45%]">
                <Image src="/images/playstore.png" alt="Play Store" width={300} height={100} className="md:h-[45px] w-full h-auto md:w-auto" priority />
            </Link>
            <Link href='/' className="md:w-fit w-[45%]">
                <Image src="/images/appstore.png" alt="App Store" width={300} height={100} className="md:h-[45px] w-full h-auto md:w-auto" priority />
            </Link>
            <Link href='/' className="md:w-fit w-[45%]">
                <Image src="/images/windstore.png" alt="Windows Store" width={300} height={100} className="md:h-[45px] w-full h-auto md:w-auto" priority />
            </Link>
            <Link href='/' className="md:w-fit w-[45%]">
                <Image src="/images/macos.png" alt="Mac OS" width={300} height={100} className="md:h-[45px] w-full h-auto md:w-auto" priority />
            </Link>
            <Link href='/' className="md:w-fit w-[45%]">
                <Image src="/images/linux.png" alt="Linux" width={300} height={100} className="md:h-[45px] w-full h-auto md:w-auto" priority />
            </Link>
        </div>
    )
}
