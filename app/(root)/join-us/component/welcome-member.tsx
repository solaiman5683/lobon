import Image from "next/image";
import Link from "next/link";

export default function WelcomeMember({ name }: { name: string })
{
    return (
        <div>
            <p className="text-center text-white text-xl font-medium font-sl leading-loose">
                🎉  স্বাগতম, “{name}”!  🎉
                {/* <br /> */}
                <br />
                🌱 আপনি এখন LOBON পরিবারের একজন বিশেষ অংশ হতে চলেছেন। 🌱
                <br />
                আপনার আবেদন আমরা সফলভাবে পেয়েছি এবং আমাদের অ্যাডমিন টিম খুব শীঘ্রই তা পর্যালোচনা (Review) করবে।
                <br />
                <br />
                আমাদের ওপর বিশ্বাস রাখার জন্য ধন্যবাদ। 🤝 আপনার যদি কোনো প্রশ্ন থাকে, তাহলে নির্দ্বিধায় আমাদের কমিউনিটিতে জিজ্ঞাসা করতে পারেন।
            </p>
            <div className="flex flex-col items-center mt-10">
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
        </div>
    )
}
