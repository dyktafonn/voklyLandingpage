import CompareSection from "@/components/landingpage/CompareSection";
import Features from "@/components/landingpage/Features";
import HeroSection from "@/components/landingpage/HeroSection";
import ValueSection from "@/components/landingpage/ValueSection";

export default function Home() {
  return (
    <div className=" flex flex-col gap-4 h-full w-full ">
      <HeroSection></HeroSection>
      <Features></Features>
      <CompareSection />
      <ValueSection></ValueSection>
    </div>
  );
}
