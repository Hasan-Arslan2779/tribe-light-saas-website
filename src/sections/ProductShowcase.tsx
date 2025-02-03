"use client";
import Image from "next/image";
import productImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import tubeImage from "../assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-head">
          <div className="flex justify-center">
            <div className="tag">Üretkenliğinizi artırın</div>
          </div>
          <h2 className="section-title mt-5">
            İlerlemeyi takip etmenin daha etkili bir yolu
          </h2>
          <p className="section-description mt-5">
            Fikirlerinizi zahmetsizce tamamen işlevsel, hızlı yanıt veren bir
            Saas'a dönüştürün Bu şablonla birkaç dakika içinde web sitesi
            oluşturabilirsiniz
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid"
            height={262}
            width={262}
            className="absolute hiden md:block -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube"
            height={248}
            width={248}
            className="hiden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
