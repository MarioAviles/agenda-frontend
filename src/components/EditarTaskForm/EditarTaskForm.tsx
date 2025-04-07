import React from "react";
import { useForm } from "react-hook-form";
import useTasks from "../../hooks/useTasks";
import "./EditarTaskForm.css"
import TaskList from "../TaskList/TaskList";

interface Task {   //Creo una interfaz para definir la estructura que van a seguir los datos
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const EditarTaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, //para acceder independientemente a los valores
  } = useForm<Task>();

  const { useUpdateTask } = useTasks();
  const id = watch("id") //guardo el id por separado para poder pasarlo por parametro

  const editarTarea = handleSubmit((data) => {
    const { title, description, completed } = data;
    const nuevoTask = { id, title, description, completed };
    const newTask = useUpdateTask(id, nuevoTask); // Usamos 'id' directamente aquí
    return newTask;
  });

  return (
    <div className="editarTaskForm">
      <h1>Edita una tarea</h1>
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
        <div>
          <label>Título:</label>
          <input
            type="text"
            {...register("title")}
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

        <button onClick={editarTarea}>Editar Tarea</button>
      </form>
      <TaskList></TaskList>
      
    </div>
  );
};

export default EditarTaskForm;
