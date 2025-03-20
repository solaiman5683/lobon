'use client';
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

async function getFromNocoDB()
{

    const options = {
        method: "GET",
        url: "https://crm.lobon.org/api/v2/tables/mezkublc4xdsf3h/records",
        headers: {
            "xc-token": "rLTPoRJbaJCawC-KdapuQj42liIhINFJLC5BgFVT",
            "Content-Type": "application/json",
        },
        params: {
            fields: "Id,Name,Country,District,CreatedAt",
            offset: 0,
            limit: 1,
        },
    };

    try {
        const response = await axios.request(options);
        return {
            ...response.data,
        };
    } catch (error: any) {
        console.error(
            "Error fetching from NocoDB:",
            error?.response ? error?.response?.data : error?.message
        );
        throw error;
    }
}

export default function TeamGrid()
{
    const { data: records } = useQuery({
        queryKey: ["usersData"],
        queryFn: getFromNocoDB,
    });
    return (
        <div className="max-w-7xl mx-auto px-4 lg:py-32 py-12 space-y-6">
            {/* Bengali Title */}
            <h2 className="max-w-[531px] mx-auto text-center text-[#1d3200] lg:text-[50px] text-3xl font-medium lg:leading-[55px]">আসছে ফাগুন, <br className="lg:hidden" /> আমরা <br className="lg:block hidden" /> হবো দ্বিগুণ</h2>

            <div className="relative">
                {/* Top row with different photos */}
                <div className="lg:-mb-12 pointer-events-none">
                    <Image src="/images/team.png" alt="Team members" width={1988} height={1178} className="rounded-lg w-full lg:block hidden" />
                    <Image src="/images/team-mobile.png" alt="Team members" width={1988} height={1178} className="rounded-lg w-full lg:hidden" />
                </div>


                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[#EDF4E3] w-full h-[60%]" />

                {/* Online count and button - positioned on top with high z-index */}
            </div>
            <div className="relative z-10 text-center mt-8 space-y-4">
                <p className="text-center text-[#1d3200] text-3xl font-semibold leading-[33px]">{Math.max((records?.pageInfo?.totalRows || 0), 22)} অন্যান্য</p>
                <Link href="/wishlist" className="inline-block">
                    <Button className="bg-[#86cd58] hover:bg-[#88d157] text-black text-lg font-semibold leading-normal rounded-full px-8">
                        জয়েন করুন
                    </Button>
                </Link>
            </div>
        </div>
    );
}
