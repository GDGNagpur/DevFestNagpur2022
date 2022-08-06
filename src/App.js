import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader"

const App = () => {

  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 100 });

    setTimeout(()=>{
        setIsLoading(false)
    }, 6500)

    setTimeout(()=>{
      setShowHero(true)
    }, 5000)
    
  }, [showHero]);

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {showHero && <Hero></Hero>}
    </div>
  );
};

export default App;
