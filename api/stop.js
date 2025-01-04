const axios = require('axios');

const API_KEY = process.env.API_KEY;
const PANEL_URL = 'https://painel.gratian.pro';
const SERVER_ID = process.env.SERVER_ID;

module.exports = async (req, res) => {
  try {
    console.log('Iniciando requisição para Pterodactyl...');
    
    const response = await axios.post(
      `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
      { signal: 'kill' },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // Adicionando o cabeçalho CORS
    res.setHeader('Access-Control-Allow-Origin', '*');  // Permite requisições de qualquer origem
    
    console.log('Resposta recebida do Pterodactyl:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao tentar parar o servidor:', error);
    res.status(500).send(error.message);
  }
};
