const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST' && req.url === '/start') {
    try {
      const response = await axios.post(
        'https://painel.gratian.pro/api/client/servers/415f37c1-b47a-4172-bd35-ee9958853cee/power',
        { signal: 'start' },
        {
          headers: {
            Authorization: `Bearer ptlc_15WGTVq9BLHGQeoJNqqgJV1JHENNVB4IfkqkuPtpyhP`,
            'Content-Type': 'application/json',
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else if (req.method === 'POST' && req.url === '/stop') {
    // Implemente a mesma lógica para /stop e /restart
  }
};
