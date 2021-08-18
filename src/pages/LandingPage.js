import React from "react";
// import Button from "../components/Button";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from '../image/login.png'

function LandingPage() {
  const [search, setSearch] = useState("");
  const [isExpand, setExpand] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const getSearch = async () => {
  //   const response = await fetch("https://mp-job-portal.herokuapp.com/");
  //   const users = await response.json();
  //   console.log(users);
  //   setSearch(users);
  // };

  // useEffect(() => {
  //   getSearch();
  // },[]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if(firstName,lastName)

  };

  function expand() {
    setExpand(false);
  }

  return (
    <>
      <div className="LandingPage kenburns-top color-change-5x">
       
          <nav className="navbarp" data-aos="zoom-in">
            <a className="navbar-brand" href="/login">
              <img
              // className="imagei"
                src={image}
                // width="30"
                // height="30"
                alt="aa"
              />
            </a>
          </nav>
        
        {/* heading */}
        <div className="heading" data-aos="flip-up">
          <h1>Job Search</h1>
        </div>
        {/* button */}
        <div>
          <form className="d-flex justify-content-between formp">
            <input
              type="text"
              data-aos="fade-up"
              className="form-control inputText"
              // placeholder="Search for job title"
              {...(isExpand && { id: "search" })}
              onClick={expand}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* <span class="floating-label">Your email address</span> */}
            <Link to="/job">
              <button
                type="button"
                data-aos="slide-right"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                search
              </button>
            </Link>
          </form>
        </div>
        {/* <div className="container d-flex justify-content-center">
            <Form>
              <Form.Control
                className="" */}
        {/* //       type="text"
          //       placeholder="Search for job title"
          //       id="search"
          //       value={search}
          //       onChange={(e) => setSearch(e.target.value)}
          //     />
          //     <Link to="/details">
          //       <Button
          //         onClick={handleSubmit}
          //         className="mt-3"
          //         variant="primary"
          //         type="submit"
          //       >
          //         search
          //       </Button>
          //     </Link>
          //   </Form>
          // </div> */}
        {/* search examples */}
        <div className="examples">
          <h2 className="example"> Example: </h2>
          <div className="eg">
            <ul>
              <li>Front-End</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
