import { Button } from "./components/ui/button";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { AuroraHero } from "./components/landing/Landing";
import Services from "./components/servicesSection/Services";

const App = () => {
  return (
    <>
      {/* <Button>Heyy Meluy 😊</Button>
      <TypewriterEffectSmooth words={[{ text: "Heyy Meluy 😊" }]} /> */}
      <AuroraHero />
      <Services/>
    </>
  );
};

export default App;
