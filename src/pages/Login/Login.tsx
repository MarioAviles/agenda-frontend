import LoginUserForm from "../../components/LoginUserForm/LoginUserForm";

const Login = () => {
    return (
        <div className="auth">
            <h2>Inicie sesión</h2>
            <div className="apartados">
                <LoginUserForm></LoginUserForm>
            </div>
        </div>
    )
}
export default Login;