import axios from "axios";

export const endPoints = [
  axios.get("http://web-vitals.meeshotest.in/analytics/1.0/pagespeed/get"),
  axios.get("http://192.168.0.177:3030/analytics/1.0/service/get"),
];
// axios.get("https://jsonplaceholder.typicode.com/users"),
