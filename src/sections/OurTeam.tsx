import { TextGenerateEffectDemo } from '@/components/widgets/TextGenerateEffect';
import { TypewriterEffectSmooth } from './../components/ui/typewriter-effect'
import { teamMembers } from '@/data/teamList';
import { DragCards } from '@/components/widgets/TeamCard';

export const OurTeam = () => {

     const words = [
       {
         text: "Get",
         className: "text-white",
       },
       {
         text: "to",
         className: "text-white",
       },
      
       
       {
         text: "Know",
         className: "text-white",
       },
       {
         text: "Us",
         className: "text-white",
       },
     ];



  return (
    <section id="team" className="bg-black  text-white">
      {/* <div className="w-8/12 mx-auto ">
        <div className="flex justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <TextGenerateEffectDemo />
      </div> */}
      <DragCards />
    </section>
  );
}

