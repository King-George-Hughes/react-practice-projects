import React from "react";

const Content = (props) => {
  return (
    <div className="card w-100 mt-3 p-3 border-0">
      <div className="row">
        <div className="col-4">
          <img
            style={{ objectFit: "cover", borderRadius: 7 }}
            className="w-100 h-100"
            src={props.data.img}
            alt=""
          />
        </div>
        <div className="col-8">
          <p className="m-0">
            <span className="h6 me-2">{props.data.country}</span>{" "}
            <span className="text-muted small text-decoration-underline">
              View on Google Maps
            </span>
          </p>
          <h1 className="mb-3">{props.data.location}</h1>
          <p className="fw-bold small mb-0">{props.data.date}</p>
          <p className="small text-muted">{props.data.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
