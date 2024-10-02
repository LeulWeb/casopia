
import BackgroundGrid from "./components/widgets/BackgroundGrid";
import CardCarousel from "./components/widgets/ProjectCarousel";
import { ContactUs } from "./sections/ContactUs";

import { OurTeam } from "./sections/OurTeam";



const App = () => {
  return (
    <main className="bg-black">
      <BackgroundGrid color="gray">
        <CardCarousel />
        <OurTeam />
        <ContactUs />
      </BackgroundGrid>
    </main>
  );
}

export default App