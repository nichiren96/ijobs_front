import { BASE_URL } from "../constants/urls";
import axios from "axios";

export class JobService {
  save(data) {
    return axios.post(`${BASE_URL}/api/v1/jobs`, data);
  }

  getAllJobs() {
    return axios.get(`${BASE_URL}/api/v1/jobs`);
  }

  getOneJob(data) {
    return axios.get(`${BASE_URL}/api/v1/jobs/${data}`);
  }
}
