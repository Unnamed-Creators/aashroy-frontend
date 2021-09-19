import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./components/shared/Loader/index.js";
// import "react-toastify/dist/ReactToastify.css";
const Home = React.lazy(() => import("./pages/Home"));
const NGO = React.lazy(() => import("./pages/NGO"));
const Homeless = React.lazy(() => import("./pages/homelessList"));
const DonationAmount = React.lazy(() => import("./pages/Donation"));
const MainUi = React.lazy(() => import("./pages/MainUi"));
const RegSuccess = React.lazy(() => import("./pages/RegSuccess/RegSuccess"));
const NgoReg = React.lazy(() => import("./pages/NgoReg"));
const NAReportOne = React.lazy(() => import("./pages/NAReportOne"));
const NAReportRest = React.lazy(() => import("./pages/NAReportRest"));
const CrimeReporting = React.lazy(() => import("./pages/CrimeReporting"));
const CrimeForm = React.lazy(() => import("./pages/CrimeRepoForm"));
const LoginUI = React.lazy(() => import("./pages/LoginUI"));
const JoinAs = React.lazy(() => import("./pages/joinAs"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const User = React.lazy(() => import("./pages/userDash"));
const Admin = React.lazy(() => import("./pages/admin"));

require("dotenv").config();

export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    default:
      toast.info(msg);
      break;
  }
};

function App() {
  toast.configure({ hideProgressBar: true });
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ngo" component={NGO} />
          <Route exact path="/homelessList" component={Homeless} />
          <Route exact path="/totalDonation" component={DonationAmount} />
          <Route exact path="/main" component={MainUi} />
          <Route exact path="/regsuccess" component={RegSuccess} />
          <Route exact path="/ngoregistration" component={NgoReg} />
          <Route exact path="/nareportone" component={NAReportOne} />
          <Route exact path="/nareportrest" component={NAReportRest} />
          <Route exact path="/crimereporting" component={CrimeReporting} />
          <Route exact path="/crimereporting/form" component={CrimeForm} />
          <Route exact path="/loginUI" component={LoginUI} />
          <Route exact path="/joinAs" component={JoinAs} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/user" component={User} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
