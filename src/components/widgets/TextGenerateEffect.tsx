
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `At the heart of everything we do is our dedicated team of
          professionals, each bringing unique skills, passion, and experience.
          Together, we work to bring our vision to life and ensure the best
          outcomes for our clients and partners.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} duration={0.2} />;
}
