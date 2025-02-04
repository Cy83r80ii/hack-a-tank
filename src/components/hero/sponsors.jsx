import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsor
          <img src="/images/tri.png" alt="arrow-logo" style={{ width: "75px", height: "75px", alignItems:"center"}} />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/spon.png" alt="MYDBOPS" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://mydbops.com" target="_blank">
                  {" "}
                  MYDBOPS{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
