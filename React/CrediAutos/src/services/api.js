// api.js
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


export const realizarPeticionPost = async (utmSource,utmMedium,utmCampaign,gclid, telefono, categoriaLead2, token) => {
    const baseURL = 'https://services.emergiacc.com/WSLeads/lead/insertar';
    const url = `${baseURL}?cliente=20&email=ClienteCrediautos@emergiacc.com&proveedor=19&categoriaOrigen=1&servicio=149001004&centro=CN&telefono=${telefono}&producto=Crediautos&categoriaLead1=CategoriaLead1&categoriaLead2=${categoriaLead2}&nombreCompleto=ClienteCrediautos&familiaCliente=1&fecha=${encodeURIComponent('2019-12-27 09:26:00')}&informacionExtra={"tipoTelefonia":"1","tipoLlamada":"1","fechaLlamadaProgramada":"2022-11-05 08:57:20","segmento":"CREDIAUTO","referenciador":"${utmSource}","id_backlanding":"${gclid}","tipoCampagna":"${utmMedium}","infoCampagna":"${utmCampaign}","ipUsuario":"ip"}`;
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: headers,
    };
    return axios.request(config)
};
