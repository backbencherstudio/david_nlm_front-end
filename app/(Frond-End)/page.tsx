import AppBackground from "./_components/AppBackground";
import HomeScrollToHash from "./_components/HomeScrollToHash";
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
      <HomeScrollToHash />
      <AppBackground>
        <div id="home" className="scroll-mt-28">
          <HeroSection />
        </div>
      </AppBackground>
      <section id="about" className="scroll-mt-28">
        <ConnectPeople />
      </section>
      <div className="bg-[#FAFAFA]">
        <section id="how-it-works" className="scroll-mt-28">
          <PlatformWork />
        </section>
      </div>
      <section id="services" className="scroll-mt-28">
        <ServiceOverview />
      </section>
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
