// frontend/script.js

document.getElementById('start').addEventListener('click', function() {
  fetch('/start', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('status').textContent = 'Servidor Iniciado!';
  })
  .catch(error => {
    document.getElementById('status').textContent = 'Erro ao iniciar o servidor.';
    console.error(error);
  });
});

document.getElementById('stop').addEventListener('click', function() {
  fetch('/stop', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('status').textContent = 'Servidor Parado!';
  })
  .catch(error => {
    document.getElementById('status').textContent = 'Erro ao parar o servidor.';
    console.error(error);
  });
});

document.getElementById('restart').addEventListener('click', function() {
  fetch('/restart', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('status').textContent = 'Servidor Reiniciado!';
  })
  .catch(error => {
    document.getElementById('status').textContent = 'Erro ao reiniciar o servidor.';
    console.error(error);
  });
});
