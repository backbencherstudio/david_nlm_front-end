import AppBackground from "./_components/AppBackground";
import HeroSection from "./_components/Hero/HeroSection";
import ConnectPeople from "./_components/connect-people/ConnectPeople";
import PlatformWork from "./_components/platform/PlatformWork";
import ServiceOverview from "./_components/service-overview/ServiceOverview";


export default function Home() {
  return (
    <div className="">
      <AppBackground>
        <HeroSection />
      </AppBackground>
      <ConnectPeople />
      <div className="bg-[#FAFAFA]">
        <PlatformWork />
      </div>
      <ServiceOverview />
    </div>
  );
}
