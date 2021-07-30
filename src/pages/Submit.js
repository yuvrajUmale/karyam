import React, { useState } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Submit() {
  const history = useHistory();
  const [btn, setbtn] = useState(false);

  function handleSubmit(e) {}

  return (
    <div>
      <div>
        <Jumbotron>
          <h1 className="display-3">Congratulation</h1>
          <p className="lead">Details Submitted Successfully</p>
          <p className="lead">
            <Link to='/details'>
              <Button color="primary">
                fill another form
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
      {/* <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Congratulation</h1>
          <p className="lead">
          Details Submitted Successfully
          </p>
        </Container>
      </Jumbotron> */}
    </div>
  );
}

export default Submit;
