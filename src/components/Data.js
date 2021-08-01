import React from "react";
import { Form, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Submit from "../pages/Submit";
// import Dropdown from "./Dropdown";

// https://mp-job-portal.herokuapp.com/
// api.add_resource(show,'/')
// api.add_resource(job_description,'/jobd')
// api.add_resource(Candidate,'/candidate')

function Data() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setmobileNumber] = useState("");
  // const history = useHistory();
  const [validated, setValidated] = useState(false);
  // const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    // formHorizontalRadios1: "",
    // formHorizontalRadios2: "",
    // formHorizontalRadios3: "",
    // Gender: "",
    // qualification: "",
    gender: "",
    hightet_qualification: "",
    companyName: "",
    expectedJob: "",
    Address: "",
    Address2: "",
    City: "",
    state: "",
    Pincode: "",
    checkMe: "",
  });

  function handleInputs(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
    // setUser("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);

      const {
        firstName,
        lastName,
        email,
        mobileNumber,
        // formHorizontalRadios1,
        // formHorizontalRadios2,
        // formHorizontalRadios3,
        // Gender,
        // qualification,
        gender,
        hightet_qualification,
        companyName,
        expectedJob,
        Address,
        Address2,
        City,
        state,
        Pincode,
        checkMe,
      } = user;
      // const body = {
      //   firstName:,
      //   lastName:"lastName",
      //   email:"email",
      //   mobileNumber:"mobileNumber",
      //   formHorizontalRadios1:"",
      //   formHorizontalRadios2:"",
      //   formHorizontalRadios3:"",
      //   companyName:"",
      //   expectedJob:"",
      //   Address:"",
      //   Address2:"",
      //   City:"",
      //   States:"",
      //   Pincode:"",
      //   checkMe:"",
      // };
      const response = await fetch(
        "https://mp-job-portal.herokuapp.com/candidate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            mobileNumber,
            // formHorizontalRadios1,
            // formHorizontalRadios2,
            // formHorizontalRadios3,
            gender,
            hightet_qualification,
            companyName,
            expectedJob,
            Address,
            Address2,
            City,
            state,
            Pincode,
            checkMe,
          }),
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }

    // const res = await fetch("https://mp-job-portal.herokuapp.com/candidate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",

    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     mobileNumber,
    //     formHorizontalRadios1,
    //     formHorizontalRadios2,
    //     formHorizontalRadios3,
    //     companyName,
    //     expectedJob,
    //     Address,
    //     Address2,
    //     City,
    //     States,
    //     Pincode,
    //     checkMe
    //   })
    // });

    // const data = await res.json();

    // console.log(`success${data}`);

    // history.push('/submit')

    // setValidated(()=>{
    //   if(true){
    //     history.push("/submit");
    //   }
    // });

    // event.preventDefault();
  };

  return (
    <div className="container d-flex justify-content-around">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First name *</Form.Label>
            <Form.Control
              type="text"
              // className="is-valid"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleInputs}
              required
              defaultValue="name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              // className="is-valid"
              type="text"
              placeholder="Enter last Name"
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={handleInputs}
              defaultValue="lname"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInputs}
              defaultValue="email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Enter valid email id
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Mobile/Telephone number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="+91"
              name="mobileNumber"
              id="mobileNumber"
              value={user.mobileNumber}
              onChange={handleInputs}
              defaultValue="9137"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First name *</Form.Label>
            <Form.Control
              type="text"
              // className="is-valid"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleInputs}
              required
              defaultValue="name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              // className="is-valid"
              type="text"
              placeholder="Enter last Name"
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={handleInputs}
              defaultValue="lname"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row> */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender"
              name="gender"
              id="gender"
              value={user.gender}
              onChange={handleInputs}
              defaultValue="gender"
              required
            />
            <Form.Control.Feedback type="valid">
              looks good
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Highest qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter qualification"
              name="hightet_qualification"
              id="hightet_qualification"
              value={user.hightet_qualification}
              onChange={handleInputs}
              defaultValue=""
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* radio */}
        {/* <fieldset>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label as="legend" column sm={3}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  // name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  name="formHorizontalRadios1"
                  value={user.formHorizontalRadios1}
                  defaultValue="formHorizontalRadios"
                  // required
                  onChange={handleInputs}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios2"
                  id="formHorizontalRadios2"
                  defaultValue=""
                  // required
                  value={user.formHorizontalRadios2}
                  onChange={handleInputs}
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        {/* <Form.Check
                  type="radio"
                  label="Dont want to disclose"
                  name="formHorizontalRadios3"
                  id="formHorizontalRadios3"
                  defaultValue=""
                  // required
                  value={user.formHorizontalRadios3}
                  onChange={handleInputs}
                />
              </Col>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        {/* </Form.Group> */}

        {/* highest qualification */}
        {/* <Form.Group as={Col}>
              <Dropdown className="mt-3">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Highest qualification
                </Dropdown.Toggle>

                <Dropdown.Menu> */}
        {/* <Dropdown.Item href="#/action-1">{state.value}</Dropdown.Item> */}
        {/* <Dropdown.Item href="#/action-1">10th pass</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">12th Arts</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">12th Science</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">12th Commerce</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Diploma</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    Under Graduate
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-7">
                    1PG/MBA/ME/MTech
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
        {/* <Form.Label as="legend" column sm={3}>
                Highest qualification
              </Form.Label> */}

        {/* <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="10th Pass"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="12th Arts"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="12th Commerce"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="12th Science"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Diploma"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Under Graduate"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="PG/MBA/ME/MTech"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col> */}
        {/* new line */}
        {/* </Form.Group>
          </Row>
        </fieldset> */}

        {/* company experience */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name of Companies Worked earlier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company name"
              name="companyName"
              id="companyName"
              defaultValue=""
              required
              value={user.companyName}
              onChange={handleInputs}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Expected Natue of job</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: supervisor, helper"
              name="expectedJob"
              id="expectedJob"
              defaultValue="helper"
              required
              value={user.expectedJob}
              onChange={handleInputs}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 Main St"
            id="Address"
            name="Address"
            value={user.Address}
            defaultValue="xxx"
            required
            onChange={handleInputs}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apartment, studio, or floor"
            id="Address2"
            name="Address2"
            defaultValue="xxx2"
            required
            value={user.Address2}
            onChange={handleInputs}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="City"
              id="City"
              value={user.City}
              defaultValue="new"
              required
              onChange={handleInputs}
            />
          </Form.Group>

          {/* <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              id="States"
              name="States"
              value={user.States}
              onChange={handleInputs}
              required
            >
              <option>Choose...</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Banglore</option>
              <option>Bihar</option>
              <option>Delhi</option>
              <option>Thane</option>
              <option>Navi Mumbai</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Select required state
            </Form.Control.Feedback>
          </Form.Group> */}
          {/* <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              id="state"
              defaultValue="0000"
              required
              value={user.state}
              onChange={handleInputs}
            />
          </Form.Group> */}

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="state"
              name="state"
              id="state"
              value={user.state}
              onChange={handleInputs}
              defaultValue="00"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name="Pincode"
              id="Pincode"
              defaultValue="0000"
              required
              value={user.Pincode}
              onChange={handleInputs}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            id="checkMe"
            name="checkMe"
            value={user.checkMe}
            defaultValue=""
            required
            onChange={handleInputs}
          />
        </Form.Group>

        <Button
          className="mb-5"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Data;
