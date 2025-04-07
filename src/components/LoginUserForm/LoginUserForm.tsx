import React from "react";
import { useForm } from "react-hook-form";
import useUsers from "../../hooks/useUsers";
import { login } from "../../types/types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginUserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<login>();

  const { useLoginUser } = useUsers();
  const navigate = useNavigate();

  const iniciarSesion = handleSubmit((usuario) => {
    useLoginUser(usuario);
    navigate("/tasks")
  });

  return (
    <div>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            {...register("username" , { required: "Es obligatorio poner un nombre" })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            {...register("password" , { required: "Es obligatorio poner una contraseña" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button onClick={iniciarSesion}>Añadir Usuario</button>
      </form>
      <Link to="/">
        <p>Volver al inicio</p>
      </Link>
    </div>
  );
};

export default LoginUserForm;
