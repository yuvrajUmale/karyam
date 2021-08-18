// import { Details } from '@material-ui/icons'
import React from 'react'
import LandingPage from './LandingPage'
import Details from './Details'
import Footer from '../components/Footer'
// import job from './Job';
import Job from './Job';
function Home() {
    return (
        <div>
            <LandingPage/>
            <Job/>
            {/* <Details/> */}
            <Footer/>
        </div>
    )
}

export default Home;
