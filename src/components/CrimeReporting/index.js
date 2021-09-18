import React from 'react'
import Landing from '../crimeLanding'
import SecondPage from '../crimeRepoSecond'
import CrimeRepoForm from '../crimeRepoForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CrimeReporting = () => {
    return (
        <>
       <Router>
        <Switch>
          <Route exact path="/CrimeReporting" component={Landing} />
          <Route exact path="/crimereporting/filecomplain" component={SecondPage} />
          {/* <Route exact path="/crimereporting/form" component={CrimeRepoForm} /> */}
        </Switch>
      </Router>
        </>
    )
}
export default CrimeReporting