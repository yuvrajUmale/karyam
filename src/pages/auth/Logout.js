import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron} from "reactstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div >
                <Jumbotron>
                <h1 className="logout-user"> logout successfull</h1>
                <Link to="/"><ArrowBackIcon style={{ fontSize: 50 }}/></Link>
                </Jumbotron>
            </div>
        )
    }
}
