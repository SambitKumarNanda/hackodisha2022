import axios from "axios";
import { APIURL } from "../../global";

const getHospitalList = async () => {
  let hospitalList = await axios.get(APIURL + "/hospital").then((response) => {
    return response.data.hospitals;
  });

  return hospitalList;
};

export { getHospitalList };
