import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./components/shared/Loader/index.js";
// import "react-toastify/dist/ReactToastify.css";
const Home = React.lazy(() => import("./pages/Home"));
const MainUi = React.lazy(() => import("./pages/MainUi"));
const RegSuccess = React.lazy(() => import("./pages/RegSuccess/RegSuccess"));
const NgoReg = React.lazy(() => import("./pages/NgoReg"));
const NAReportOne = React.lazy(() => import("./pages/NAReportOne"));
const NAReportRest = React.lazy(() => import("./pages/NAReportRest"));

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
          <Route exact path="/main" component={MainUi} />
          <Route exact path="/regsuccess" component={RegSuccess} />
          <Route exact path="/ngoregistration" component={NgoReg} />
          <Route exact path="/nareportone" component={NAReportOne} />
          <Route exact path="/nareportrest" component={NAReportRest} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
