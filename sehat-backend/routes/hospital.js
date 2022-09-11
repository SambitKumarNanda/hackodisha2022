const express = require("express");
const { Hospital } = require("../models/Hospital");
// const Auth = require('../middlewares/Auth');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    return res.status(200).json({
      message: "All the hospitals are:",
      hospitals,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

router.post("/add", async (req, res) => {
  //   console.log(req.body);
  try {
    const {
      hospital_name,
      hospital_image,
      bed_count,
      hospital_description,
      hospital_contact,
      hospital_address,
      hospital_pincode,
      hospital_state,
      hospital_city,
    } = req.body;
    if (hospital_name == "" && error == "") {
      error = "Missing Hospital Name";
      return res.status(400).json({
        message: error,
      });
    }
    if (hospital_image == "" && error == "") {
      error = "Missing Hospital Image";
      return res.status(400).json({
        message: error,
      });
    }

    const HospitalObj = {
      hospital_name,
      hospital_image,
      bed_count,
      hospital_description,
      hospital_contact,
      hospital_address,
      hospital_pincode,
      hospital_state,
      hospital_city,
    };
    console.log(HospitalObj);
    const hospital = new Hospital(HospitalObj);
    await hospital.save();
    res.status(200).json({
      message: "Hospital Added Successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong2",
      error: err.message,
    });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      hospital_name,
      hospital_image,
      bed_count,
      hospital_description,
      hospital_contact,
      hospital_address,
      hospital_pincode,
      hospital_state,
      hospital_city,
    } = req.body;
    if (hospital_name == "" || hospital_name == undefined) {
      error = "Missing Hospital Name";
      return res.status(400).json({
        message: error,
      });
    }
    if (hospital_image == "" || hospital_image == undefined) {
      error = "Missing Hospital Image";
      return res.status(400).json({
        message: error,
      });
    }
    await Hospital.findByIdAndUpdate(id, {
      hospital_name,
      hospital_image,
      bed_count,
      hospital_description,
      hospital_contact,
      hospital_address,
      hospital_pincode,
      hospital_state,
      hospital_city,
    });
    return res.status(200).json({
      message: "Product updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hospital = await Hospital.findOne({ _id: req.params.id });
    res.status(200).json({
      message: "Product found successfully",
      hospital,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

module.exports = router;
