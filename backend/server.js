// backend/server.js

const express = require('express');
const axios = require('axios');
const path = require('path'); // Importa o módulo path para trabalhar com caminhos
const app = express();
const port = 3000;

// Configurações da API do Pterodactyl
const API_KEY = 'ptlc_tC8sojvlAmC50G83yQKKnyRH7c0G0SQe72MWXY8678Z';
const PANEL_URL = 'https://painel.gratian.pro';
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';

// Serve arquivos estáticos da pasta frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// API - Rota para iniciar o servidor
app.post('/start', async (req, res) => {
  try {
    const response = await axios.post(
      `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
      { signal: 'start' },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// API - Rota para parar o servidor
app.post('/stop', async (req, res) => {
  try {
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
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// API - Rota para reiniciar o servidor
app.post('/restart', async (req, res) => {
  try {
    const response = await axios.post(
      `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
      { signal: 'restart' },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota para servir o HTML (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
