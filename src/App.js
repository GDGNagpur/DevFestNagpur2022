import React, { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";
import NewHero from "./components/newhero/NewHero";
// import Hero from "./components/hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";
import WeAreSpeakingLouderMain from "./components/weAreSpeakingLouderSection/WeAreSpeakingLouderMain";
import WhatIsDevfest from "./components/whatIsDevfest/WhatIsDevfest";
import AllAccessPass from "./components/allAccessPass/AllAccessPass";
// import { ReactComponent as SVG } from "./assets/hero/map-vector2.svg";
import ThemesSection from "./components/themesSection/ThemesSection";
import ThingsYouDontWantToMissMain from "./components/thingsYouDontWantToMissSection/ThingsYouDontWantToMissMain";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 100 });

     setTimeout(() => {
       setIsLoading(false);
     }, 6500);

     setTimeout(() => {
       setShowPage(true);
     }, 5000);
  }, [showPage]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {showPage && (
        <>
          {/* Put all sections here*/}
          <Menu></Menu>
          <NewHero></NewHero>
          <WhatIsDevfest></WhatIsDevfest>
          <WeAreSpeakingLouderMain></WeAreSpeakingLouderMain>
          <ThemesSection></ThemesSection>
          <AllAccessPass></AllAccessPass>
          <ThingsYouDontWantToMissMain></ThingsYouDontWantToMissMain>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default App;
