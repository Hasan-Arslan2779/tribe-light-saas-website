import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          İş akışınızı kolaylaştırın ve üretkenliğinizi artırın.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Ücretsiz Başlayın</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Saas Logo" width={40} height={40} />
            <MenuIcon className="h-6 w-6 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">Anasayfa</a>
              <a href="">Özellikler</a>
              <a href="">Müşteriler</a>
              <a href="">Güncellemeler</a>
              <a href="">Yardım</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Ücretsiz Başlayın
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
