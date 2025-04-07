import React from "react";
import { useForm } from "react-hook-form";
import useTasks from "../../hooks/useTasks";
import "./EliminarTaskForm.css"
import TaskList from "../TaskList/TaskList";

interface Task {
  id: number;
}

const EliminarTaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const { useDeleteTask } = useTasks();

  const eliminarTarea = handleSubmit(({id}: Task) => {
    const task = useDeleteTask(id);
    return task;
  });

  return (
    <div className="eliminarTaskForm">
      <h1>Elimina una tarea</h1>
      <form>
        <div>
          <label>Id:</label>
          <input
            type="number"
            {...register("id", {
              valueAsNumber: true, // Asegura que se registre como número
              required: "Es obligatorio poner un ID",
            })}
          />
          {errors.id && <span>{errors.id.message}</span>}
        </div>
        <button onClick={eliminarTarea}>Eliminar Tarea</button>
      </form>
      <TaskList></TaskList>
    </div>
  );
};

export default EliminarTaskForm;
