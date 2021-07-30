import React from "react";
// import Button from "../components/Button";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if(firstName,lastName)
  };

  return (
    <>
      <section>
        <div className="LandingPage">
          {/* heading */}
          <div className="heading">
            <h1>Job portal</h1>
          </div>
          {/* button */}
          <div className="container d-flex justify-content-center">
            <Form>
              <Form.Control
                className=""
                type="text"
                placeholder="Search for job title"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link to="/details">
                <Button
                  onClick={handleSubmit}
                  className="mt-3"
                  variant="primary"
                  type="submit"
                >
                  search
                </Button>
              </Link>
            </Form>
          </div>
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
      </section>
    </>
  );
}

export default LandingPage;
