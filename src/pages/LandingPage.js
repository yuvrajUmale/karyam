import React from "react";
// import Button from "../components/Button";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function LandingPage() {
  return (
    <>
      <section>
        <div className="LandingPage">
          {/* heading */}
          <div className="heading">
            <h1>Job portal</h1>
          </div>
          {/* button */}
          <div>
            <Form>
              {/* <Row>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Search for job title"
                  />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    {" "}
                    search
                  </Button>
                </Col>
              </Row> */}
              <Form.Control type="text" placeholder="Search for job title" />
              <Button variant="primary" type="submit">search</Button>
            </Form>
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
      </section>
    </>
  );
}

export default LandingPage;
