import Image from "next/image";

export default function WhyUs()
{
    return (
        <section className=" min-h-screen bg-[#0A221F] lg:py-32 py-12">
            <div className=" flex flex-col gap-[30px] text-white p-6 md:p-12 max-w-4xl mx-auto">
                <article className="space-y-8 flex flex-col justify-center items-center">
                    <h2 className="max-w-[531px] text-center justify-start text-white lg:text-5xl text-3xl font-medium lg:leading-[55px]">কেনো ডিজিটাল ফ্রাস্ট রাজনৈতিক দল?</h2>

                    <p className="p1 text-center lg:text-left">
                        বাংলাদেশে বর্তমানে ৯৫ কোটি মানুষের মধ্যে প্রায় ৫-৬ কোটি মানুষ
                        ফেসবুক এবং ইউটিউব ব্যবহার করেন। এই প্লাটফর্মগুলোর মাধ্যমে যেকোনো
                        তথ্য খুব দ্রুতিং পড়ে। এই ৫ কোটি মানুষ ইন্টারনেট তথ্যনির্ভর তারা
                        নাকি ২০১২৮ কোটি মানুষের উপর প্রভাব ফেলেনো সম্ভব, অনলাইনে কোনো
                        তথ্যপূর্ণ বিষয় দেখার পর মানুষ তা পরিবার, বন্ধু বা প্রতিবেশীদের সাথে
                        আলোচনা করবে, যারা হয়তো সরাসরি ডিজিটাল মাধ্যম যুক্ত নন।
                    </p>

                    <div className="flex justify-center pointer-events-none">
                        <div className="max-w-[524px]">
                            <Image src="/images/user-ratio.png" width={524} height={524} alt="Why Us" className="w-full" />
                        </div>
                    </div>

                    <p className="p1 text-center lg:text-left">
                        জুলাই-আগস্ট মাসে ফেসবুক হানিমুন বিরক্ত হওয়া বিকেন্দ্রভাবে ডিজিটাল
                        মাধ্যমের শক্তি প্রমাণ করেছে। ইত্যাবসরে ভিডিওগুলো দ্রুত ছড়িয়ে পড়ে,
                        যা মানুষকে আলোচনায় স্থগিতে সচেত উদ্বুদ্ধ করেছিল।
                    </p>

                    <blockquote className="bg-[#434C39] p-6 rounded-lg max-w-[640px]">
                        <p className="text-white lg:text-2xl text-base font-light leading-normal text-center lg:text-left">
                            &quot;ডিজিটাল মিডিয়া ছাড়া, আমরা উত্তর কোরিয়ার মতো একনায়কত্বের কবলে পড়ে থাকতাম। ডিজিটাল মিডিয়াই <span className="font-trb italic text-[#a3e635]"> ১,৫০০+ তাজা তরুণ প্রাণকে </span> রাস্তায় এনেছিল। তারা চাইয়লে সে সময় পরিবারের সাথে ঘরে থাকতে পারত, কিন্তু তারা রাস্তার আন্দোলন বেছে নিয়েছিল। তাদের ত্যাগ ডিজিটাল মিডিয়ার দ্বারা প্রেরিত হয়েছিল, এবং আমাদের এই একই ডিজিটাল শক্তিকে ব্যবহার করে আমাদের দেশকে বিপ্লবিত করতে এবং এর দুর্নীতিগ্রস্ত রাজনীতিকে পরিষ্কার করব&quot;
                        </p>
                    </blockquote>

                    <p className="p1 text-center lg:text-left">
                        বাংলাদেশে ডিজিটাল-প্রথম একটি রাজনৈতিক দল হতে পারে প্রতিটার অর্থে
                        বিপ্লবী। আমরা দ্রুত দেশের প্রতিটি গ্রামে পৌঁছাতে পারব এবং আমাদের
                        দৃষ্টিভঙ্গি নিয়ে মানুষকে একত্রিত করতে পারব। এতে আমরা না কেবলো
                        মানুষের রাজনীতিকরণের আয়োজন বা দীর্ঘ অনুশীলনের প্রক্রিয়া—এটি হবে
                        সম্পূর্ণ স্বচ্ছ, স্বাধীন, এবং ডিজিটাল প্লাটফর্মের মাধ্যমে পরিচালিত
                        একটি শক্তিশালী রাজনৈতিক দল।
                    </p>

                    <p className="p1 text-center lg:text-left">
                        ডিজিটাল মাধ্যমের এই শক্তিকে কাজে লাগিয়ে আমরা একটি নতুন বাংলাদেশের
                        স্বপ্ন গড়ে তুলতে পারি।
                    </p>
                </article>
            </div>
        </section>
    )
}
