const API_KEY = 'ptlc_OikX8zibepC2BPMdnLMGxQMsgeMHwPfMS4ykrGxWG7N';  // Sua API Key
const SERVER_ID = '415f37c1-b47a-4172-bd35-ee9958853cee';  // Server ID completo
const PANEL_URL = 'https://painel.gratian.pro';  // URL do painel da Pterodactyl

// Função para acionar a API e controlar o servidor
function controlServer(action) {
  const url = `${PANEL_URL}/api/client/servers/${SERVER_ID}/power/${action}`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert('Erro: ' + data.error);
    } else {
      updateServerStatus(action);
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao tentar controlar o servidor.');
  });
}

// Função para atualizar o status do servidor
function updateServerStatus(action) {
  const status = document.getElementById('server-status');
  if (action === 'start') {
    status.textContent = 'Servidor Iniciado';
    status.style.color = 'green';
  } else if (action === 'stop') {
    status.textContent = 'Servidor Parado';
    status.style.color = 'red';
  } else if (action === 'restart') {
    status.textContent = 'Servidor Reiniciado';
    status.style.color = 'blue';
  }
}

// Funções para controlar o servidor
function startServer() {
  controlServer('start');
}

function stopServer() {
  controlServer('stop');
}

function restartServer() {
  controlServer('restart');
}
