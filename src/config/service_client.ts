import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    // baseURL: "https://amazon-rekognition-py.onrender.com/",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
export default apiClient;
