import React from "react";
import { useForm } from "react-hook-form";
import useTasks from "../../hooks/useTasks";
import { Task } from "../../types/types";
import "./CrearTaskForm.css"
import TaskList from "../TaskList/TaskList";

const CrearTaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const { useCreateTask } = useTasks();

  const añadirTarea = handleSubmit((nuevoTask) => {
    const newTask = useCreateTask(nuevoTask);
    return newTask;
  });

  return (
    <div className="crearTaskForm">
      <h1>Añade una tarea</h1>
      <form>
        <div>
          <label>Título:</label>
          <input
            type="text"
            {...register("title" , { required: "Es obligatorio poner un título" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>

        <div>
          <label>Descripción:</label>
          <input type="text" {...register("description")} />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>¿Completado?</label>
          <div>
            <input
              type="radio"
              id="completed-true"
              value="true"
              {...register("completed")}
            />
            <label htmlFor="completed-true">Sí</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed-false"
              value="false"
              {...register("completed")}
            />
            <label htmlFor="completed-false">No</label>
          </div>
          {errors.completed && <span>{errors.completed.message}</span>}
        </div>

        <button onClick={añadirTarea}>Añadir Tarea</button>
      </form>
      <TaskList></TaskList>
    </div>
  );
};

export default CrearTaskForm;
