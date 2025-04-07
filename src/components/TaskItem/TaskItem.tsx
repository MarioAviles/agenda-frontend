import { Task } from "../../types/types";

  const TaskItem = ({ props }: { props: Task }) => { //recibe por props un objeto task y tiene que seguir la estructura de la interfaz
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.completed ? "Sí" : "No"}</td>
      </tr>
    );
  };
  
  export default TaskItem;