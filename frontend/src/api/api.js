import axios from "axios";

// FIXME: use process.env!!!
export default axios.create({
  baseURL: "http://localhost:3030/api",
  headers: {
    "Content-type": "application/json"
  }
});
