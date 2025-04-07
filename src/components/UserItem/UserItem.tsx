import { register } from "../../types/types";

  const UserItem = ({ props }: { props: register }) => { //recibe por props un objeto task y tiene que seguir la estructura de la interfaz
    return (
      <tr>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.role}</td>
      </tr>
    );
  };
  
  export default UserItem;