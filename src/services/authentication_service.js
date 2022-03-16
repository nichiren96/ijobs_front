import axios from "axios";
import { BASE_URL } from "../constants/urls";

export class AuthenticationService {
  login(data) {
    return axios.post(`${BASE_URL}/api/v1/users/login`, data);
  }

  register(data) {
    return axios.post(`${BASE_URL}/api/v1/users/signup`, data);
  }

  saveUser(userToken, userId) {
    localStorage.setItem("ijobsUserToken", userToken);
    localStorage.setItem("ijobsUserId", userId);
  }

  getUserId() {
    return localStorage.getItem("ijobsUserId");
  }

  getUserToken() {
    return localStorage.getItem("ijobsUserToken");
  }

  removeUser() {
    localStorage.removeItem("ijobsUserId");
    localStorage.removeItem("ijobsUserToken");
  }
}
