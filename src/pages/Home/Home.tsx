import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <h2>Bienvenido a su agenda</h2>
            <h3>Tiene usted una cuenta?</h3>
            <div className="apartados">
                <Link to="/login" className="apartado">
                <p>Iniciar sesión</p>
                </Link>
                <Link to="/register" className="apartado">
                <p>Registrarse</p>
                </Link>
            </div>
        </div>
    )
}
export default Home;
