import "./Footer.css";
import { useState } from "react";

import ContactInfo from "./details/ContactInfo";
import Location from "./details/Location";

const Footer = () => {
  const extra = [
    {
      address: "+90 123 456 77788",
      picture: require("../components/pictures/extra_pictures/phone_emblem.jpg"),
    },
    {
      address: "instagram.com/gbahceburger",
      picture: require("../components/pictures/extra_pictures/instagram_emblem.webp"),
    },
    {
      address: "twitter.com/gbahceburger",
      picture: require("../components/pictures/extra_pictures/twitter_emblem.jpg"),
    },
    {
      address: "gbahceburger@gmail.com",
      picture: require("../components/pictures/extra_pictures/mail_emblem.png"),
    }
  ];

  const [showLoc, setShowLoc] = useState(false);
  const [showContact, setShohContact] = useState(false);

  const locationHandler = (event) => {
    setShowLoc(!showLoc);
  };
  const contactInfoHandler = (event) => {
    setShohContact(!showContact);
  };

  return (
    <>
      <footer >
        <button
          onClick={contactInfoHandler}
          style={{ color: showContact ? "#eb00ff" : "" }}
        >
          Contact Info
        </button>
        <button
          onClick={locationHandler}
          style={{ color: showLoc ? "#eb00ff" : "" }}
        >
          Location
        </button>
      </footer>
      {showContact && (
        <ContactInfo extra_pictures={extra} />
      )}
      {showLoc && (
        <Location />
      )}
    </>
  );
};

export default Footer;
