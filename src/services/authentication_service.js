import axios from "axios";
import { BASE_URL } from "../constants/urls";

export class AuthenticationService {
  login(data) {
    return axios.post(`${BASE_URL}/api/v1/users/login`, data);
  }

  register(data) {}
}
