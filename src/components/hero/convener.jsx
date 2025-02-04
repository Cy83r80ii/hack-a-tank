import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/tri.png" alt="" className="convener-logo" style={{ width: "75px", height: "75px", alignItems:"center"}} />
          <h1 className="convener-title-name">Convener</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/hod.jpg"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Dr. M. Senthil Kumar</h1>

            <h1 className="convener-position">
              Head Of Department - Cyber Security{" "}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
