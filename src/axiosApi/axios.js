import axios from "axios";

const api = axios.create({
  baseURL: "https://energyflow-25pc.onrender.com/api",
});

export default api;
