"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import TextRevealByWord from "../ui/text-reveal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useParallax = (value: any, distance_1: number, distance_2: number) => {
  return useTransform(value, [0, 1], [distance_1, distance_2]);
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useSpring(useParallax(scrollYProgress, 1, 1.5), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full px-5 lg:py-10">
      <div className="flex min-h-screen flex-col items-center justify-center pb-20">
        <div className="mb-14 h-fit w-fit md:mb-16 lg:mb-10">
          <h1 className="text-center font-italiana text-5xl md:text-6xl lg:text-5xl">
            Daria
          </h1>
          <p className="text-center font-italiana text-2xl md:text-3xl lg:text-2xl">
            &
          </p>
          <h1 className="text-center font-italiana text-5xl md:text-6xl lg:text-5xl">
            Anton
          </h1>
        </div>
        <div className="mb-14 h-fit w-64 overflow-hidden md:mb-16 md:w-80 lg:mb-10 lg:w-64">
          <motion.div style={{ scale }}>
            <Image
              src="/home.png"
              className="w-64 object-cover md:w-80 lg:w-64"
              alt="home-img"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="relative flex min-h-screen flex-col justify-center lg:min-h-screen">
        <TextRevealByWord
          className="mx-auto text-center font-helvetica text-base text-zinc-700 md:w-2/3 lg:w-[35%] lg:text-base"
          text="We are delighted to invite you to join us in celebrating our wedding.
          Your presence would mean so much to us. We look forward to celebrating
          together!"
        />
      </div>
    </div>
  );
}
