const axios = require('axios');

module.exports = async (req, res) => {
  const API_KEY = 'ptlc_15WGTVq9BLHGQeoJNqqgJV1JHENNVB4IfkqkuPtpyhP';
  const PANEL_URL = 'https://painel.gratian.pro';
  const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';

  // Handle different API routes
  if (req.method === 'POST') {
    const signal = req.url.substring(1); // Remove the slash from the URL (start/stop/restart)
    
    if (['start', 'stop', 'restart'].includes(signal)) {
      try {
        const response = await axios.post(
          `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
          { signal },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
        return res.status(200).json(response.data);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }
  }

  return res.status(404).send('Rota não encontrada');
};
