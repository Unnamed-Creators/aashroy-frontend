import {
  GET_COMPLAINT_FAILED,
  GET_COMPLAINT_SUCCESS,
  FILE_COMPLAINT_FAILED,
  FILE_COMPLAINT_SUCCESS,
} from "../constant";
const iniState = {
  crimes: [],
  message: "",
};
const anoCrime = (action, state = iniState) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPLAINT_SUCCESS:
      return {
        ...state,
        crimes: payload,
      };
    case GET_COMPLAINT_FAILED:
      return {
        ...state,
        crimes: [],
      };
    case FILE_COMPLAINT_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case FILE_COMPLAINT_FAILED:
      return {
        ...state,
        message: "Failed!",
      };
  }
};
export default anoCrime;
