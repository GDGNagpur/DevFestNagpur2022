import React from 'react'
import NewHero from "../../components/newhero/NewHero";
import WeAreSpeakingLouderMain from "../../components/weAreSpeakingLouderSection/WeAreSpeakingLouderMain";
import WhatIsDevfest from "../../components/whatIsDevfest/WhatIsDevfest";
import AllAccessPass from "../../components/allAccessPass/AllAccessPass";
import ThemesSection from "../../components/themesSection/ThemesSection";
import ThingsYouDontWantToMissMain from "../../components/thingsYouDontWantToMissSection/ThingsYouDontWantToMissMain";
import TweetCard from "../../components/tweetCard/TweetCard";
import FAQs from "../../components/FAQs/FAQs";
import Venue from "../../components/venue/Venue";
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
    <div className={"layout-content"} >
      {" "}
      <NewHero></NewHero>
      <WhatIsDevfest></WhatIsDevfest>
      <Slider></Slider>
      <WeAreSpeakingLouderMain></WeAreSpeakingLouderMain>
      <ThemesSection></ThemesSection>
      <AllAccessPass></AllAccessPass>
      <ThingsYouDontWantToMissMain></ThingsYouDontWantToMissMain>
      <Venue></Venue>
      <TweetCard></TweetCard>
      <FAQs></FAQs>
    </div>
  );
}

export default Home