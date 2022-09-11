import React from "react";
import { useState } from "react";
import "./css/style.css";
import ListHospital from "./ListHospital";
import { getHospitalList } from "../../api/hospitalHandler";

const FindHospital = () => {
  // eslint-disable-next-line
  const [errmsg, setErrmsg] = useState("");
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");

  const [hospitalList, setHospitalList] = useState([]);
  if (hospitalList.length === 0)
    getHospitalList().then((data) => {
      setHospitalList(data);
      // console.log(data);
    });
  const pincodeHandler = (event) => {
    setPin(event.target.value);
  };

  const hospitalNameHandler = (event) => {
    setName(event.target.value);
  };

  const searchItem = (event) => {
    if (pin.length !== 6 && name === "")
      setErrmsg("Enter 6 length Pincode or Hospital name");
    else setErrmsg("");
  };

  return (
    <div>
      <div className="jumbotron h-50 d-inline-block w-100" id="jumbotron">
        <div className="jumbotron-container mt-5">
          <h1 className="display-4">Search Hospital!</h1>
          <p className="lead">Feel better about finding healthcare!</p>
        </div>
      </div>

      <div id="searchSection">
        <h3>Find the best one you need</h3>
        {errmsg !== "" && <div className="alert alert-danger">{errmsg}</div>}
        <div className="inputSection row g-3">
          <div className="col-md-3 input-group">
            <span className="input-group-text fa fa-user-md"></span>
            <input
              type="Number"
              className="form-control"
              id="pincode"
              placeholder="Enter Pincode"
              onChange={pincodeHandler}
            />
          </div>
          <span className="j-text col-sm-1">OR</span>
          <div className="col-md-3 input-group">
            <span className="input-group-text fa fa-hospital-o"></span>
            <input
              type="text"
              className="form-control"
              id="hospitalName"
              placeholder="Enter Hospital Name"
              onChange={hospitalNameHandler}
            />
          </div>
          <div className=" d-grid">
            <button
              type="btn"
              className="btn btn-primary btn-block mb-5"
              id="form-btn"
              onClick={searchItem}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {pin.length === 6 || name !== "" ? (
        <ListHospital hospitalList={hospitalList} pin={pin} />
      ) : (
        <ListHospital hospitalList={hospitalList} />
      )}
    </div>
  );
};

export default FindHospital;
