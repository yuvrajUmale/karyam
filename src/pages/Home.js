// import { Details } from '@material-ui/icons'
// import React from 'react'
// import LandingPage from './LandingPage'
// import Details from './Details'
// import Footer from '../components/Footer'
// // import job from './Job';
// import Job from './Job';
// import logout from '../pages/auth/Logout';
// import { Link } from 'react-router-dom';
// function Home() {
//     return (
//         <div>
//             <Link to="/logout">Logout</Link>
//             <LandingPage/>
//             <Job/>
//             {/* <Details/> */}
//             <Footer/>
//         </div>
//     )
// }

// export default Home;
import React, { Component } from "react";
import LandingPage from "./LandingPage";
import Details from "./Details";
import Footer from "../components/Footer";
// import job from './Job';
import Job from "./Job";
import logout from "../pages/auth/Logout";
import { Link, Redirect } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class Home extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token === null){
            loggedIn= false
        }
        this.state={
            loggedIn
        }
    }
  render() {
      if(this.state.loggedIn === false){
          return <Redirect to="/"/>
      }
    return (
      <div>
        <Link to="/logout"><ArrowBackIcon style={{ fontSize: 50 }}/></Link>
        <LandingPage />
        <Job />
        {/* <Details/> */}
        <Footer />
      </div>
    );
  }
}
