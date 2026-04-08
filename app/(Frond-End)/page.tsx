import AppBackground from "./_components/AppBackground";
import HeroSection from "./_components/Hero/HeroSection";
import ConnectPeople from "./_components/connect-people/ConnectPeople";


export default function Home() {
  return (
    <div className="">
      <AppBackground>
        <HeroSection />
      </AppBackground>
      <ConnectPeople />
    </div>
  );
}
