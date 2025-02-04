import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/tri.png" alt="" className="convener-logo" style={{ width: "75px", height: "75px", alignItems:"center"}} />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/giridharann.jpg"
              alt="Giridharan - Assistant professor"
            />
            <h1 className="convener-name">Mr. S. Giridharan</h1>
            <h1 className="convener-position">
              Assistant Professor - Cyber Security
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/RAJBHAI.jpg"
              alt="Rajkumar - Assistant professor"
            />
            <h1 className="convener-name"> Mr. E. Rajkumar</h1>
            <h1 className="convener-position">
              Assistant Professor - Cyber Security
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/nandhashree.webp"
              alt="Nandhashree - Assistant professor"
            />
            <h1 className="convener-name"> Ms. K.R. Nandhashree</h1>
            <h1 className="convener-position">
              Assistant Professor - Cyber Security
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
