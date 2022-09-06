import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./globalVariables";

const ApplyForJob = () => {
  const url = global.API_URI + "/api/applications/";
  const [data, setData] = useState({
    candidate: "",
    job_type: "",
    message: "",
    contact: "",
    email: "",
    skills: "",
    address: "",
  });
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        candidate: data.candidate,
        job_type: data.job_type,
        message: data.message,
        contact: data.contact,
        email: data.email,
        skills: data.skills,
        address: data.address,
      })
      .then((response) => {
        console.log(response.data);
      });

    alert("Applied Sucessfully");
    navigate(`/applications/`);
  };

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };
  return (
    <div className="container jumbotron mt-5">
      <h1 className="text-center">Apply for the Job post here</h1>
      <br />
      <form onSubmit={(e) => submit(e)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            {/* <label for="candidate">Name</label> */}
            <input
              onChange={(e) => handle(e)}
              value={data.candidate}
              type="text"
              className="form-control"
              id="candidate"
              placeholder="Enter Your full name here..."
            />
          </div>
          <div className="form-group col-md-6">
            {/* <label for="contact">Contact</label> */}
            <input
              onChange={(e) => handle(e)}
              value={data.contact}
              type="text"
              className="form-control"
              id="contact"
              placeholder="Contact No..."
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            {/* <label for="email">Email</label> */}
            <input
              onChange={(e) => handle(e)}
              value={data.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            {/* <label for="skills">Skills</label> */}
            <input
              onChange={(e) => handle(e)}
              value={data.skills}
              type="text"
              className="form-control"
              id="skills"
              placeholder="Enter Your Skills separated by space..."
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            {/* <label for="job_type">Job Type</label> */}
            <select
              onChange={(e) => handle(e)}
              value={data.job_type}
              id="job_type"
              className="form-control"
            >
              <option selected>Choose Job Type...</option>
              <option>Software Engineer</option>
              <option>Full Stack Engineer</option>
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option>Data Scientist</option>
              <option>Devops Engineer</option>
              <option>Machine Learning Engineer</option>
              <option>Product Manager</option>
              <option>Business Analyst</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          {/* <label for="address">Address</label> */}
          <input
            onChange={(e) => handle(e)}
            value={data.address}
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Your Address"
          />
        </div>
        <div className="form-group">
          {/* <label for="message">Message</label> */}
          <input
            onChange={(e) => handle(e)}
            value={data.message}
            type="text"
            className="form-control"
            id="message"
            placeholder="Why do you think you should be hired for?"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForJob;
