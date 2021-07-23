import React from "react";
import Button from "../components/Button";


function LandingPage() {
  return (
    <div className="LandingPage">
      {/* heading */}
      <div className="heading">
        <h1>Job portal</h1>
      </div>
      {/* button */}
      <div >
        <Button />
      </div>
      {/* search examples */}
      <div className="examples">
        <h2 className="example"> Example: </h2>
        <div className="eg">
          <ul>
            <li>Front-End</li>
            <li>Back-End</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
