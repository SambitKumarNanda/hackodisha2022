import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ListHospital = (props) => {
  const hospitals = props.hospitalList;
  // console.log(hospitals);
  const cards = [];
  if (!props.pin) {
    hospitals.forEach((hospital) => {
      cards.push(
        <div className="col">
          <div className="card h-100">
            <img
              src={hospital.hospital_image}
              className="card-img-top"
              alt={hospital.hospital_name}
            />
            <div className="card-body">
              <h5 className="card-title">{hospital.hospital_name}</h5>
              <p className="card-text text-black-50">
                {hospital.hospital_address}
              </p>
              <p className="card-text text-black-50">
                {`Bed Count : ${hospital.bed_count}`}
              </p>
            </div>
            <div className="card-footer">
              {/* <a href="/" className="col-md-5 col-xs-6 btn"><i className="fa fa-medkit" aria-hidden="true"></i> Make Appointment </a>
                <a href="Javascipt:void(0)" className="d-none d-md-inline col-md-1 text-decoration-none"> || </a> */}
              <NavLink
                to="/find-hospital/details"
                className="col-md-5 col-xs-6 btn text-dark"
              >
                {" "}
                <i className="fa fa-external-link" aria-hidden="true"></i> More
                Details
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  } else {
    console.log(props.pin);
    hospitals
      .filter((hospital) => {
        return hospital.hospital_pincode == props.pin;
      })
      .forEach((hospital) => {
        cards.push(
          <div className="col">
            <div className="card h-100">
              <img
                src={hospital.hospital_image}
                className="card-img-top"
                alt={hospital.hospital_name}
              />
              <div className="card-body">
                <h5 className="card-title">{hospital.hospital_name}</h5>
                <p className="card-text text-black-50">
                  {hospital.hospital_address}
                </p>
              </div>
              <div className="card-footer">
                {/* <a href="/" className="col-md-5 col-xs-6 btn"><i className="fa fa-medkit" aria-hidden="true"></i> Make Appointment </a>
                <a href="Javascipt:void(0)" className="d-none d-md-inline col-md-1 text-decoration-none"> || </a> */}
                <NavLink
                  to="/find-hospital/details"
                  className="col-md-5 col-xs-6 btn text-dark"
                >
                  {" "}
                  <i
                    className="fa fa-external-link"
                    aria-hidden="true"
                  ></i>{" "}
                  More Details
                </NavLink>
              </div>
            </div>
          </div>
        );
      });
  }
  console.log(cards);
  return (
    <div className="list-section">
      <p className="j-text">Search Results</p>
      <hr />
      <div className="p-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {cards}
      </div>
    </div>
  );
};

export default ListHospital;
