import useTasks from "../../hooks/useTasks";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <div className="taskList">
      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Completado</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem key={task.id} props={task}></TaskItem>
            ))
          ) : (
            <tr>
              <td>
                No hay tareas disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;