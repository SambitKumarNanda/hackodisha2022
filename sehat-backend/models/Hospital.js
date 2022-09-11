const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
  {
    hospital_name: {
      type: String,
      required: true,
    },
    hospital_image: {
      type: String,
      required: true,
    },
    bed_count: {
      type: Number,
      required: true,
    },
    hospital_description: {
      type: String,
      required: true,
    },
    hospital_contact: {
      type: String,
      required: true,
    },
    hospital_address: {
      type: String,
      required: true,
    },
    hospital_pincode: {
      type: Number,
      required: true,
    },
    hospital_state: {
      type: String,
      required: true,
    },
    hospital_city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

exports.Hospital = mongoose.model("hospital", hospitalSchema);
