

import { DragCards } from '@/components/widgets/TeamCard';


export const OurTeam = () => {

   


  return (
    <section id="team" className=" text-white">
      {/* <TypewriterEffectSmoothDemo words={words} /> */}
      <p className="text-5xl text-white text-center font-semibold mt-6 ">
        Our Team
      </p>
      <DragCards />
    </section>
  );
}

