import "./Auth.css"
import RegisterUserForm from "../../components/RegisterUserForm/RegisterUserForm";

const Auth = () => {
    return (
        <div className="auth">
            <h2>Regístrese</h2>
            <div className="apartados">
                <RegisterUserForm></RegisterUserForm>
            </div>
        </div>
    )
}
export default Auth;