import { BCard } from "@/components/widgets/Bcard";
import TerminalContact from "@/components/widgets/ContactUsForm";

export const ContactUs = () => {
  return (
    <section id="contact" className=" ">
      <p className="text-5xl text-white text-center font-semibold  my-6">
        Contact Us
      </p>
      <div className="grid  grid-cols-2 ">
        <TerminalContact />
        <div>
          <BCard />
        </div>
      </div>
    </section>
  );
};
