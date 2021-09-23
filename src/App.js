import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./components/shared/Loader/index.js";
import Bot from "./components/chatBot/index.js";
import DonateUI_photo2 from "./pages/DonateUI_photo2";
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
const LoginUser = React.lazy(() => import("./pages/loginUser"));
const LoginNGO = React.lazy(() => import("./pages/loginNGO"));
const LoginAdmin = React.lazy(() => import("./pages/LoginAdmin"));
const DonateUI = React.lazy(() => import("./pages/DonateUI"));
// const Details = React.lazy(() => import("./pages/Details"));
const DonateUI_2 = React.lazy(() => import("./pages/DonateUI_2"));
const Recipient = React.lazy(() => import("./pages/Recipient"));
const Successful = React.lazy(() => import("./pages/Successful"));
const DonateUI_3 = React.lazy(() => import("./pages/DonateUI_3"));
const DonateUI_photo1 = React.lazy(() => import("./pages/DonateUI_photo1"));
const DonateUIc_phpoto2 = React.lazy(() => import("./pages/DonateUI_photo2"));
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
        <Bot />
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
          <Route exact path="/loginUser" component={LoginUser} />
          <Route exact path="/loginNGO" component={LoginNGO} />
          <Route exact path="/loginAdmin" component={LoginAdmin} />

          <Route exact path="/donateUI" component={DonateUI} />
          {/* <Route exact path="/details" component={DonateUI} /> */}
          <Route exact path="/donateUI_2" component={DonateUI_2} />
          <Route exact path="/recipient" component={Recipient} />
          <Route exact path="/success" component={Successful} />
          <Route exact path="/donateUI_3" component={DonateUI_3} />
          <Route exact path="/donateUI_photo1" component={DonateUI_photo1} />
          <Route exact path="/donateUI_photo2" component={DonateUI_photo2} />

        

        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
