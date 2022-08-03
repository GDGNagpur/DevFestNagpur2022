import React, {useEffect} from "react";
import Hero from "./components/hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <div>
      <Hero></Hero>
    </div>
  );
};

export default App