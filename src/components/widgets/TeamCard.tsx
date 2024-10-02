import { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import kaya from "../../../public/teams/kaya.jpeg";
import hayli from "../../../public/teams/hayli.jpeg"
import fozi from "../../../public/teams/fozi.jpeg"
import leul from "../../../public/teams/leul.png"
import melu from "../../../public/teams/melu.jpg"
import { MdOutlineEmail } from "react-icons/md";
import linkedin from "../../../public/icons/linkedin.svg"

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden ">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Our Team<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={kaya}
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        // className="w-36 md:w-56"
        className="w-24 md:w-48"
      />
      {/* <Card
        containerRef={containerRef}
        src={hayli}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        // className="w-24 md:w-48"
        className="w-40 md:w-64"
      /> */}
      <Card
        containerRef={containerRef}
        src={fozi}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        // className="w-52 md:w-80"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={leul}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        // className="w-48 md:w-72"
        // className="w-36 md:w-56"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={melu}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={hayli}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />

      {/* <CardDemo/> */}
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-white p-1 pb-4",
        className
      )}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    >
      <div>
        <motion.img src={src} alt={alt} />
        <div className="text-black flex flex-col items-center">
          <p>Leul Webshet</p>
          <p>Software Engineer</p>
          <div className="flex space-x-3 items-center">
            <MdOutlineEmail />
            <img src={linkedin} width={20} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
