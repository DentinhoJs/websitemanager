const API_KEY = 'ptlc_OikX8zibepC2BPMdnLMGxQMsgeMHwPfMS4ykrGxWG7N';  // Sua API Key
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';  // Server ID completo
const PANEL_URL = 'https://painel.gratian.pro';  // URL do painel da Pterodactyl

// Função para acionar a API e controlar o servidor
function controlServer(action) {
  fetch(`${PANEL_URL}/api/client/servers/${SERVER_ID}/${action}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert('Erro ao executar a ação no servidor: ' + data.error);
    } else {
      alert('Ação realizada com sucesso: ' + action);
    }
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
    alert('Erro ao tentar controlar o servidor.');
  });
}

// Funções para iniciar, parar e reiniciar o servidor
function startServer() {
  controlServer('start');
}

function stopServer() {
  controlServer('stop');
}

function restartServer() {
  controlServer('restart');
}
