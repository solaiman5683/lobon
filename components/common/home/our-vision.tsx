import { Icons } from '@/components/icons'
import Image from 'next/image'
import SVGLineView from './svg-line'

export default function OurVision()
{
  return (
    <div className="bg-[#EDF4E3] py-32">
      <div className="mx-auto max-w-5xl">
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
            <p className="font-noto-sans font-medium text-2xl leading-[36px] text-[#1a2e05]">
              &quot; <span className='text-[#84cc16]'>বাংলাদেশ ২.০</span> &quot; আমাদের জন্য আগাম প্রজন্ম। এটি বৈরাচার সমাজ থেকে
              মুক্তি এবং উন্নয়ন ভবিষ্যতের স্বপ্ন দেখার সাহস এনে দিয়েছিল। সাথিত
              এটি সময়ে টিকিয়ে রাখতে সক্ষম ছিল, কারই টিকনিক্যালের অভাব ছিলা
              তবুও এটি ডিজিটাল চিন্তা করার সাহস জুগিয়েছে এবং এখন স্বপ্ন দেখার
              সুযোগ তৈরি করেছে।
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/icons/vision-side.svg"
              alt="Illustration"
              width={363}
              height={363}
              className="object-contain"
            />
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
            <h3 className="font-trb font-normal italic text-[34px] leading-[30px] tracking-[0%] ">
              শক্তি:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[330px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  চাপ ও দমন থেকে মুক্তির সাহস জুগিয়েছে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[330px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  বড় স্বপ্ন দেখার এবং ভিন্নভাবে চিন্তা করার মানসিকতা তৈরি করেছে।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCheckLight className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[330px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  অনুপ্রেরণা জুগিয়েছে এবং পরিবর্তনের জন্য মানুষকে একত্রিত করেছে।
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-trb font-normal italic text-[34px] leading-[30px] tracking-[0%] text-[#FD9C02]">
              দুর্বলতা:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px] p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[270px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  কার্যকর এবং স্পষ্ট পরিকল্পনার অভাব।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[300px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  একটি দীর্ঘমেয়াদি রোডম্যাপ তৈরি করতে ব্যর্থ।
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.fillCrossOrange className="w-[34.29px] h-[34.29px] rounded-[8.57px]  p-[2.86px] text-[#9FE870]" />
                <span className="max-w-[420px] font-hind-siliguri font-semibold text-[24px] leading-[30px] tracking-[0%]">
                  ধারণা ভালো হলেও বাস্তবায়নের কোনো দৃঢ় কাঠামো ছিল না।
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SVGLineView className="w-full h-auto -mt-20 -mb-72" />
    </div>
  )
}
