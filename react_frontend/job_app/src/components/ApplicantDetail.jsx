import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./globalVariables";

const ApplicantDetail = () => {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);
  const url = global.API_URI + "/api/applications/" + id + "/";
  useEffect(() => {
    axios.get(global.API_URI + "/api/applications/" + id).then((response) => {
      setApplicants(response.data);
    });
  }, [global.API_URI + "/api/applications/" + id]);

  const [status, setStatus] = useState(applicants.status);
  useEffect(() => {
    setStatus(applicants.status);
  }, [applicants.status]);

  const [data, setData] = useState({
    candidate: applicants.candidate,
    job_type: applicants.job_type,
    message: applicants.message,
    contact: applicants.contact,
    email: applicants.email,
    skills: applicants.skills,
    address: applicants.address,
    status: "",
  });
  const submit = (e) => {
    e.preventDefault();
    axios
      .put(url, {
        status: data.status,
      })
      .then((response) => {
        console.log(response.data);
      });

    setStatus(data.status);
  };

  const notify = () => alert("Changed Status Sucessfully");
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };

  return (
    <>
      <div className="jumbotron container  mt-5">
        <h1 className="text-center text-secondary">
          <span className="fa fa-user"></span>
          {"   " + applicants.candidate}
        </h1>
        <hr />
        <i className="fa fa-tags text-info">{" " + applicants.job_type}</i>
        <hr />
        <h6 className="text-info">
          <span className="fa fa-graduation-cap"></span> Skills :{" "}
          <span className="text-dark  bg-light">{applicants.skills}</span>
        </h6>
        <hr />
        <div className="float-left d-inline-block">
          <span className="fa fa-envelope text-primary">
            {" " + applicants.email}
          </span>
        </div>
        <div className="float-right d-inline-block">
          <span className="fa fa-mobile text-info">
            {" " + applicants.contact}
          </span>
        </div>
        <br />

        <hr />
        <div className="container pl-5 pr-5">
          <i className="text-muted">{applicants.message}</i>
        </div>
        <hr />
        <i className="fa fa-home">{" " + applicants.address}</i>
        <div className="d-inline-block float-right pr-2 pb-2">
          {status == "Applied" ? (
            <a href="#" className="btn btn-light btn-sm text-warning">
              {status}
            </a>
          ) : status == "Accepted" ? (
            <a href="#" className="btn btn-light btn-sm text-success">
              {status}
            </a>
          ) : (
            <a href="#" className="btn btn-light btn-sm text-danger">
              {status}
            </a>
          )}
        </div>
      </div>
      <br />
      <div className="jumbotron container">
        <h1 className="text-center text-muted">Change Job Status</h1>
        <form onSubmit={(e) => submit(e)}>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <select
                onChange={(e) => handle(e)}
                value={data.status}
                className="custom-select mr-sm-2"
                id="status"
              >
                <option selected>Choose...</option>
                <option value="Applied">Applied</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="col-auto my-1"></div>
            <div className="col-auto my-1">
              <button
                type="submit"
                // onClick={notify}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicantDetail;
