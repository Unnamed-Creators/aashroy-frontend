import axios from "axios";

import { END_POINT } from "./constant";

const Instance = axios.create({
  baseURL: END_POINT,
  withCredentials: true,
  credentials: "include",
});

export default Instance;
