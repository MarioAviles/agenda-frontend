import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/crudTasks";
import { Task } from "../types/types";


const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  const useUpdateTask = async (id: number, updatedTask: Task) => {
    try {
      await updateTask(id, updatedTask); // Actualizas en la base de datos
      await fetchTasks(); // Refrescas los datos
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const useDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId); // Eliminas de la base de datos
      await fetchTasks(); // Actualizas los datos
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  const useCreateTask = async (newTask: Task) => {
    try {
      await createTask(newTask); // Añades la nueva tarea
      await fetchTasks(); // Actualizas los datos
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Obtén las tareas al iniciar
  }, []);

  return { tasks, useUpdateTask, useDeleteTask, useCreateTask };
};

export default useTasks;