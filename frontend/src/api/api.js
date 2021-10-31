import axios from "axios";

const { REACT_APP_API_URL, REACT_APP_API_PORT, REACT_APP_API_BASEPATH } = process.env;

export default axios.create({
  baseURL: `${REACT_APP_API_URL}:${REACT_APP_API_PORT}/${REACT_APP_API_BASEPATH}`,
  headers: {
    "Content-type": "application/json"
  }
});
