import axios from "axios";

export const axiosFileUpload = axios.create({
  baseURL: ' https://api.cloudinary.com/v1_1',
});
