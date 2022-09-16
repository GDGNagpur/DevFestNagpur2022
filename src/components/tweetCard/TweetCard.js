import React from "react";
import { useMediaQuery } from "react-responsive";
import { Card } from "./Card";
import "./TweetCard.css";

const TweetCard = () => {
  const [index, setIndex] = React.useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const arr = [
    {
      s1: "Simply amazing! It was my first ever devfest and I loved the way it was organized and conveyed. Listening and learning from so many tech mavens who share their passion and knowledge for the technologies was overwhelming. The workshops and hands-on sessions were star of the conference for me.",
      s2: "It was a great experience for me as a speaker at DevFest Nagpur'22. I was fluttered by the excitement and engagement that this enormous and lively crowd of over 2000 people had. Meeting my fellow speakers with such wide spectra of knowledge and passion truely lighted up the event with flames of emerging technologies and potential.",
    },
    {
      s1: '"Best tech conference I have attended in a while",  learned about the upcoming and trending technologies like AI, ML, VR, crowdsource, and more.Being able to meet withdraw different professionals from around and learn their tricks was incredibly helpful. Super great content, brilliant knowledge-share, great networking. Lots of great takeaways.',
      s2: "This was the inaugural DevFest of Nagpur, I liked the way the conference was organized. I was here this time talking about the new features of android10 for developers. Amazed seeing the elated, eager crowd and very passionate and erudite fellow speakers.It was a splendid event, both in terms of intellectual quality and the organization.",
    },
  ];
  const arr1 = [
    "Simply amazing! It was my first ever devfest and I loved the way it was organized and conveyed. Listening and learning from so many tech mavens who share their passion and knowledge for the technologies was overwhelming. The workshops and hands-on sessions were star of the conference for me.",
    "It was a great experience for me as a speaker at DevFest Nagpur'22. I was fluttered by the excitement and engagement that this enormous and lively crowd of over 2000 people had. Meeting my fellow speakers with such wide spectra of knowledge and passion truely lighted up the event with flames of emerging technologies and potential.",
    '"Best tech conference I have attended in a while",  learned about the upcoming and trending technologies like AI, ML, VR, crowdsource, and more.Being able to meet withdraw different professionals from around and learn their tricks was incredibly helpful. Super great content, brilliant knowledge-share, great networking. Lots of great takeaways.',
    "This was the inaugural DevFest of Nagpur, I liked the way the conference was organized. I was here this time talking about the new features of android10 for developers. Amazed seeing the elated, eager crowd and very passionate and erudite fellow speakers.It was a splendid event, both in terms of intellectual quality and the organization.",
  ];

  const delay = 10000;

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === (isTabletOrMobile ? arr1.length : arr.length) - 1
            ? 0
            : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);
  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {!isTabletOrMobile
            ? arr.map((content) => {
                return (
                  <div className="slide">
                    <div>
                      <div style={{ marginRight: "20px", marginLeft: "20px" }}>
                        <Card tweet={content.s1}></Card>
                      </div>
                      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                        <Card tweet={content.s2}></Card>
                      </div>
                    </div>
                  </div>
                );
              })
            : arr1.map((content) => {
                return (
                  <div className="slide">
                    <div>
                      <Card tweet={content}></Card>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="slideshowDots">
          {!isTabletOrMobile
            ? arr.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))
            : arr1.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
        </div>
      </div>
    </>
  );
};

export default TweetCard;
