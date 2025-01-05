const axios = require('axios');

const API_KEY = 'ptlc_tC8sojvlAmC50G83yQKKnyRH7c0G0SQe72MWXY8678Z';
const PANEL_URL = 'https://painel.gratian.pro';
const SERVER_ID = 'ptlc_x5BFfaYtI09rmAN6DPWupqyMdNtmZQ7Hc6IbEzpuC0y';

module.exports = async (req, res) => {
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
};
