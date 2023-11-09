import axios from 'axios';

export const generarToken = async (login, pass) => {
    try {
        const response = await axios.get('', {
            params: {
                Login: login,
                Password: pass,
            },
        });
        console.log("Token generado:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw error;
    }
};

export const enviarDatos = async (url, headers) => {
    return await axios.post(url, null, { headers });
};

export const buildLeadData = (formData, token) => {
    const leadData = {
        cliente: 20,
        email: "ClienteCrediautos@.com",
        proveedor: 19,
        categoriaOrigen: 1,
        servicio: 149001004,
        centro: "CN",
        telefono: formData.telefono,
        producto: 'crediautos',
        categoriaLead1: "Categori1",
        categoriaLead2: formData.terminos,
        nombreCompleto: "ClienteCrediautos",
        familiaCliente: 1,
        fecha: "2019-12-27 09:26:00",
        informacionExtra: `{
            "tipoTelefonia": "1",
            "tipoLlamada": "1",
            "fechaLlamadaProgramada": "2022-11-05 08:57:20",
            "segmento": "Crediautos",
            "referenciador": "Referenciador",
            "id_backlanding": "giclic",
            "tipoCampagna": "campainmediun",
            "infoCampagna": "campana"
        }`,
    };

    const leadQueryString = Object.entries(leadData)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    return {
        url: `?${leadQueryString}`,
        headers: {
            'Authorization': `Bearer ${token.access_token}`,
            'Content-Type': 'application/json',
        },
    };
};
