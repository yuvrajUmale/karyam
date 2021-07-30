import React  from "react";
// import Qualification from "../data";
// import { DropDownList } from "@progress/kendo-react-dropdowns";

function Dropdown() {
//   const qualification = [
//     {
//       text: "10th",
//       id: 1,
//     },
//     {
//       text: "12th Arts",
//       id: 2,
//     },
//     {
//       text: "12th Commerce",
//       id: 3,
//     },
//     {
//       text: "12th Science",
//       id: 4,
//     },
//     {
//       text: "Diploma",
//       id: 5,
//     },
//     {
//       text: "Under Graduate",
//       id: 6,
//     },
//     {
//       text: "PG/MBA/ME/MTech",
//       id: 7,
//     },
//   ];
//   const [state, setState] = useState({
//     value: {
//       text: "10th",
//       id: 1,
//     },
//   });

//   const handleChange = (event) => {
//     setState({
//       value: event.target.value,
//     });
//   };
  return (
    <div>
      <div className="example-config">
        {/* Selected Value: {JSON.stringify(state.value)} */}
      </div>
      <Dropdown className="mt-3">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Highest qualification
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Dropdown.Item href="#/action-1">{state.value}</Dropdown.Item> */}
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropdown;
