import { useEffect, useState } from "react";
import { getAllUsers, registerUser, loginUser, updateUser, deleteUser } from "../services/authUsers";
import { login, register } from "../types/types";


const useUsers = () => {
  const [users, setUsers] = useState<register[]>([]);

  const fetchUsers = async (): Promise<register[]> => {
  try {
    const response = await getAllUsers();
    setUsers(response.data); // Sigue actualizando el estado
    return response.data; // Retorna explícitamente los datos de usuarios
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return []; // Retorna un arreglo vacío en caso de error para evitar problemas
  }
};

  const useUpdateUser = async (id: NumberConstructor, updatedUser: register) => {
    try {
      await updateUser(id, updatedUser); // Actualizas en la base de datos
      await fetchUsers(); // Refrescas los datos
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const useDeleteUser = async (userId: NumberConstructor) => {
    try {
      await deleteUser(userId); // Eliminas de la base de datos
      await fetchUsers(); // Actualizas los datos
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const useRegisterUser = async (newUser: register) => {
    try {
      await registerUser(newUser); // Añades la nueva tarea
      await fetchUsers(); // Actualizas los datos
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  const useLoginUser = async (user: login) => {
    try {
      const token = await loginUser(user); // Obtén el token
      console.log("Token obtenido:", token);
      await fetchUsers(); // Llama a `fetchUsers` para obtener los usuarios
      console.log("Se ejecuta fetchUsers")
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Obtén los usuarios al iniciar
  }, []);

  return { users, useUpdateUser, useDeleteUser, useRegisterUser, useLoginUser };
};

export default useUsers;