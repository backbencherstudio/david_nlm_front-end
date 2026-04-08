import AppBackground from "./_components/AppBackground";
import HeroSection from "./_components/Hero/HeroSection";
import ConnectPeople from "./_components/connect-people/ConnectPeople";
import PlatformWork from "./_components/platform/PlatformWork";


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
    </div>
  );
}
