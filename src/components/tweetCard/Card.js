import React from "react";
import "./TweetCard.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import Twitter from "../../assets/tweetCard/Twitter.png";
import Retweet from "../../assets/tweetCard/Retweet.png";
import Share from "../../assets/tweetCard/Share.png";
import Message from "../../assets/tweetCard/Message.png";
import Like from "../../assets/tweetCard/Like.png";
import Profile from "../../assets/tweetCard/Profile.jpg";

export const Card = ({ tweet }) => {
  return (
    <>
      <div
        className="card-container"
        style={{ background: useColorModeValue("white", "black") }}
      >
        <img alt="img" src={Profile} className="profile" />
        <div className="content">
          <div className="name_and_date">
            <span
              className="name"
              style={{ color: useColorModeValue("black", "white") }}
            >
              Stephane P
            </span>
            <div>
              <span className="id">@stephane_pop</span>
              <span
                className="follow"
                style={{ color: "#03a9f4", fontWeight: "bold" }}
              >
                Follow
              </span>
            </div>
          </div>
          <div
            className="tweet_text"
            style={{ color: useColorModeValue("black", "white") }}
          >
            {tweet}
          </div>
          {/* <div className="retweets-likes">
            <span
              style={{
                color: useColorModeValue("black", "white"),
                fontWeight: "bold",
              }}
            >
              101
            </span>
            <span> Retweets </span>
            <span
              style={{
                color: useColorModeValue("black", "white"),
                fontWeight: "bold",
              }}
            >
              &nbsp; 101
            </span>
            <span> Likes </span>
          </div>
          <div className="actions">
            <ul className="actions_list">
              <li>
                <img className="twitter-card-img" src={Message} alt="message" />
              </li>
              <li>
                <img className="twitter-card-img" src={Retweet} alt="retweet" />
              </li>
              <li>
                <img className="twitter-card-img" src={Like} alt="like" />
              </li>
              <li>
                <img className="twitter-card-img" src={Share} alt="share" />
              </li>
            </ul>
          </div> */}
          <span className="more_options">
            <img className="twitter-card-img" src={Twitter} alt="icon" />
          </span>
        </div>
      </div>
    </>
  );
};
