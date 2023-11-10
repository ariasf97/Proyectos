import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://services.emergiacc.com/',
});

export const generarToken = async () => {
    const USER = 'rdflorez';
    const PASS = 'pruebaetb';
    try {
        const response = await instance.get('WsLeads/token/getToken', {
            params: {
                Login: USER,
                Password: PASS,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw error;
    }
};

export const enviarDatos = async (url, headers) => {
    try {
        const response = await instance.post(url, null, { headers });
        console.log('Respuesta al enviar datos:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al enviar datos:', error.message);
        throw error;
    }
};

export const buildLeadData = (formData, token) => {
    const leadData = {
        cliente: 20,
        email: "ClienteCrediautos@emergiacc.com",
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
        url: `https://services.emergiacc.com/WSLeads/lead/insertar?${leadQueryString}`,
        headers: {
            'Authorization': `Bearer ${token.access_token}`,
            'Content-Type': 'application/json',
        },
    };
};

export const ejecutarLogica = async (formData) => {
    try {
        const token = await generarToken();
        const leadData = buildLeadData(formData, token);
        await enviarDatos(leadData.url, leadData.headers);
    } catch (error) {
        console.error('Error en la ejecución:', error.message);
        throw error;
    }
};
