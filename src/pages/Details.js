import React from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
import Data from "../components/Data";
// import Card from "../components/Card"
// import Job from './Job';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Details() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <div>
      <Job />
    </div> */}
      <div className="detailsb" data-aos="fade">
        <div className="Dheading">
          <h1>User Details</h1>
        </div>
        <Data />
      </div>
    </>
  );
}

export default Details;
