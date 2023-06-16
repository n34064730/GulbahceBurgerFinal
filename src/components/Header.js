import { useState } from "react";
import "./Header.css";
import AboutUs from "./details/AboutUs";
import BasketCart from "./UI/BasketCart";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const headerHandler = () => {
    navigate("/");
  };

  const [showUs, setShowUs] = useState(false);
  const aboutUsHandler = () => {
    setIsClicked((prevClicked) => !prevClicked);
    setShowUs(!showUs);
  };
  const basketHandler = () => {
    navigate("/basket");
  };

  return (
    <>
      <div className={"head"}>
        <div className="head-side">
          <button className="heading" onClick={headerHandler}>
            Gülbahçe Burger
          </button>{" "}
          {window.location.href === "http://localhost:3000/" && (
            <>
              <button
                className={`abt`}
                onClick={aboutUsHandler}
                style={{ color: isClicked ? "#eb00ff" : "" }}
              >
                About Us
              </button>
            </>
          )}
        </div>

        <div className="side">
          {window.location.href !== "http://localhost:3000/basket" && (
            <BasketCart onClick={basketHandler} />
          )}
        </div>
      </div>
      {showUs && window.location.href === "http://localhost:3000/" && (
        <AboutUs />
      )}
    </>
  );
};

export default Header;
