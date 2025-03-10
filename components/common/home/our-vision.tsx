import { Icons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export default function OurVision() {
  return (
    <div className="min-h-screen bg-[#EDF4E3] p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        {/* Logo and Vision Section */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <Image
              src="/icons/vision-icon.svg"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <h2 className="font-hind-siliguri font-semibold text-[#1D3200] text-[55px] leading-[60.5px] tracking-[-0.01em]">
              আমাদের ভিশন
            </h2>
            <p className="font-noto-sans font-medium text-[24px] leading-[36px] text-gray-700">
              &quot;বাংলাদেশ ২.০&quot; আমাদের জন্য আগাম প্রজন্ম। এটি বৈরাচার সমাজ থেকে
              মুক্তি এবং উন্নয়ন ভবিষ্যতের স্বপ্ন দেখার সাহস এনে দিয়েছিল। সাথিত
              এটি সময়ে টিকিয়ে রাখতে সক্ষম ছিল, কারই টিকনিক্যালের অভাব ছিলা
              তবুও এটি ডিজিটাল চিন্তা করার সাহস জুগিয়েছে এবং এখন স্বপ্ন দেখার
              সুযোগ তৈরি করেছে।
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              <Image
                src="/icons/vision-side.svg"
                alt="Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bangladesh 2.0 Section */}
        <div className="mb-12 text-center">
          <h1 className="text-[#1D3200] font-hind-siliguri font-semibold text-[45px] leading-[49.5px] text-center tracking-[-0.01em]">
            বাংলাদেশ ২.০
          </h1>
        </div>

        {/* Two Columns Section */}
        <div className="grid gap-12 md:grid-cols-2 text-[#1D3200]">
          {/* Strengths Column */}
          <div className="space-y-6">
            <h3 className="font-tiro-bangla font-normal italic text-[34px] leading-[30px] tracking-[0%] ">
              শক্তি:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  চাপ ও দয়া থেকে মুক্তির সাহস অর্জিয়াছে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  বড় স্বপ্ন দেখার এবং ডিজিটাল চিন্তা করার সাহসে তৈরি করেছে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  জনগুরুগা অজিয়াছে এবং পরিবর্তনের জন্য সামাজিক প্রকৃতি করেছে।
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-tiro-bangla font-normal italic text-[34px] leading-[30px] tracking-[0%] text-[#FD9C02]">
              দুর্বলতা:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  কার্যকর এবং স্পষ্ট পরিকল্পনার অভাব।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  একটি দীর্ঘমেয়াদি প্রোগ্রাম তৈরি করতে হবে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  ধারণা ভালো হলেও রাজনৈতিক কোনো দৃঢ় কার্যক্রম ছিল না।
                </span>
              </li>
            </ul>
          </div>

          {/* Weaknesses Column */}
          {/* <div className="space-y-6">
            <h3 className="font-bengali text-xl font-semibold">দুর্বলতা:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 text-red-500" />
                <span className="font-bengali">
                  কার্যকর এবং স্পষ্ট পরিকল্পনার অভাব।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 text-red-500" />
                <span className="font-bengali">
                  একটি দীর্ঘমেয়াদি প্রোগ্রাম তৈরি করতে হবে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 text-red-500" />
                <span className="font-bengali">
                  ধারণা ভালো হলেও রাজনৈতিক কোনো দৃঢ় কার্যক্রম ছিল না।
                </span>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Decorative Curves */}
        {/* <div className="relative mt-12">
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-pink-100/50" />
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-pink-100/50" />
        </div> */}
      </div>
    </div>
  )
}
