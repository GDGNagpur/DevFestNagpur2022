import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
import Slider from "./components/slider/Slider";

const App = () => {
  //todo:change this state to false
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 100 });

    setTimeout(() => {
      setIsLoading(false);
    }, 6500);

    setTimeout(() => {
      setShowPage(true);
    }, 5000);
  }, [showPage]);
 //todo:change this state to true
  const [isLoading, setIsLoading] = useState(false);
  const HomeView = () => {
    return (
      <>
        <Menu></Menu>
        <NewHero></NewHero>
        <WhatIsDevfest></WhatIsDevfest>
        <WeAreSpeakingLouderMain></WeAreSpeakingLouderMain>
        <ThemesSection></ThemesSection>
        <AllAccessPass></AllAccessPass>
        <ThingsYouDontWantToMissMain></ThingsYouDontWantToMissMain>
        <Footer></Footer>
      </>
    )
  }
  return (
    <div>
      {isLoading && <Loader></Loader>}
      {showPage && (
        <>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="slider" element={<Slider />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
