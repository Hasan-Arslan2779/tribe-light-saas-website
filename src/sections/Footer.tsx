import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2f0b1,#2fd8fe)]  before:top-2 before:bottom-0 before:blur before:w-full before:absolute ">
          <Image src={logo} height={40} alt="Saas Logo" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">Hakkımızda</a>
          <a href="#">Özellikler</a>
          <a href="#">Müşteriler</a>
          <a href="#">Fiyatlandırma</a>
          <a href="#">Yardım</a>
          <a href="#">Kariyer</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta />
          <SocialX />
          <SocialLinkedIn />
          <SocialPin />
        </div>
        <p className="mt-6">&copy; 2025 Arslan. Inc. Her hakkı saklıdır</p>
      </div>
    </footer>
  );
};
