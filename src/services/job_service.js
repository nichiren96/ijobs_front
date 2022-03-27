import { BASE_URL } from "../constants/urls";
import axios from "axios";

export class JobService {
  save(data) {
    return axios.post(`${BASE_URL}/api/v1/jobs`, data);
  }

  getAllJobs() {
    return axios.get(`${BASE_URL}/api/v1/jobs`);
  }

  getOneJob(id) {
    return axios.get(`${BASE_URL}/api/v1/jobs/${id}`);
  }

  updateJob(id, data) {
    return axios.patch(`${BASE_URL}/api/v1/jobs/${id}`, data);
  }

  deleteJob(id) {
    return axios.delete(`${BASE_URL}/api/v1/jobs/${id}`);
  }
}
