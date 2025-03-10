import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Icons } from "@/components/icons";

export default function Home()
{
  return (
    <div className="bg-[#EDF4E3]">
      <Hero />
      <SectionOne />
      <ProfileGrid />
      <FeaturesSection />
      <SectionTwo />
      <FeatureGrid />
    </div>
  );
}

const features = [
  {
    id: 1,
    icon: Icons.technologySolution,
    title: "টেকনোলজি-  সমাধান",
    description:
      "আধুনিক প্রযুক্তিকে অগ্রাধিকার দিয়ে উন্নয়ন এবং সমস্যার সমাধান নিশ্চিত করা।",
  },
  {
    id: 2,
    icon: Icons.dataDrivenDecision,
    title: "ডেটা-ড্রিভেন সিদ্ধান্ত",
    description: "তথ্য ও গবেষণার ভিত্তিতে সিদ্ধান্ত গ্রহণ এবং সমস্যা সমাধান।",
  },
  {
    id: 3,
    icon: Icons.technologySolution,
    title: "ডিজিটাল-কেন্দ্রিক স্ট্রাটেজি",
    description:
      "অনলাইন ও অফলাইন কার্যক্রমের সমন্বয়ে একটি শক্তিশালী প্ল্যাটফর্ম তৈরি করা।    ",
  },
  {
    id: 4,
    icon: Icons.clearRoadmap,
    title: "স্বচ্ছ রোডম্যাপ",
    description:
      "সংক্ষিপ্ত ও দীর্ঘমেয়াদি লক্ষ্য নির্ধারণ এবং তা বাস্তবায়নের জন্য স্পষ্ট পরিকল্পনা।",
  },
  {
    id: 5,
    icon: Icons.aiUse,
    title: "কৃত্রিম বুদ্ধিমত্তার সর্বোচ্চ ব্যবহার",
    description:
      "প্রতিটি ক্ষেত্রে এফিশিয়েন্সি বাড়ানোর জন্য স্বয়ংক্রিয় সিদ্ধান্ত গ্রহণ, ডেটা বিশ্লেষণ, এবং রিয়েল-টাইম প্রসেসিং সক্ষম করা।",
  },
  {
    id: 6,
    icon: Icons.feedbackMecanism,
    title: "ফিডব্যাক মেকানিজম",
    description:
      "জনমত ও প্রতিক্রিয়া সংগ্রহের জন্য সহজ এবং অন্তর্ভুক্তিমূলক ব্যবস্থা।",
  },
  {
    id: 7,
    icon: Icons.multiChanelCommunication,
    title: "মাল্টি-চ্যানেল কমিউনিকেশন",
    description:
      "সামাজিক যোগাযোগ মাধ্যম, প্রচলিত মিডিয়া এবং স্থানীয় পর্যায়ের মাধ্যমে সবার কাছে বার্তা পৌঁছানো।",
  },
  {
    id: 8,
    icon: Icons.developLeadership,
    title: "নেতৃত্বের বিকাশ",
    description:
      "তরুণ নেতৃত্ব তৈরি এবং বিকেন্দ্রীভূত সিদ্ধান্ত গ্রহণের ব্যবস্থা।",
  },
  {
    id: 9,
    icon: Icons.peopleMixing,
    title: "জনসম্পৃক্ততা",
    description:
      "প্রতিটি শ্রেণির মানুষের মতামত অন্তর্ভুক্ত করে একটি অংশগ্রহণমূলক কাঠামো তৈরি।",
  },
];

