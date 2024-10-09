import { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const SERVICES = [
  {
    title: "Web Application Development",
    description:
      "We build high-performance web applications tailored to your business needs.",
    image: "../../../public/img1.webp",
  },
  {
    title: "Mobile Application Development",
    description:
      "Get cutting-edge mobile applications for iOS and Android platforms.",
    image: "../../../public/img2.webp",
  },
  {
    title: "Graphics Designing",
    description:
      "Our creative team delivers stunning designs to enhance your brand.",
    image: "../../../public/img3.webp",
  },
  {
    title: "Video Production and Editing",
    description:
      "We create and edit high-quality videos that captivate your audience.",
    image: "../../../public/img1.webp",
  },
  {
    title: "Marketing",
    description:
      "Boost your brand visibility with our comprehensive marketing strategies.",
    image: "../../../public/img2.webp",
  },
];

const Services = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate background color
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  // Carousel sliding logic
  const slideX = useMotionValue(0);

  useEffect(() => {
    const controls = animate(slideX, [-1000, 0], {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    });
    return controls.stop; // Stop animation on unmount
  }, []);

  return (
    <>
      <h1 className="text-center mt-10 text-5xl font-bold">Our Services</h1>
      <div className="overflow-hidden w-full">
        <motion.div
          style={{ x: slideX }}
          className="flex flex-row justify-evenly w-[180%]" // Adjust the width to accommodate all slides
        >
          {SERVICES.map((service, index) => (
            <CardContainer key={index} className="w-[20%]">
              {" "}
              {/* Adjust width to accommodate five cards */}
              <motion.section
                style={{ backgroundImage }}
                className="rounded-xl"
              >
                <CardBody className="bg-transparent text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold dark:text-white"
                  >
                    {service.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {service.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={service.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Learn more →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Contact us
                    </CardItem>
                  </div>
                </CardBody>
              </motion.section>
            </CardContainer>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Services;
