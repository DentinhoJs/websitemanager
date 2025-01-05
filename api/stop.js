const axios = require('axios');

// Substitua os valores abaixo pelos valores reais que você deseja usar
const API_KEY = 'ptlc_x5BFfaYtI09rmAN6DPWupqyMdNtmZQ7Hc6IbEzpuC0y';
const PANEL_URL = 'https://painel.gratian.pro';
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';

module.exports = async (req, res) => {
  try {
    console.log('Iniciando requisição para Pterodactyl...');
    
    // Realizando a requisição POST para o Pterodactyl
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
    
    // Exibindo a resposta no console para depuração
    console.log('Resposta recebida do Pterodactyl:', response.data);

    // Retornando a resposta em formato JSON
    res.json(response.data);
  } catch (error) {
    // Logando o erro caso haja falha na requisição
    console.error('Erro ao tentar parar o servidor:', error);
    res.status(500).send({ message: 'Erro interno no servidor', error: error.message });
  }
};
