import axios from "../../helper/axiosinstance";
import {
  GET_COMPLAINT_FAILED,
  GET_COMPLAINT_SUCCESS,
  FILE_COMPLAINT_FAILED,
  FILE_COMPLAINT_SUCCESS,
} from "../constant";
export const reportAnoCrime = (data) => async (dispatch) => {
  try {
    const {
      crime,
      Date,
      Reason,
      AdditionalInfo,
      District,
      State,
      SuspectName,
      NearbyNgo,
      SusInfo,
    } = data;
    const body = JSON.stringify({
      crime,
      Date,
      Reason,
      AdditionalInfo,
      District,
      State,
      SuspectName,
      NearbyNgo,
      SusInfo,
    });
    const res = await axios.post("/anoCrime/fileComplaint", body);
    dispatch({
      type: FILE_COMPLAINT_SUCCESS,
      payload: res.message,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: FILE_COMPLAINT_FAILED,
    });
  }
};

export const getAllFiles = () => async (dispatch) => {
  try {
    const anoCrimes = await axios.get("/anoCrime");
    dispatch({
      type: GET_COMPLAINT_SUCCESS,
      payload: anoCrimes.crimes,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_COMPLAINT_FAILED,
    });
  }
};
