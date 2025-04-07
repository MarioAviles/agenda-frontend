import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const UserList = () => {
  const { users } = useUsers();
  console.log(users);

  useEffect(() => {
    console.log("Usuarios en el componente UserList:", users);
  }, [users]);

  return (
    <div className="taskList">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <UserItem key={user.username} props={user}></UserItem>
            ))
          ) : (
            <tr>
              <td>
                No hay usuarios disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;