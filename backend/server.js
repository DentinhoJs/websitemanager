const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações da API
const API_KEY = 'ptlc_OikX8zibepC2BPMdnLMGxQMsgeMHwPfMS4ykrGxWG7N';
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';
const PANEL_URL = 'https://painel.gratian.pro';

app.use(cors());
app.use(express.json());

// Rota para controlar o servidor
app.post('/api/control/:action', async (req, res) => {
  const action = req.params.action; // start, stop, restart
  const url = `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ signal: action }),
    });

    if (response.ok) {
      res.json({ success: true, action });
    } else {
      const error = await response.json();
      res.status(400).json({ success: false, error });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erro ao conectar à API do Pterodactyl.' });
  }
});

// Rota para verificar o status do servidor
app.get('/api/status', async (req, res) => {
  const url = `${PANEL_URL}/api/client/servers/${SERVER_ID}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      res.json({ status: data.attributes.current_state });
    } else {
      const error = await response.json();
      res.status(400).json({ error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar à API do Pterodactyl.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
