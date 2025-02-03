"use client";
import CehckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Ücretsiz",
    monthlyPrice: 0,
    buttonText: "Ücretsiz başla",
    popular: false,
    inverse: false,
    features: [
      "En fazla 5 proje üyesi",
      "Sınırsız görev ve proje",
      "2GB depolama",
      "Entegrasyonlar",
      "Temel destek",
    ],
  },
  {
    title: "Profesyonel",
    monthlyPrice: 9,
    buttonText: "Hemen kaydol",
    popular: true,
    inverse: true,
    features: [
      "En fazla 50 proje üyesi",
      "Sınırsız görev ve proje",
      "50GB depolama",
      "Entegrasyonlar",
      "Öncelikli destek",
      "Gelişmiş destek",
      "Dışa aktarma desteği",
    ],
  },
  {
    title: "İşletme",
    monthlyPrice: 19,
    buttonText: "Hemen kaydol",
    popular: false,
    inverse: false,
    features: [
      "En fazla 5 proje üyesi",
      "Sınırsız görev ve proje",
      "200GB depolama",
      "Entegrasyonlar",
      "Özel hesap yöneticisi",
      "Özel alanlar",
      "Gelişmiş analizler",
      "Dışa aktarma özellikleri",
      "API erişimi",
      "Gelişmiş güvenlik özellikleri",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Fiyatlandırma</h2>
          <p className="section-description  mt-5">
            Sonsuza kadar ücretsiz. Sınırsız görevler, daha iyi güvenlik ve
            ayrıcalıklı özellikler için yükseltme yapın.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <>
                <div
                  className={twMerge(
                    "card",
                    inverse === true && "border-black bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                    {popular === true && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          animate={{
                            backgroundPositionX: "100%",
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        >
                          Popüler
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "tracking-tight font-bold text-black/50",
                        inverse === true && "text-white"
                      )}
                    >
                      /Aylık
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <>
                        <li className="text-sm flex items-center gap-4 ">
                          <CehckIcon className="w-6 h-6" />
                          <span>{feature}</span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
};
