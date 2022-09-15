import axios from "axios";

export default axios.create({
  baseURL: "http://51.15.34.182:8081/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});
