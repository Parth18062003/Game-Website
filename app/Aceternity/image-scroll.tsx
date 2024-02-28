"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import image from "../../Assets/image.jpg";

export const ImageScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const translate = useTransform(scrollYProgress, [0, 0.5], isMobile ? [-1000, 0] : [-1000, 50]);

  const translateText = useTransform(scrollYProgress, [0, 0.5], isMobile ? [-1000, 0] : [1000, 50]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className="w-full relative bg-gray-700 bg-opacity-30 "
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          translate={translate}
          translateText={translateText}
        />
      </div>
    </div>
  );
};

export const Card = ({
  translate,
  translateText
}: {
  translate: any;
  translateText: any;
}) => {
  return (
    <motion.div
      className="sm:w-5xl md:w-full h-[35rem] md:h-[40rem] rounded-[30px]"
    >
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
     <motion.div
          className="rounded-md cursor-pointer relative"
          style={{ translateX: translate}}
          transition={{ duration: 5 }}
        >
          <Image src={image} alt="Skate Nation XL" objectFit="contain" width={1200} height={1200} className="md:mt-28"/>
        </motion.div>
        <motion.div style={{ translateX: translateText }} className="p-5 md:mt-48"
        transition={{ duration: 5 }}>
          <h2 className="text-3xl">About Us</h2>
          <p>Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
