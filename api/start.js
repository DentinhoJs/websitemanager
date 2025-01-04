const axios = require('axios');

// A URL e o ID do servidor, conforme fornecido
const PANEL_URL = 'https://painel.gratian.pro/server/415f37c1';
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';
const API_KEY = 'ptlc_tC8sojvlAmC50G83yQKKnyRH7c0G0SQe72MWXY8678Z';

module.exports = async (req, res) => {
  try {
    console.log('Iniciando requisição para o Pterodactyl...');

    const response = await axios.post(
      `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`, // URL corrigida
      { signal: 'start' }, // comando para iniciar o servidor
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`, // Cabeçalho de autenticação
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Resposta da API do Pterodactyl:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao tentar interagir com a API do Pterodactyl:', error);
    res.status(500).send(error.message);
  }
};
