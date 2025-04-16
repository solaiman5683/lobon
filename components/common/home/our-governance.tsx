import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurGovernance()
{
  return (
    <div className='bg-[#fce7f3] lg:py-32 py-12'>
      <div className="max-w-5xl px-4 lg:px-0 mx-auto">
        <h4 className="text-black lg:text-5xl text-3xl font-medium lg:leading-[55px] lg:mb-5 mb-2">
          আমাদের গভার্নেন্স
        </h4>
        <p className="max-w-[580px] text-[#1D3200] p1">
          আমাদের গভর্নেন্স সিস্টেম ক্রেডিট সিস্টেমের উপর ভিত্তি করে ডিজাইন করা হবে, যেখানে ক্রেডিট নাম্বার সদস্যদের মধ্যে ডায়নামিকভাবে তাদের অবদানের ভিত্তিতে বিতরণ করা হবে।
        </p>

        <div className="flex lg:flex-row flex-col gap-10 my-[50px]">
          <div className="lg:w-[600px]">
            <Image src="/images/governance-logo.svg" width={600} height={880} alt="Our Governance" className="w-full h-auto" />
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-3 w-[300px] md:w-full mx-auto">
            <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
              <Image src="/icons/donate-credit.png" width={48} height={48} alt="Our Governance" />
              <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Donate Credit</h4>
              <p className="max-w-72 text-center justify-start text-white text-base font-medium leading-normal">প্রতিটি মেম্বার তাদের ব্যালেন্সে প্রতি মাসে ৭৫ করে ডিসি পাবে, যা তারা  অন্য মেম্বারদের কার্যকলাপের উপর ভিত্তি করে প্ল্যাটফর্মের ডোনেট করতে পারবে।</p>
            </div>
            <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
              <Image src="/icons/election-credit.png" width={48} height={48} alt="Our Governance" />
              <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Election Credit</h4>
              <p className="max-w-72 text-center justify-start text-white text-base font-medium leading-normal">প্রতিটি মেম্বার তাদের প্ল্যাটফর্ম কন্ট্রিবিউশনের মাধ্যমে অন্য মেম্বারের থেকে EC আর্ন করতে পারবে। এই নাম্বারটি প্লাটফর্ম ইলেকশনের টার্ম এর পর রিসেট হয়ে যাবে।</p>
            </div>
            <div className="bg-[#434C39] rounded-xl p-8 flex flex-col items-center w-full">
              <Image src="/icons/lifetime-credit.png" width={48} height={48} alt="Our Governance" />
              <h4 className="text-center justify-start text-white text-2xl font-semibold leading-loose">Lifetime Credit</h4>
              <p className="max-w-72 text-center justify-start text-white p-card">
                প্রতি ৭৫ EC আর্নিংয়ের মাধ্যমে, ১ LC মেম্বাররা আর্ন করতে পারবে। যা কখনো রিসেট হবে না। এই ইসি ইলেকশন পার্টিসিপেশনের জন্য টপ হতে র‍্যাংকিংয়ে সাহায্য করবে।
              </p>
            </div>
          </div>
        </div>

        <p className="max-w-[579px] justify-start text-[#1D3200] p1 mb-5">
          এই সিস্টেমের উপর ভিত্তি করে সাধারণ মেম্বাররা আমাদের ইন্টারনাল পার্টির হায়ারার্কি পজিশনগুলোতে নির্বাচনে অংশগ্রহণ করতে পারবে।
        </p>

        <Button className="bg-[#86cd58] hover:bg-[#88d157] text-black lg:text-lg font-semibold leading-normal rounded-full px-8 py-3 h-auto">
          বিস্তারিত জানুন
        </Button>
      </div>
    </div>
  )
}
