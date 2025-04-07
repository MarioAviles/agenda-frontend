import React from "react";
import { useForm } from "react-hook-form";
import useUsers from "../../hooks/useUsers";
import { register } from "../../types/types";
import { Link } from "react-router-dom";

const RegisterUserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<register>();

  const { useRegisterUser } = useUsers();

  const añadirUsuario = handleSubmit((nuevoUsuario) => {
    const newUser = useRegisterUser(nuevoUsuario);
    return newUser;
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

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email" , { required: "Es obligatorio poner un email" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <button onClick={añadirUsuario}>Añadir Usuario</button>
      </form>
      <Link to = "/login">
        <span>Inicia sesión</span>
      </Link>
    </div>
  );
};

export default RegisterUserForm;
