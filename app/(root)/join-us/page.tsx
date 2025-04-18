'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import JoinForm from "./component/join-form";

const Map = dynamic(() => import("./component/map"), { ssr: false });

async function getFromNocoDB()
{
    try {
        const response = await axios.get('/api/get-records'); // Call the Next.js API route
        return response.data;
    } catch (error: any) {
        console.error(
            'Error fetching from custom endpoint:',
            error?.response ? error?.response?.data : error?.message
        );
        throw error;
    }
}


export default function PlatformPage()
{
    const { data: records, error, isLoading } = useQuery({
        queryKey: ["usersData"],
        queryFn: getFromNocoDB,
    });
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (20 - 10 + 1)) + 10);


    return (
        <div className="bg-[#EDF4E3]">
            <div className="container relative pt-[128px] py-12 space-y-8">
                <h2 className="text-[#1d3200] text-center lg:text-[45px] text-2xl font-semibold  leading-[49.50px]">মোট যোগ দিয়েছে  -  <span className="text-[#ff3968]">{Math.max((records?.pageInfo?.totalRows || 0), 22)}</span> জন</h2>

                <div className="flex justify-center items-center">
                    <button className="px-4 py-2.5 bg-[#86cd58] rounded-lg text-center justify-center text-[#1d3200] lg:text-lg text-sm font-semibold leading-tight">🔥 লাস্ট ২৪ ঘণ্টায় মোট যোগ দিয়েছে - {Math.max(randomNum, (records?.last24Hours?.length || 0))} জন 🔥</button>
                </div>

                <div className="flex justify-center">
                    <Map records={records} />
                </div>
            </div>
            <JoinForm />

            <div className="flex justify-center items-center lg:py-32 py-12 px-4 lg:px-0">
                <div className="max-w-[863px] lg:p-20 px-6 py-10 bg-[#434C39] rounded-lg space-y-5">
                    <h4 className="text-center text-white lg:text-5xl text-3xl font-medium lg:leading-[55px]">
                        আমাদের কমিনিউট জয়েন করুন
                    </h4>

                    <div className="space-y-[30px] lg:pr-8">
                        <div className="flex flex-col items-center">
                            <h4 className="text-white text-xl font-semibold leading-normal">জয়েন  করুন</h4>

                            <div className="flex items-center gap-5 mt-3">
                                <Link href='https://www.facebook.com/share/g/18qCr3b2zo/' target="_blank">
                                    <Image src="/icons/fb-group.svg" width={44} height={44} alt="Facebook" />
                                </Link>
                                <Link href='https://discord.gg/bNqq5kux ' target="_blank">
                                    <Image src="/icons/discord.svg" width={44} height={44} alt="discord" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-white text-xl font-semibold leading-normal">ফলো করুন</h4>

                            <div className="flex items-center gap-5 mt-3">
                                <Link href='https://www.facebook.com/people/Lobon/61572394924176/' target="_blank">
                                    <Image src="/icons/facebook.svg" width={44} height={44} alt="Facebook" />
                                </Link>
                                {/* <Link href='/'>
                                    <Image src="/icons/twitter-light.svg" width={44} height={44} alt="twitter" />
                                </Link>
                                <Link href='/'>
                                    <Image src="/icons/linkedin.svg" width={44} height={44} alt="linkedin" />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
