import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Cabecera.css"

const Cabecera = () => {
    return (
        <div>
            <Link to="/" className="cabecera">
                <img src={logo} alt="" />
                <h4>Agenda</h4>
            </Link>
        </div>
    )
}
export default Cabecera;