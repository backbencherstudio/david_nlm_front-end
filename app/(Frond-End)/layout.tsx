import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/navigation";
import AppBackground from "./_components/AppBackground";
import ThemeProvider from "@/context/theme-context";
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <div className="bg-[#FAFAFA] dark:bg-background">
        <Footer />
      </div>
    </>
  );
}
