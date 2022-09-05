import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Applications from "./components/Applications";
import ApplyForJob from "./components/AppyForJob";
import ApplicantDetail from "./components/ApplicantDetail";
import "./components/globalVariables";
// const API_URL = "http://127.0.0.1:8000/api/applications/";

const App = () => {
  // const API_URL = "http://127.0.0.1:8000/api/applications/";
  const API_URL = global.API_URI + "/api/applications/";
  // const BASE_URI = "http://localhost:3000";

  const [applicants, setApplicants] = useState([]);

  // const getUserInfo = async () => {
  //   fetch("http://localhost:8000/api/applications/", { mode: "no-cors" })
  //     .then((response) => {
  //       console.log(response);
  //       return response.data;
  //     })
  //     .then((data) => {
  //       setApplicant(data);
  //     });
  // };
  useEffect(() => {
    // getUserInfo();
    axios.get(API_URL).then((response) => {
      setApplicants(response.data);
    });
  }, [API_URL]);

  // console.log("hello");
  // console.log("Applicant : ", applicants);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/applications/" element={<Applications />}></Route>
        <Route path="/applications/:id" element={<ApplicantDetail />}></Route>
        <Route exact path="/apply/" element={<ApplyForJob />}></Route>
      </Switch>
    </Router>
  );
};

export default App;
