import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="companydata">
      <h6>{props.id}</h6>
      <h1>{props.Name}</h1>
      <h2>{props.Role}</h2>
      <p>{props.Description}</p>
      {/* <button type="button">submit</button> */}
      <Link to="/details">
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </Link>
    </div>
  );
}

export default Card;
