import React from "react";
import Butt from "react-bootstrap/Button";
// import input from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import FormControl from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

function Button() {
  return (
    <div>
        <div className="buttonControl">
          <Form>
            <Row>
              <Col className="inputBox">
                <Form.Control type="email" placeholder="Search for job title" />
              </Col>
              <Col>
                <Butt as="input" type="submit" value="Submit" />
              </Col>
            </Row>
          </Form>
          {/* <input type="text" className="inputb" ></input> */}
        </div>
    </div>
  );
}

export default Button;
