import Image from "next/image";
import Link from "next/link";

export default function Platforms()
{
    return (
        <div className="flex justify-center items-center py-12 gap-4">
            <Link href='/'>
                <Image src="/images/playstore.png" alt="Play Store" width={200} height={50} className="w-auto h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/appstore.png" alt="App Store" width={200} height={50} className="w-auto h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/windstore.png" alt="Windows Store" width={200} height={50} className="w-auto h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/macos.png" alt="Mac OS" width={200} height={50} className="w-auto h-auto" priority />
            </Link>
            <Link href='/'>
                <Image src="/images/linux.png" alt="Linux" width={200} height={50} className="w-auto h-auto" priority />
            </Link>
        </div>
    )
}
