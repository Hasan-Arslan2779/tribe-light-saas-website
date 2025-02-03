"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 md:pt-5 md:pb-10 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[470px]">
            <div className="tag">Sürüm 2.0 burada</div>
            <h1 className=" mt-6 md:text-7xl py-1 text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
              Üretkenliğe giden yol
            </h1>
            <p className="text-xl text-[#010d3e] -tracking-tight mt-6">
              İlerlemenizi denemek, çabalarınızı motive etmek ve başarınızı
              kutlamak için tasarlanmış bir uygulamayla başarının sevincini
              kutlayın.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Ücretsiz Basla</button>
              <button className="btn btn-text gap-1">
                <span>Daha fazla bilgi</span>
                <ArrowIcon className="h-5 w-5 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="cog"
              className="md:absolute md:h-full lg:left-0 md:w-auto md:max-w-none md:-left-6 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder"
              width={220}
              height={220}
              className=" hidden md:block -top-8  -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodle"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[542px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
