import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader"

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 100 });

    setTimeout(()=>{
        setIsLoading(false)
    }, 5000)
    
  }, []);

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {!isLoading && <Hero></Hero>}
    </div>
  );
};

export default App;
