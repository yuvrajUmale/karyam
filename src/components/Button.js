import React from "react";
import Butt from "react-bootstrap/Button";
// import input from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// import FormControl from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

function Button() {
  const []

  return (
    <div>
      <div className="buttonControl">
        <Form>
          <Row>
            <Col className="inputBox">
              <Form.Control
                type="text"
                placeholder="Search for job title"
                id="search"
                value={search}
                onChange={handleChange}
              />
            </Col>
            <Link to="/details">
              <Col>
                <Butt as="input" type="submit" value="Submit" />
              </Col>
            </Link>
          </Row>
        </Form>
        {/* <input type="text" className="inputb" ></input> */}
      </div>
    </div>
  );
}

export default Button;
