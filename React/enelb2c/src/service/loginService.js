// apiService.js
import axios from "axios";

const apiService = axios.create({
  baseURL: "https://services.emergiacc.com",
});

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*", // Esto podría permitir cualquier origen, ajusta según tus necesidades de seguridad
  // Otros encabezados CORS que podrían ser útiles
  // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

// Ejemplo de función para realizar una solicitud GET con parámetros
export const consumoService = async ({ password, user }) => {
  try {
    // Define los parámetros que deseas enviar

    // Realiza la solicitud GET con los parámetros
    const response = await apiService.get("/WSLeads/LoginEnel.aspx", {
      params: {
        user: user,
        pass: password,
      },
      headers: headers,
    });

    // Maneja los datos de la respuesta
    console.log("Datos obtenidos:", response.data);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la solicitud
    console.error("Error al obtener datos:", error);
    return null;
  }
};
