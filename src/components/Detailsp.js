import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function Detailsp() {
  const [validated, setValidated] = useState(false);
  // const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    jid: "",
    firstName:"",
    LastName:"",
    EmaMobileNumberMobileNumber:"",
    name_of_the_company: "",
    website_link: "",
    logo_name: "",
    job_profile: "",
    job_description: "",
    job_category: "",
  });

  function handleInputs(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
    // setUser("");
  }

  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // alert("job posted successfully");
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const {
        jid="1",
        name_of_the_company,
        website_link,
        logo_name,
        job_profile,
        job_description,
        job_category,
      } = user;
      const response = await fetch("https://mp-job-portal.herokuapp.com/jobd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jid,
          name_of_the_company,
          website_link,
          logo_name,
          job_profile,
          job_description,
          job_category,
        }),
      }).then((result) => {
        result.json().then((resp) => {
          console.warn("resp", resp);
          alert("job posted successfully");
        });
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="hero2">
      <div className="container-fluid">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="headingl">Employer Details</h1>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="LastName"
                id="LastName"
                value={user.LastName}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email id</Form.Label>
              <Form.Control
                type="text"
                // className="is-valid"
                placeholder="Enter email id"
                name="Email"
                id="Email"
                value={user.Email}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                // className="is-valid"
                placeholder="+91 "
                name="MobileNumber"
                id="MobileNumber"
                className="mb-5"
                value={user.MobileNumber}
                onChange={handleInputs}
                required
                defaultValue="name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>


          <h1 className="headingl mt-5">About Company</h1>
          <Row className="mb-3">
            <Form.Group as={Col}>
              {/* <Form.Label></Form.Label> */}
              <Form.Control
                disabled
                type="text"
                className="invisible"
                placeholder="Enter id"
                name="jid"
                id="jid"
                value={user.jid}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name of company *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="name_of_the_company"
                id="name_of_the_company"
                value={user.name_of_the_company}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Website link</Form.Label>
              <Form.Control
                type="text"
                // className="is-valid"
                placeholder="Website link if any"
                name="website_link"
                id="website_link"
                value={user.website_link}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Logo</Form.Label>
              <Form.Control
                type="text"
                // className="is-valid"
                placeholder=""
                name="logo_name"
                id="logo_name"
                value={user.logo_name}
                onChange={handleInputs}
                required
                defaultValue="name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Button className="mb-5 mt-2" variant="primary" type="submit">
                upload
              </Button>
            </Form.Group>
          </Row>
          <h1 className="headingl">Job Description</h1>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Job Profile</Form.Label>
              <Form.Control
                type="text"
                // className="is-valid"
                placeholder="Enter first name"
                name="job_profile"
                id="job_profile"
                value={user.job_profile}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Job Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job category"
                name="job_category"
                id="job_category"
                value={user.job_category}
                onChange={handleInputs}
                required
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter job Description"
                name="job_description"
                id="job_description"
                value={user.job_description}
                onChange={handleInputs}
                required
                // defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
          <Button variant="primary" type="submit " onClick={handleClick}>
            Post Job
          </Button>
      </div>
    </div>
  );
}

export default Detailsp;
