import httpClient from "../utils/httClient";
import { login, register } from "../types/types";

const API_URL = "http://localhost:8080/auth"

export const loginUser = async (credentials: login): Promise<string[]> => {
  const response = await httpClient.post(`${API_URL}/login`, credentials);
  const token = response.data.token; // Suponiendo que el backend devuelve { token: "jwt_token" }
  
  localStorage.setItem("token", token); // Guardar el token para futuras solicitudes

  return token;
};

export const registerUser = async (credentials: register) => {

  const response = await httpClient.post(`${API_URL}/register`, credentials);

  return response.data;
}

export const getAllUsers = async() => {

  const users = httpClient.get(API_URL);

  return users;
}

export const deleteUser = async(id = Number) => {

  return await httpClient.delete(`${API_URL}${id}`);
}

export const updateUser = async(id = Number, credentials: register) => {

  return await httpClient.put(`${API_URL}${id}`, credentials);
}