import axios from "axios";

// Definimos la URL base de la API
const API_URL = "http://localhost:8080/auth";

// Creamos una instancia de Axios
const httpClient = axios.create({
  baseURL: API_URL, // Establece la URL base para todas las solicitudes
  timeout: 5000, // Opcional: Tiempo de espera para una solicitud (en milisegundos)
});

// Interceptor para añadir el token en cada solicitud
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtenemos el token almacenado en localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Añadimos el token al encabezado "Authorization"
    }
    return config; // Retornamos la configuración modificada
  },
  (error) => {
    // En caso de que ocurra un error al configurar la solicitud
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores en las respuestas
httpClient.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, simplemente la retornamos
    return response;
  },
  (error) => {
    // Si el servidor responde con un error, podemos manejarlo aquí
    if (error.response?.status === 401) { // Por ejemplo, si el token no es válido o ha caducado
      localStorage.removeItem("token"); // Eliminamos el token del almacenamiento local
      window.location.href = "/login"; // Redirigimos al usuario al formulario de login
    }
    return Promise.reject(error); // Retornamos el error para que también pueda ser manejado donde se llame
  }
);

export default httpClient; // Exportamos la instancia configurada