import Image from "next/image";

export default function WhyUs()
{
    return (
        <section className=" min-h-screen bg-[#0A221F] lg:py-32 py-12">
            <div className=" flex flex-col gap-[30px] text-white p-6 md:p-12 max-w-4xl mx-auto">
                <article className="space-y-8 flex flex-col justify-center items-center">
                    <h2 className="max-w-[531px] text-center justify-start text-white lg:text-5xl text-3xl font-medium lg:leading-[55px]">কেনো ডিজিটাল ফ্রাস্ট <br /> রাজনৈতিক দল?</h2>

                    <p className="p1 text-center lg:text-left">
                        বাংলাদেশে বর্তমানে ১৯ কোটি মানুষের মধ্যে প্রায় ৫-৬ কোটি মানুষ ফেসবুক এবং ইউটিউব ব্যবহার করেন। এই প্ল্যাটফর্মগুলোর মাধ্যমে যেকোনো তথ্য দ্রুত ছড়িয়ে পড়ে। এই ৫ কোটি মানুষ ইতোমধ্যেই অফলাইনে থাকা বাকি ১৩-১৪ কোটি মানুষের উপর প্রভাব ফেলেন। কারণ, অনলাইনে কোনো গুরুত্বপূর্ণ বিষয় দেখার পর মানুষ তা পরিবার, বন্ধু বা প্রতিবেশীদের সাথে আলোচনা করেন, যারা হয়তো সরাসরি ডিজিটাল মাধ্যমে যুক্ত নন।
                    </p>

                    <div className="flex justify-center pointer-events-none">
                        <div className="max-w-[524px]">
                            <Image src="/images/user-ratio.png" width={524} height={524} alt="Why Us" className="w-full" />
                        </div>
                    </div>

                    <p className="p1 text-center lg:text-left">
                        জুলাই-আগস্ট মাসে স্বৈরাচার হাসিনার বিরুদ্ধে হওয়া বিক্ষোভগুলো ডিজিটাল মাধ্যমের শক্তি প্রমাণ করেছে। হত্যাকাণ্ডের ভিডিওগুলো দ্রুত ছড়িয়ে পড়ে, যা মানুষকে আন্দোলনে ঝাঁপিয়ে পড়তে উদ্বুদ্ধ করেছিল।
                    </p>

                    <blockquote className="bg-[#434C39] p-6 rounded-lg max-w-[640px]">
                        <p className="text-white lg:text-2xl text-base font-light leading-normal text-center lg:text-left">

                            &quot;ডিজিটাল মিডিয়া ছাড়া, আমরা উত্তর কোরিয়ার মতো একনায়কত্বের কবলে পড়ে থাকতাম। ডিজিটাল মিডিয়াই <span className="font-trb italic text-[#a3e635]"> ১,৫০০+ তাজা তরুণ প্রাণকে </span> রাস্তায় এনেছিল। তারা চাইলেই সে সময় পরিবারের সাথে ঘরে থাকতে পারত, কিন্তু তারা রাস্তার আন্দোলন বেছে নিয়েছিল। তাদের ত্যাগ ডিজিটাল মিডিয়ার দ্বারা প্রেরিত হয়েছিল, এবং আমাদের এই একই ডিজিটাল শক্তিকে ব্যবহার করে আমাদের দেশকে বিপ্লবিত করতে এবং এর দুর্নীতিগ্রস্ত রাজনীতিকে পরিষ্কার করব&quot;
                        </p>
                    </blockquote>

                    <p className="p1 text-center lg:text-left">
                        বাংলাদেশে ডিজিটাল-প্রথম একটি রাজনৈতিক দল হতে পারে সত্যিকার অর্থে বিপ্লবী। আমরা দ্রুত দেশের প্রতিটি প্রান্তে পৌঁছাতে পারব এবং আমাদের দৃষ্টিভঙ্গি নিয়ে মানুষকে একত্রিত করতে পারব। এতে থাকবে না কোনো ম্যানুয়াল কাগজপত্রের ঝামেলা বা ধীর অনুমোদন প্রক্রিয়া। এটি হবে সম্পূর্ণ স্বয়ংক্রিয়, স্বচ্ছ, এবং ডিজিটাল প্ল্যাটফর্মের মাধ্যমে পরিচালিত একটি গতিশীল রাজনৈতিক দল।
                    </p>

                    <p className="p1 text-center lg:text-left">
                        ডিজিটাল মাধ্যমের এই শক্তিকে কাজে লাগিয়ে আমরা একটি নতুন বাংলাদেশ গড়ে তুলতে পারি।
                    </p>
                </article>
            </div>
        </section>
    )
}
