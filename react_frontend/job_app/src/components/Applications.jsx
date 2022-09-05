import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicantCard from "./ApplicantCard";

const API_URL = "http://127.0.0.1:8000/api/applications/";

const Applications = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setApplicants(response.data);
    });
  }, [API_URL]);

  console.log("Applicant : ", applicants);
  return (
    <div className="container jumbotron">
      {applicants.map((applicant) => (
        <ApplicantCard applicant={applicant} />
      ))}
    </div>
  );
};

export default Applications;
