import React from "react";
import Headingp from "../components/Headingp";
import Detailsp from "../components/Detailsp";
// import Name from '../components/Name'
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import image from "../image/login.png";

function login() {
  return (
    <>
      <div className="bbb">
      <nav className="navbarp" data-aos="zoom-in">
        <a className="navbar-brand" href="/Home">
          <img
            // className="imagei"
            src={image}
            // width="30"
            // height="30"
            alt="aa"
          />
        </a>
        {/* </a> */}
      </nav>
        <Headingp />
        <Detailsp />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default login;
