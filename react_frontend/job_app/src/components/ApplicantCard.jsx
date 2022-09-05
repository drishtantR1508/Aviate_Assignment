import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ApplicantDetail from "./ApplicantDetail";
const ApplicantCard = ({
  applicant: {
    candidate,
    contact,
    email,
    id,
    job_type,
    message,
    resume,
    skills,
    status,
  },
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card  ">
        <div>
          <h5 className="card-header border-info ">
            <span className="fa fa-user"></span>

            {" " + candidate}
          </h5>
          <div className="card-body">
            <h6 className="card-title">
              <i className="fa fa-tags">{" " + job_type}</i>
            </h6>
            <p className="card-text text-muted">
              {message.slice(0, 300) + "..."}
              <span className="text-primary">
                click expand to open details!
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="d-inline-block float-left pl-2 pb-2">
            <button
              onClick={() => {
                navigate(`/applications/${id}`);
              }}
              className="btn btn-success btn-sm"
            >
              Expand
            </button>
          </div>

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
      </div>
      <br />
    </>
  );
};
export default ApplicantCard;
