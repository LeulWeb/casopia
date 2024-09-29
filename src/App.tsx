import { Button } from "./components/ui/button"
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";

const App = () => {
  return (
    <div>
      <Button>Heyy Meluy 😊</Button>
      <TypewriterEffectSmooth words={[{ text: "Heyy Meluy 😊" }]} />
    </div>
  );
}

export default App