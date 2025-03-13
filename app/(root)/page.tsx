
import Features from "@/components/common/home/features";
import Hero from "@/components/common/home/hero";
import NextGen from "@/components/common/home/next-gen";
import OurGovernance from "@/components/common/home/our-governance";
import OurMission from "@/components/common/home/our-mission";
import OurPlatform from "@/components/common/home/our-platform";
import OurRoadmap from "@/components/common/home/our-roadmap";
import OurVision from "@/components/common/home/our-vision";
import TeamGrid from "@/components/common/home/team-grid";
import WhyUs from "@/components/common/home/why-us";

export default function Home()
{
  return (
    <div className="bg-[#EDF4E3]">
      <Hero />
      <WhyUs />
      <TeamGrid />
      <Features />
      <OurVision />
      <OurMission />
      <OurGovernance />
      <OurPlatform />
      <NextGen />
      <OurRoadmap />
    </div>
  );
}

