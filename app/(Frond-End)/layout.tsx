import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/navigation";
import AppBackground from "./_components/AppBackground";
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <div className="bg-[#FAFAFA]">
        <Footer />
      </div>
    </>
  );
}