const openSourceReasons = [
  {
    id: 1,
    icon: <Icons.digitalFirst className="w-10 h-10 " />,
    title: "ডিজিটাল ফ্রাস্ট",
    description:
      "আমাদের অ্যাপ ডাউনলোড করে সহজেই পরিচয় যাচাই করে সদস্য হতে পারেন। এটি একটি সম্পূর্ণ ডিজিটাল ফার্স্ট প্ল্যাটফর্ম, যেখানে মিটিং বা মিছিলের প্রয়োজন নেই।",
  },
  {
    id: 2,
    icon: <Icons.clearRoadmap className="w-10 h-10 " />,
    title: "স্বচ্ছ প্রক্রিয়া",
    description:
      "প্রতিটি সিদ্ধান্ত ও কার্যক্রম সবার জন্য উন্মুক্ত, যাতে গোপনীয়তা বা পক্ষপাতিত্বের কোনো জায়গা না থাকে। ",
  },
  {
    id: 3,
    icon: <Icons.donation className="w-10 h-10 " />,
    title: "অবদান-ভিত্তিক মূল্যায়ন",
    description:
      "এখানে নেতৃত্ব বা দায়িত্ব নির্ধারিত হয় আপনার কাজ, সমস্যা সমাধানের দক্ষতা এবং কমিউনিটিতে অবদান অনুযায়ী। ",
  },
  {
    id: 4,
    icon: <Icons.decentralized className="w-10 h-10 " />,
    title: "ক্ষমতার বিকেন্দ্রীকরণ",
    description:
      "এখানে ক্ষমতা কোনো নির্দিষ্ট গোষ্ঠীর হাতে কেন্দ্রীভূত নয়। বরং, এটি সবার মধ্যে ভাগ করা হয়, যাতে প্রতিটি মানুষের অবদান গুরুত্বপূর্ণ হয়। ",
  },
  {
    id: 5,
    icon: <Icons.development className="w-10 h-10 " />,
    title: "নিয়মিত আপডেট ও উন্নয়ন",
    description:
      "প্ল্যাটফর্মটি ক্রমাগত সবার অংশগ্রহণের মাধ্যমে উন্নত করা হয়, যেন এটি সময়োপযোগী এবং কার্যকর থাকে। ",
  },
  {
    id: 6,
    icon: <Icons.nuclear className="w-10 h-10 " />,
    title: "নিউক্লিয়ার পাওয়ার",
    description:
      "আমরা যখন কোনো পদক্ষেপ নেব, তা হবে নিউক্লিয়ার চেইন রিঅ্যাকশনের মতো,একটি ছোট পদক্ষেপ থেকে শুরু করে ক্রমাগত প্রতিফলিত হয়ে শক্তি ও প্রভাবের বিস্ফোরণ ঘটাবে।",
  },
];
function Hero()
{
  return (
    <main className="">
      <div className="container relative pt-[128px] flex flex-col justify-center mx-auto px-4 py-12 text-center gap-[25px] z-[2]">
        <div>
          <Button className=" hover:bg-[#1D3200] bg-[#1D3200] text-white font-hind-siliguri font-semibold text-[18.29px] leading-[18.29px] text-center">
            বাংলাদেশ 3.0
          </Button>
        </div>

        <h1 className="text-[rgb(29,50,0)] text-2xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
          ওপেন-সোর্স পার্টি: <span className="text-[#FF3A69] font-trb italic">ক্ষমতা নয়,</span>
          অবদানই নেতৃত্বের আসল মাপকাঠি
        </h1>

        <p className="font-noto-sans font-medium text-[22px] leading-[33px] text-center max-w-3xl mx-auto text-[#1D3200]">
          আমরা একটি ওপেন-সোর্স ভিত্তিক স্মার্ট রাজনৈতিক ডিজিটাল প্ল্যাটফর্ম তৈরি করছি, যেখানে স্বচ্ছতা এবং সুশৃঙ্খল ব্যবস্থার মাধ্যমে নেতৃত্ব নির্ধারিত হবে। এখানে ক্রেডিট স্কোর ব্যবস্থার মাধ্যমে আপনার আইডিয়া, সমস্যা সমাধান এবং কমিউনিটির জন্য অবদানই হবে নেতৃত্বের একমাত্র মানদণ্ড। টাকা বা প্রভাব নয়, আপনার কাজই আপনাকে এগিয়ে নিয়ে যাবে। এই প্ল্যাটফর্ম সম্পূর্ণ অটোমেটিক এবং ট্রান্সপারেন্ট, যা দুর্নীতির কোনো সুযোগ রাখে না। সব সিদ্ধান্ত এবং প্রক্রিয়া ওপেন ও যাচাইযোগ্য।
        </p>

        <div className="mb-8">
          <Button className="text-[#000000] hover:bg-[#86CD58] bg-[#86CD58] px-5 py-3 rounded-full font-hind-siliguri font-semibold text-[18px] leading-[24px]">
            জয়েন করুন
          </Button>
        </div>

        <Image
          src="/images/homepage.png"
          alt=""
          width={1920}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>
      <Image
        src="/backgrounds/hero-bottom-bg.svg"
        alt="Hero illustration showing people interacting with technology"
        width={1920}
        height={300}
        className="w-full h-auto"
        priority
      />
    </main>
  );
}
function SectionOne()
{
  return (
    <section className=" min-h-screen bg-[#0A221F] py-[120px]">
      <div className=" flex flex-col gap-[30px] text-white p-6 md:p-12 max-w-4xl mx-auto">
        <article className="space-y-8 flex flex-col justify-center items-center">
          <h1 className="font-hind-siliguri font-medium text-[50px] leading-[55px] text-center tracking-[-0.01em]">
            কেনো ডিজিটাল ক্লাস্ট রাজনৈতিক দল?
          </h1>

          <p className="font-noto-sans font-medium text-[22px] leading-[33px]">
            বাংলাদেশে বর্তমানে ৯৫ কোটি মানুষের মধ্যে প্রায় ৫-৬ কোটি মানুষ
            ফেসবুক এবং ইউটিউব ব্যবহার করেন। এই প্লাটফর্মগুলোর মাধ্যমে যেকোনো
            তথ্য খুব দ্রুতিং পড়ে। এই ৫ কোটি মানুষ ইন্টারনেট তথ্যনির্ভর তারা
            নাকি ২০১২৮ কোটি মানুষের উপর প্রভাব ফেলেনো সম্ভব, অনলাইনে কোনো
            তথ্যপূর্ণ বিষয় দেখার পর মানুষ তা পরিবার, বন্ধু বা প্রতিবেশীদের সাথে
            আলোচনা করবে, যারা হয়তো সরাসরি ডিজিটাল মাধ্যম যুক্ত নন।
          </p>

          <div className="flex justify-center text-black rounded-lg w-full overflow-hidden">
            <div className="flex justify-center flex-col items-center w-[524px] bg-white rounded-lg">
              <div className="bg-[#434C39] text-white p-4 w-full ">
                <p className="text-lg font-semibold text-center">
                  190 Million Total population
                </p>
              </div>
              <div className="bg-[#86CD58] p-4 ">
                <p className="font-apercu-pro font-medium text-[14.56px] leading-[20.38px] text-center tracking-[-0.01em]">
                  50 Million Facebook/Youtube User
                </p>
              </div>
            </div>
          </div>

          <p className="font-noto-sans font-medium text-[22px] leading-[33px]">
            জুলাই-আগস্ট মাসে ফেসবুক হানিমুন বিরক্ত হওয়া বিকেন্দ্রভাবে ডিজিটাল
            মাধ্যমের শক্তি প্রমাণ করেছে। ইত্যাবসরে ভিডিওগুলো দ্রুত ছড়িয়ে পড়ে,
            যা মানুষকে আলোচনায় স্থগিতে সচেত উদ্বুদ্ধ করেছিল।
          </p>

          <blockquote className="bg-[#434C39] p-6 rounded-lg max-w-[640px]">
            <p className="font-hind-siliguri font-light text-[24px] leading-[33.6px]  tracking-[0%] italic">
              &quot;ডিজিটাল মিডিয়া হাতে, আমরা উত্তর কোরিয়ার মতো একনায়কতন্ত্র করতে
              রেখে থাকবেন। ডিজিটাল মিডিয়ার ১,৫০০ লাইভ ব্লগ চ্যানেল রাখায়
              প্রয়োজন—তারা পরিবারের সাথে প্রতি থাকতে পারবে, কিন্তু তারা আত্ম
              করতে দেখে নিরাপত্তা। আদর্শ আর্য ডিজিটাল মিডিয়ার দ্বারা প্রেরিত
              হয়েছিল, এবং আমাদের এই একই ডিজিটাল শক্তিকে ব্যবহার করে আমাদের
              দেশকে বিরাজিত করতে এবং এর দুর্নীতিগ্র রাজনীতিকে পরিষ্কার করতে হবে&quot;
            </p>
          </blockquote>

          <p className="font-noto-sans font-medium text-[22px] leading-[33px]">
            বাংলাদেশে ডিজিটাল-প্রথম একটি রাজনৈতিক দল হতে পারে প্রতিটার অর্থে
            বিপ্লবী। আমরা দ্রুত দেশের প্রতিটি গ্রামে পৌঁছাতে পারব এবং আমাদের
            দৃষ্টিভঙ্গি নিয়ে মানুষকে একত্রিত করতে পারব। এতে আমরা না কেবলো
            মানুষের রাজনীতিকরণের আয়োজন বা দীর্ঘ অনুশীলনের প্রক্রিয়া—এটি হবে
            সম্পূর্ণ স্বচ্ছ, স্বাধীন, এবং ডিজিটাল প্লাটফর্মের মাধ্যমে পরিচালিত
            একটি শক্তিশালী রাজনৈতিক দল।
          </p>

          <p className="font-noto-sans font-medium text-[22px] leading-[33px]">
            ডিজিটাল মাধ্যমের এই শক্তিকে কাজে লাগিয়ে আমরা একটি নতুন বাংলাদেশের
            স্বপ্ন গড়ে তুলতে পারি।
          </p>
        </article>
      </div>
    </section>
  );
}
function ProfileGrid()
{
  // Top row with different photos
  const topRowPhotos = Array(12).fill("/placeholder.svg");

  // Main grid with repeated photos
  const gridPhotos = Array(72).fill("/placeholder.svg");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Bengali Title */}
      <h1 className="font-hind-siliguri font-medium text-[50px] leading-[55px] text-center tracking-[-0.01em] mb-8 text-[#1D3200]">
        আমরা সবাই রাজা আমাদের
        <br />
        এই রাজার রাজত্বে
      </h1>

      <div className="relative">
        {/* Top row with different photos */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-13 gap-2 mb-4">
          {topRowPhotos.map((_, index) => (
            <div key={`top-${index}`} className="aspect-square relative">
              <Image
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt={`Profile ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Main grid */}
        {/* <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
          {gridPhotos.map((_, index) => (
            <div key={`grid-${index}`} className="aspect-square relative">
              <Image
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt={`Profile ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div> */}

        {/* Gradient overlay */}
        <div className="absolute inset-0 " />

        {/* Online count and button - positioned on top with high z-index */}
        <div className="relative z-10 text-center mt-8 space-y-4">
          <p
            className="text-xl"
            style={{ fontFamily: "SolaimanLipi, Arial, sans-serif" }}
          >
            633 অনলাইন
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
            এখন জয়েন
          </Button>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection()
{
  return (
    <div className="bg-[#0A221F] px-4 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
        <div className=" flex flex-col gap-5 max-w-[579px]">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white ">
            কেন এটিকে ওপেন-সোর্স বলা হচ্ছে?
          </h2>
          <p className="font-noto-sans font-normal text-[18px] leading-[24px] text-center text-white mb-[70px] mx-auto">
            সবার জন্য সমান সুযোগ তৈরি করা, যোগাযে কাজে, অবদান, এবং সফটয়্যার
            সমাধানের দক্ষতা হয়ে ওঠে নেতৃত্বের একমাত্র মানদণ্ড।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceReasons.map((item, index) =>
          {
            return (
              <div
                className="bg-[#EDF4E3] rounded-lg py-8 px-5 relative mb-[35px]"
                key={index}
              >
                <div className="p-1 absolute -top-[32px] left-[50%] translate-x-[-50%] border border-[#9FE870]  rounded-[12px] bg-[#9FE870] flex items-center justify-center">
                  {/* <Icons.digitalFirst className="w-10 h-10 " /> */}
                  {item.icon}
                </div>
                <div className="flex flex-col items-center ">
                  <h3 className="font-hind-siliguri font-semibold text-[24px] leading-[30px] mb-3 text-[#1D3200] text-center">
                    {item.title}
                  </h3>
                  <p className="font-noto-sans font-normal text-[18px] leading-[24px] text-center text-[#1D3200]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function SectionTwo()
{
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
  );
}

function FeatureGrid()
{
  return (
    <div className="min-h-screen ">
      {/* Decorative curves */}
      {/* <div className="absolute top-0 right-0 left-0 h-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 400 100" className="w-full h-full fill-pink-300">
            <path d="M0,50 Q100,20 200,50 T400,50 L400,0 L0,0 Z" />
          </svg>
        </div>
      </div> */}

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1D3200]">
          বাংলাদেশ ৩.০
        </h1>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#434C39] rounded-[16px] py-[30px] px-[24px] text-white shadow-lg"
            >
              {<feature.icon className="w-12 h-12 text-[#C8FF7D] mb-[25px]" />}
              <p className="font-hind-siliguri mb-2 font-medium text-[24px] leading-[30px] tracking-[0%]">
                {feature.title}
              </p>
              <p className="font-noto-sans font-normal text-[18px] leading-[24px] tracking-[0%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <Image
              src="/icons/rocket-icon.svg"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <h2 className="font-hind-siliguri font-semibold text-[#1D3200] text-[55px] leading-[60.5px] tracking-[-0.01em]">
              আমাদের মিশন
            </h2>
            <p className="font-noto-sans font-medium text-[24px] leading-[36px] text-gray-700">
              অনেক সময় আমরা ভিশন এবং মিশন নিয়ে বিভ্রান্ত হতে পারি। এখানে যা
              উল্লেখ করা হয়েছে, তা হলো ভিশন, যা আমাদের দীর্ঘমেয়াদী লক্ষ্য এবং
              সামগ্রিক দৃষ্টিভঙ্গি। মিশন হলো সেই নির্দিষ্ট উপায়, যার মাধ্যমে
              আমরা ধাপে ধাপে সেই লক্ষ্য অর্জন করতে পারি।
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              <Image
                src="/backgrounds/mission.svg"
                alt="Illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/backgrounds/mission-flow-chart.svg"
            alt="Logo"
            width={1200}
            height={800}
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
