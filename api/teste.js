const axios = require('axios');

module.exports = async (req, res) => {
  try {
    console.log('Fazendo requisição de teste para httpbin...');
    
    const response = await axios.get('https://httpbin.org/get'); // Teste com URL pública
    res.setHeader('Access-Control-Allow-Origin', '*');  // Permite requisições de qualquer origem
    
    console.log('Resposta recebida:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao tentar fazer requisição:', error);
    res.status(500).send(error.message);
  }
};
