import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useEffect } from "react";

const COLORS_TOP = [ "#1E67C6", "#CE84CF"];

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

   useEffect(() => {
     animate(color, COLORS_TOP, {
       ease: "easeInOut",
       duration: 10,
       repeat: Infinity,
       repeatType: "mirror",
     });
   }, []);

   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200" style={{backgroundImage}}>
      {/* Content that floats slightly */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -20, 0] }} // Floating effect
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} // Smooth up and down movement
      >
        {/* Company Name */}
        <TypewriterEffectSmooth
          words={[{ text: " Casopia Tech" }]}
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
        />
        {/* Slogan */}
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Simplify, automate, thrive.
        </p>
        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }} // Hover effect for the button
          whileTap={{ scale: 0.95 }} // Button press effect
          className="group relative flex w-fit items-center gap-1.5 rounded-sm bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Contact Us
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </motion.div>

      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={5000} factor={4} fade speed={1.5} />{" "}
          {/* Starfield */}
        </Canvas>
      </div>

      {/* Optional subtle floating animation */}
      <motion.div
        className="absolute w-full h-full z-0"
        animate={{ y: [-10, 10] }} // Floating effect for the background
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} // Slow floating animation
      >
        {/* You can add other floating elements here if needed */}
      </motion.div>
    </motion.section>
  );
};
