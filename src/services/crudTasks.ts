import httpClient from "../utils/httClient";

const API_URL = "http://localhost:8080/tasks";

export const getTasks = async () => {
  const tasks = httpClient.get(API_URL);
    return tasks;
};

export const createTask = async (task: any) => {
    return await httpClient.post(API_URL, task);
};

export const updateTask = async (id: number, task: any) => {
    return await httpClient.put(`${API_URL}/${id}`, task);
};

export const deleteTask = async (id: number) => {
    return await httpClient.delete(`${API_URL}/${id}`);
};
