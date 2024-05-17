import axios from "axios";
import { ENDPOINT } from "./config";

export function getProductAPI() {
  return axios.get(`${ENDPOINT}/products`);
}

export function ProductDetailAPI(id) {
  return axios.get(`${ENDPOINT}/products/${id}`);
}

export function LoginAPI() {
  return axios.post(`${ENDPOINT}/auth/login`, {
    username: values.email,
    password: values.password,
  });
}
