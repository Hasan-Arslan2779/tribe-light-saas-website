"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Deneyimli bir tasarımcı olarak her zaman yenilikçi araçlar arıyorum, Framer.com anında dikkatimi çekti.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Ekibimizin verimliliği bu aracı kullanmaya başladığımızdan beri büyük ölçüde arttı.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Bu uygulama, projelerimi ve son teslim tarihlerini yönetme şeklimi tamamen değiştirdi.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Bu uygulamayı iş akışımıza ne kadar hızlı entegre edebildiğimiz beni şaşırttı.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Etkinlikleri planlamak ve yürütmek hiç bu kadar kolay olmamıştı. Bu uygulama, tüm hareketli parçaları takip etmemi sağlayarak hiçbir şeyin gözden kaçmamasını garanti ediyor.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Bu uygulamanın özelleştirilebilirliği ve entegrasyon yetenekleri birinci sınıf.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Bu uygulamayı ekibimiz için benimsemek, proje yönetimimizi kolaylaştırdı ve iletişimi her açıdan geliştirdi.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Bu uygulama ile görev atayabilir, ilerlemeyi takip edebilir ve belgeleri tek bir yerde yönetebiliriz.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Kullanıcı dostu arayüzü ve güçlü özellikleri, çeşitli ihtiyaçlarımızı karşılıyor.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6 "
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ name, imageSrc, text, username }) => (
              <>
                <div className="card">
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-head">
          <div className="flex justify-center">
            <div className="tag">Görüşler</div>
          </div>

          <h1 className="section-title mt-5">Kullanıcılarımız ne diyor?</h1>
          <p className="section-description mt-5">
            Sezgisel tasarımdan güçlü özelliklere kadar, uygulamamız dünya
            çapındaki kullanıcılar için vazgeçilmez bir araç haline geldi.
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            className="hidden md:block"
            testimonials={secondColumn}
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
