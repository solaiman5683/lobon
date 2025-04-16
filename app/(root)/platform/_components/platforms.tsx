import Image from "next/image";
import Link from "next/link";

export default function Platforms()
{
    return (
        <div className="grid lg:grid-cols-5 grid-cols-2 justify-center items-center py-12 gap-4">
            <Link href='/'>
                <Image src="/images/playstore.png" alt="Play Store" width={300} height={100} className="w-[200px] h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/appstore.png" alt="App Store" width={300} height={100} className="w-[200px] h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/windstore.png" alt="Windows Store" width={300} height={100} className="w-[200px] h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/macos.png" alt="Mac OS" width={300} height={100} className="w-[200px] h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/linux.png" alt="Linux" width={300} height={100} className="w-[200px] h-auto" priority />
            </Link>
        </div>
    )
}
