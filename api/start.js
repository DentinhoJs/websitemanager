const axios = require('axios');

const API_KEY = 'ptlc_tC8sojvlAmC50G83yQKKnyRH7c0G0SQe72MWXY8678Z';
const PANEL_URL = 'https://painel.gratian.pro';
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';

module.exports = async (req, res) => {
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
};
