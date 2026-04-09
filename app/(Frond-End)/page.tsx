import AppBackground from "./_components/AppBackground";
import GrowBusiness from "./_components/GrowBusiness/GrowBusiness";
import HeroSection from "./_components/Hero/HeroSection";
import ConnectPeople from "./_components/connect-people/ConnectPeople";
import PlatformWork from "./_components/platform/PlatformWork";
import ServiceOverview from "./_components/service-overview/ServiceOverview";
import WhyChoose from "./_components/why-choose/WhyChoose";
import Customers from "./_components/customers/Customers";
import ZeroHassle from "./_components/zero-hassle/ZeroHassle";


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
      <div className="bg-[#FAFAFA] dark:bg-background">
        <WhyChoose />
      </div>
      <GrowBusiness />
      <div className="bg-[#FAFAFA]">
        <Customers />
      </div>
      <div className="dark:bg-blackColor">
        <ZeroHassle />
      </div>
    </div>
  );
}
