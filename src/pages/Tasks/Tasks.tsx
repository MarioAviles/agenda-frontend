import { Link } from "react-router-dom";
import "./Tasks.css"

const Tasks = () => {
    return (
        <div className="tasks">
            <h2>Bienvenido a su agenda</h2>
            <h3>Tiene usted una cuenta?</h3>
            <div className="apartados">
                <Link to="/tasks/create" className="apartado">
                <p>Añadir Task</p>
                </Link>
                <Link to="/tasks/update" className="apartado">
                <p>Editar Task</p>
                </Link>
                <Link to="/tasks/delete" className="apartado">
                <p>Eliminar Task</p>
                </Link>
            </div>
        </div>
    )
}
export default Tasks;
